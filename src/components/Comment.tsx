import moment from "moment/moment";
import { LikeSvg, ArrowUp } from "@/utils/Icons";
import { IComment } from "@/pages/view/interface";
import { useState } from "react";
import CommentAnswer from "@/components/CommentAnswer";

const Comment = ({
  item: {
    replies,
    snippet: {
      channelId,
      totalReplyCount,
      topLevelComment: {
        snippet: {
          authorProfileImageUrl,
          authorDisplayName,
          publishedAt,
          textDisplay,
          textOriginal,
          likeCount,
        },
      },
    },
  },
}: {
  item: IComment;
}) => {
  const [isImg, setIsImg] = useState(true);
  const [commentOpen, setCommentOpen] = useState(false);
  return (
    <div className={"flex mt-3 px-3"} key={channelId}>
      <img
        onError={() => setIsImg(false)}
        className={`bg-gray-600 rounded-[100px] h-[60px] min-w-[60px] mr-3`}
        alt={""}
        src={
          isImg
            ? authorProfileImageUrl
            : "https://yt3.googleusercontent.com/O4G9APGviJk6ID3qhFMYDAkoiHFGsUYek-aDvI206S31FvUe_BcotKeu17BkkBFaejQrB_LJCQ=s900-c-k-c0x00ffffff-no-rj"
        }
      />
      <div className={"flex flex-col"}>
        <span className={"flex mb-2"}>
          <h1 className={"mr-2"}>{authorDisplayName}</h1>
          <p>
            {moment(publishedAt).format("h:mm")}
            {textOriginal !== textDisplay && " (изменено)"}
          </p>
        </span>

        <p className={"mb-2"}>{textDisplay}</p>

        <span className={"flex items-center mb-3"}>
          <div
            className={
              "cursor-pointer mr-3 group hover:fill-red-500 transition-all"
            }
          >
            <LikeSvg />
          </div>
          {likeCount}
        </span>

        {Boolean(totalReplyCount) && (
          <div
            onClick={() => setCommentOpen((prev) => !prev)}
            className={
              "cursor-pointer hover:text-red-600 group flex items-center"
            }
          >
            <div
              className={`${
                commentOpen ? "rotate-180" : ""
              } group-hover:fill-red-500 mr-1`}
            >
              <ArrowUp />
            </div>
            {totalReplyCount} ответы
          </div>
        )}

        {replies && commentOpen && (
          <div className={"mt-3"}>
            {replies.comments.map((item) => (
              <CommentAnswer item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
