import { useRouter } from "next/router";
import useStore from "@/store/store";

function Error({ statusCode }) {
  // const router = useRouter();
  // const setLocal = useStore((store) => store.l);
  // if (statusCode === 401) {
  //   router.replace("/blog");
  // }
  // if (statusCode === 404) {
  //   if (router.asPath.includes("google/callback")) {
  //     console.log(router.asPath.split("&")[0].split("#")[1]);
  //     const authToken = router.asPath.split("&")[0].split("#")[1];
  //
  //     router.replace("/");
  //   }
  // }

  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  console.log(res, err);
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
