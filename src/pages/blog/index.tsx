import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";

const Blog = () => {
  return (
    <div>
      <ButtonLink text={"НАЗАД"} href={"/"} />
      <div className={"flex flex-col mt-10"}>
        {[
          { name: "ПЕРВЫЙ ПОСТ", desc: "Этот пост был первым" },
          { name: "ВТОРОЙ ПОСТ", desc: "Этот пост был вторым" },
          { name: "ТРЕТИЙ", desc: "А этот третий пост" },
        ].map(({ name, desc }, ind) => (
          <Link
            key={ind}
            href={{
              pathname: `blog/[${ind}]`,
              query: { id: ind, name: name, desc: desc },
            }}
          >
            {name}
          </Link>
        ))}
      </div>

      {/*<div className={"flex flex-col mt-10"}>*/}
      {/*  <Link href={"blog/first"}>FIRST POST</Link>*/}
      {/*  <Link href={"blog/second"}>SECOND POST</Link>*/}
      {/*  <Link href={"blog/third"}>THIRD POST</Link>*/}
      {/*</div>*/}
    </div>
  );
};

export default Blog;
