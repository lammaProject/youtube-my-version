import Link from "next/link";
import { useRouter } from "next/router";

const buttonsNav = [
  {
    name: "POPULAR",
    href: "/dashboard/popular",
  },
  {
    name: "SEARCH",
    href: "/dashboard/search",
  },
];
const NavDashboard = () => {
  const router = useRouter();

  return (
    <div className={"grid grid-cols-12"}>
      {buttonsNav.map((i) => (
        <Link
          className={`${
            router.pathname === i.href ? "text-[#ff0000] shadow-[#106ae0] " : ""
          } p-2 text-center hover:text-[#ff0000] transition-all hover:shadow-[#106ae0]`}
          href={i.href}
        >
          {i.name}
        </Link>
      ))}
    </div>
  );
};

export default NavDashboard;
