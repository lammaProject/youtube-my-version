import { useLayoutEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    router.push("/dashboard/popular");
  }, [router]);

  return <div></div>;
};

export default Home;
