import Loader from "@/components/Loader";
import YouTube from "react-youtube";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import useStore from "@/store/store";
import { LikeSvg, View } from "@/utils/Icons";

export interface IVideoCard {
  id: string | any;
  snippet: {
    channelTitle: string;
    title: string;
    channelId: string;
    categoryId: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
  statistics?: {
    viewCount: number;
    likeCount: number;
  };
}

const VideoCard = ({ item }: { item: IVideoCard }) => {
  const router = useRouter();

  const [clickActive, setClickActive] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);

  const storeVideoHover = useStore((store) => store.videoHover);
  const storeSetVideoHover = useStore((store) => store.setVideoHover);

  const hoverStartTime = useRef(0);
  const timer = useRef<any>(null);

  const handleMouseEnter = (id: string) => {
    hoverStartTime.current = Date.now();
    timer.current = setInterval(() => {
      if (Date.now() - hoverStartTime.current > 500) {
        clearInterval(timer.current);
        setLoadVideo(true);
        storeSetVideoHover(id);
      }
    }, 100);
  };

  const handleMouseLeave = () => {
    clearInterval(timer.current);
  };

  const handleClick = () => {
    setClickActive(true);
    router.push(`/view/${item.id?.videoId || item?.id}`);
  };

  return (
    <>
      {clickActive ? (
        <div className={"animate-bounce"}>
          <Loader />
        </div>
      ) : (
        <div
          onClick={handleClick}
          key={item?.id || item.id.videoId}
          className={
            "flex flex-col hover:bg-white hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:scale-110 cursor-pointer group outline-none"
          }
        >
          {storeVideoHover === item.id ||
          storeVideoHover === item.id.videoId ? (
            <div>
              {loadVideo && (
                <div className={"w-[100%] h-0"}>
                  <Loader />
                </div>
              )}
              <YouTube
                title={"TITLE"}
                onReady={() => setLoadVideo(false)}
                opts={{
                  height: "200px",
                  width: "100%",
                  playerVars: {
                    autoplay: 1,
                  },
                }}
                videoId={item?.id?.videoId ? item.id.videoId : item.id}
              />
            </div>
          ) : (
            <img
              alt={""}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              style={{ width: "100%", height: "auto" }}
              src={item.snippet.thumbnails.medium.url}
            />
          )}

          <div className={"pt-2 px-2 pb-2 flex flex-col h-[100%]"}>
            <h1 className={"group-hover:text-black text-[18px] mb-2"}>
              {item.snippet.title.length > 60
                ? item.snippet.title.slice(0, 60) + "..."
                : item.snippet.title}
            </h1>

            <div className={"mt-auto"}>
              <p className={"group-hover:text-black text-gray-400"}>
                {item.snippet.channelTitle}
              </p>

              <div
                className={
                  "flex justify-between group-hover:text-black group-hover:fill-red"
                }
              >
                {item?.statistics && (
                  <div className={"flex items-center"}>
                    <p className={"mr-2"}>{item?.statistics?.viewCount}</p>
                    <View />
                  </div>
                )}

                {item?.statistics && (
                  <div className={"flex items-center"}>
                    <p className={"mr-2"}>{item?.statistics?.likeCount}</p>
                    <LikeSvg />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
