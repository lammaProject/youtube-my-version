import { useRouter } from "next/router";
import ButtonLink from "@/components/ButtonLink";

const Id = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>{router.query.name}</h1>
      <p>{router.query.desc}</p>
      <div className={"mt-10"}>
        <ButtonLink text={"НАЗАД"} href={"/blog"} />
      </div>
    </div>
  );
};

export default Id;
