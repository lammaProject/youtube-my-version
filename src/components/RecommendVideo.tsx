import moment from "moment/moment";
import { IRecommend } from "@/pages/view/interface";

const RecommendVideo = ({ item: { snippet } }: { item: IRecommend }) => {
  return (
    <div
      className={
        "grid grid-cols-3 gap-1 mb-5 cursor-pointer hover:scale-110 group hover:bg-white hover:text-black"
      }
    >
      <img
        alt={""}
        className={"col-span-2 w-[100%]"}
        src={snippet.thumbnails.medium.url}
      />

      <div className={"flex justify-between flex-col"}>
        <div>
          <p className={"text-[18px]"}>
            {snippet.title.length > 30
              ? snippet.title.slice(0, 30) + "..."
              : snippet.title}
          </p>
          <p className={"text-[#ff0000] text-[14px]"}>
            {snippet.channelTitle.length > 30
              ? snippet.channelTitle.slice(0, 30) + "..."
              : snippet.channelTitle}
          </p>
        </div>
        <p>{moment(snippet.publishedAt).format("DD.MM.YYYY")}</p>
      </div>
    </div>
  );
};

export default RecommendVideo;
