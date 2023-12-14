import ky from "ky-universal";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchPosts = async (API: string, { pageParam }) => {
  const parsed: Object = await ky(
    `https://youtube.googleapis.com/youtube/v3/${API}&pageToken=${pageParam}&regionCode=US&key=${process.env.NEXT_PUBLIC_API_KEY}`,
  ).json();
  return { items: parsed.items, nextPageToken: parsed.nextPageToken };
};

const usePosts = (API: string, queryKey: string) => {
  return useInfiniteQuery({
    queryKey: [queryKey],
    queryFn: (event) => fetchPosts(API, event),
    initialPageParam: "",
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
  });
};

export { usePosts, fetchPosts };
