import VideoCard, { IVideoCard } from "@/components/VideoCard";
import Loader from "@/components/Loader";
import { InView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { usePosts } from "@/hooks/useServices";
import useStore from "@/store/store";
import NavDashboard from "@/components/NavDashboard";
import ErrorDesc from "@/components/ErrorDesc";
import { router } from "next/client";

interface IDashboardPage {
  dontLoad?: boolean;
  API?: string;
  queryKey?: string;
}

const DashboardPage = ({ dontLoad = false, API, queryKey }: IDashboardPage) => {
  const [load, setLoad] = useState(true);

  // const watchError = useStore((store) => store.errorWatch);
  const storeSetHeaderSearchLoader = useStore(
    (store) => store.setHeaderSearchLoader,
  );

  const {
    data,
    isPending,
    refetch,
    error,
    fetchNextPage,
    isFetching,
    isError,
  } = usePosts(API || "", queryKey || "");

  // useEffect(() => {
  //   if (watchError === "401") {
  //     router.replace("/auth");
  //   }
  // }, [watchError]);

  useEffect(() => {
    void refetch();
  }, [API]);

  useEffect(() => {
    if (!isPending) {
      setLoad(false);
      storeSetHeaderSearchLoader(false);
    }
  }, [isFetching]);

  return (
    <div className={"mt-24 px-10"}>
      {error ? (
        <ErrorDesc />
      ) : (
        <>
          <NavDashboard />

          {!dontLoad && (
            <div className={"grid mt-5 grid-cols-5 gap-5"}>
              {data &&
                data?.pages.map((group) => (
                  <>
                    {group?.items?.map((item: IVideoCard) => (
                      <VideoCard item={item} />
                    ))}
                  </>
                ))}

              {load && (
                <div className={"flex w-[320px]"}>
                  <Loader />
                </div>
              )}
            </div>
          )}

          {!isPending && (
            <InView
              as={"div"}
              className={
                "left-10 -right-1 h-[10px] mt-[50vh] animate-bounce transition-all animate-changeColorBg"
              }
              onChange={(inView) => {
                if (inView) {
                  if (data) {
                    setLoad(true);
                    fetchNextPage();
                  }
                }
              }}
            ></InView>
          )}
        </>
      )}
    </div>
  );
};

export default DashboardPage;
