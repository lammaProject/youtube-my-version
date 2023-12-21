import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import moment from "moment";
import axios from "axios";
import { GetServerSideProps } from "next";
import ErrorDesc from "@/components/ErrorDesc";
import { IComment, IFetchView, IRecommend } from "@/pages/view/interface";
import { usePosts } from "@/hooks/useServices";
import { InView } from "react-intersection-observer";
import Comment from "@/components/Comment";
import RecommendVideo from "@/components/RecommendVideo";

export const IconSub = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 731 534"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M87.0334 150.567C87.0334 245.467 139.767 326.9 213.9 326.9C288 326.9 340.667 245.467 340.667 150.567C340.667 55.7 295.733 0.233337 213.9 0.233337C132.033 0.233337 87.0334 55.7 87.0334 150.567ZM8.20002 506.733C35.5334 524.633 104.167 533.567 214 533.567C323.833 533.567 392.433 524.633 419.8 506.767C422.28 505.144 424.282 502.889 425.6 500.235C426.919 497.581 427.505 494.623 427.3 491.667C422.233 417.4 351.067 380.233 213.867 380.233C76.6333 380.233 5.56669 417.4 0.700023 491.7C0.506891 494.645 1.0995 497.589 2.41725 500.231C3.735 502.872 5.73061 505.116 8.20002 506.733ZM564 433.667C555.159 433.667 546.681 430.155 540.43 423.904C534.179 417.652 530.667 409.174 530.667 400.333V300.333H430.667C421.826 300.333 413.348 296.821 407.096 290.57C400.845 284.319 397.333 275.841 397.333 267C397.333 258.159 400.845 249.681 407.096 243.43C413.348 237.179 421.826 233.667 430.667 233.667H530.667V133.667C530.667 124.826 534.179 116.348 540.43 110.096C546.681 103.845 555.159 100.333 564 100.333C572.841 100.333 581.319 103.845 587.57 110.096C593.821 116.348 597.333 124.826 597.333 133.667V233.667H697.333C706.174 233.667 714.652 237.179 720.904 243.43C727.155 249.681 730.667 258.159 730.667 267C730.667 275.841 727.155 284.319 720.904 290.57C714.652 296.821 706.174 300.333 697.333 300.333H597.333V400.333C597.333 409.174 593.821 417.652 587.57 423.904C581.319 430.155 572.841 433.667 564 433.667Z"
      fill="white"
    />
  </svg>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  try {
    const {
      data: {
        items: [
          {
            snippet: { channelId },
          },
        ],
        items: [videoItem],
      },
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.NEXT_PUBLIC_API_KEY}`,
    );

    const getChannel = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.NEXT_PUBLIC_API_KEY}`;

    const {
      data: {
        items: [channelData],
      },
    } = await axios.get(getChannel);

    return { props: { videoItem, channelData } };
  } catch (error) {
    console.log(error);
    return {
      props: {
        videoItem: [],
        channelData: [],
        recommendData: [],
        commentsData: [],
      },
    };
  }
};
const View = ({ videoItem, channelData }: IFetchView) => {
  const [load, setLoad] = useState({
    video: true,
    comment: true,
    recommend: true,
  });
  const [closeDesc, setCloseDesc] = useState(true);
  const [commentOrder, setCommentOrder] = useState<"relevance" | "time">(
    "relevance",
  );

  if (!videoItem || !channelData)
    return (
      <div className={"text-white mt-24 px-10"}>
        <ErrorDesc />
      </div>
    );

  const {
    data: commentsData,
    fetchNextPage: fetchNextPageComment,
    refetch,
  } = usePosts(
    `commentThreads?part=snippet%2Creplies&order=${commentOrder}&videoId=${videoItem.id}`,
    `comments ${commentOrder}`,
  );

  const { data: recommendData, fetchNextPage: fetchNextPageRec } = usePosts(
    `search?part=snippet&maxResults=25&type=video&videoCategoryId=${videoItem.snippet.categoryId}`,
    "recommend",
  );

  useEffect(() => {
    if (commentsData) {
      setLoad((prev) => ({ ...prev, recommend: false }));
    }

    if (recommendData) {
      setLoad((prev) => ({ ...prev, recommend: false }));
    }
  }, [commentsData, recommendData]);

  useEffect(() => {
    void refetch();
  }, [commentOrder]);

  return (
    <div className={"p-10 mt-24"}>
      {load.video && <Loader />}

      <YouTube
        title={"TITLE"}
        onReady={() => setLoad((prev) => ({ ...prev, video: false }))}
        loading={"lazy"}
        opts={{
          height: "500px",
          width: "100%",
          playerVars: {
            autoplay: 1,
          },
        }}
        videoId={videoItem.id}
      />

      <h1 className={"mt-10 text-3xl"}>{videoItem.snippet.title}</h1>

      <div className={"grid grid-cols-3 gap-10"}>
        <div className={"w-100%  text-white col-start-1 col-span-2"}>
          <div className={"mt-5 flex"}>
            <img
              alt={""}
              src={channelData.snippet.thumbnails.medium.url}
              className={"rounded-[100px] bg-gray-500 w-[50px] h-[50px] mr-3"}
            />
            <div className={"flex flex-col"}>
              <p className={"text-[18px]"}>{videoItem.snippet.channelTitle}</p>
              <div className={"flex items-center justify-between"}>
                <p>{channelData.statistics.subscriberCount}</p>
                <IconSub />
              </div>
            </div>
          </div>
          <div className={"bg-gray-600 p-5 mt-5"}>
            <div className={"flex"}>
              <p className={"mr-5"}>{videoItem.statistics.viewCount} view</p>
              <p>
                {moment(videoItem.snippet.publishedAt).format("DD.MM.YYYY")}
              </p>
            </div>

            {!closeDesc && (
              <p className={"mt-5"} style={{ whiteSpace: "pre-wrap" }}>
                {videoItem.snippet.description}
              </p>
            )}

            <button
              onClick={() => setCloseDesc((prev) => !prev)}
              className={"mt-3"}
            >
              {closeDesc ? "more" : "close"}
            </button>
          </div>

          <div className={"flex flex-col"}>
            <p className={"mt-10 text-2xl"}>
              {videoItem.statistics.commentCount} комментариев
            </p>

            <div className={"flex mt-2 items-center"}>
              <div
                className={"rounded-[100px] mr-3 bg-gray-600 w-[30px] h-[30px]"}
              ></div>
              <input
                className={"flex-grow p-3 text-black border-b-white bg-white"}
              />
            </div>

            <div className={"mt-5 flex items-center"}>
              <h1
                onClick={() => setCommentOrder("relevance")}
                className={`${
                  commentOrder === "relevance"
                    ? "opacity-100 "
                    : "opacity-50 text-white"
                } text-[#ff0000] mr-3 cursor-pointer hover:opacity-100 hover:text-[#ff0000] transition-all`}
              >
                Популярные
              </h1>
              <h1
                onClick={() => setCommentOrder("time")}
                className={`${
                  commentOrder === "time"
                    ? "opacity-100"
                    : "opacity-50 text-white"
                } text-[#ff0000] mr-3 cursor-pointer hover:opacity-100 hover:text-[#ff0000] transition-all`}
              >
                Новые
              </h1>
            </div>
            <div className={"flex flex-col"}>
              {commentsData &&
                commentsData.pages.map((group) => (
                  <>
                    {group.items.map((item: IComment) => (
                      <Comment item={item} />
                    ))}
                  </>
                ))}

              {load.comment && (
                <div className={"flex w-[320px]"}>
                  <Loader />
                </div>
              )}

              <InView
                as={"div"}
                className={
                  "left-10 -right-1 h-[10px] animate-bounce transition-all animate-changeColorBg"
                }
                onChange={(inView) => {
                  if (inView) {
                    if (commentsData) {
                      setLoad((prev) => ({ ...prev, comment: true }));
                      fetchNextPageComment();
                    }
                  }
                }}
              ></InView>
            </div>
          </div>
        </div>

        {/*right side*/}
        <div className={"col-span-1 p-2"}>
          {recommendData &&
            recommendData.pages.map((group) => (
              <>
                {group.items.map((item: IRecommend) => (
                  <RecommendVideo item={item} />
                ))}
              </>
            ))}

          {load.recommend && (
            <div className={"flex w-[320px]"}>
              <Loader />
            </div>
          )}

          <InView
            as={"div"}
            className={
              "left-10 -right-1 h-[10px] animate-bounce transition-all animate-changeColorBg"
            }
            onChange={(inView) => {
              if (inView) {
                if (commentsData) {
                  setLoad((prev) => ({ ...prev, recommend: true }));
                  fetchNextPageRec();
                }
              }
            }}
          ></InView>
        </div>
      </div>
    </div>
  );
};

export default View;
