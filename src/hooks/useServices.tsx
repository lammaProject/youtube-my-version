import ky from "ky-universal";
import { useInfiniteQuery } from "@tanstack/react-query";
import { http } from "@/api/http";

const fetchPosts = async (API: string, { pageParam }) => {
  const {
    data: { items, nextPageToken },
  } = await http.get(
    `${API}&pageToken=${pageParam}&regionCode=US&key=${process.env.NEXT_PUBLIC_API_KEY}`,
  );
  return { items, nextPageToken };
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
