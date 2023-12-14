import { useRouter } from "next/router";

type TButtonLink = {
  text: string;
  href: string;
};
export default function ButtonLink({ text, href }: TButtonLink) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(href)}
      className={"text-amber-100 hover:text-red-50"}
    >
      {text}
    </button>
  );
}
