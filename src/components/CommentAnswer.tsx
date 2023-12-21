import { ICommentAnswer } from "@/pages/view/interface";
import { useState } from "react";
import { LikeSvg } from "@/utils/Icons";

const CommentAnswer = ({
  item: {
    snippet: {
      authorDisplayName,
      authorProfileImageUrl,
      textDisplay,
      likeCount,
    },
  },
}: {
  item: ICommentAnswer;
}) => {
  const [isImg, setIsImg] = useState(true);
  return (
    <div className={"flex mb-3"}>
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
        <h1 className={"mb-1"}>{authorDisplayName}</h1>
        <p className={"mb-2"}>{textDisplay}</p>
        <span className={"flex items-center"}>
          <div className={"mr-2"}>
            <LikeSvg />
          </div>
          {likeCount}
        </span>
      </div>
    </div>
  );
};

export default CommentAnswer;
