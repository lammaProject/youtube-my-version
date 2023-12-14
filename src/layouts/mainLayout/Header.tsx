import { useState } from "react";
import { NextRouter, useRouter } from "next/router";
import useStore from "@/store/store";

export const Spinner = () => (
  <div role="status">
    <svg
      aria-hidden="true"
      className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600  -top-2 -right-10 absolute"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="#ff0000"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="black"
      />
    </svg>
  </div>
);
export const YoutubeIcon = () => (
  <svg
    className={"fill-white group-hover:fill-[#ff0000] transition-all"}
    width="50"
    height="50"
    viewBox="0 0 509 358"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M257.4 358C200.3 356.2 146 354.8 91.7 352.7C80 352.2 68.1 350.4 56.7 347.7C35.3 342.7 20.5 329.8 12.9 308.7C6.8 291.7 4.6 274.2 3 256.4C-0.500001 214.6 -0.500002 172.8 1.2 131C2.2 107.4 2.8 83.6 9.1 60.7C12.9 47 17.5 33.6 28.6 23.7C40.3 13.2 54 6.89999 69.6 6.19999C112.4 4.09999 155.1 1.49999 197.9 1.09999C255.5 0.499988 313.2 1.29999 370.8 2.39999C395.7 2.89999 420.8 4.19999 445.5 7.39999C468.1 10.4 485 23 494 45C500.9 61.9 503.5 79.6 505 97.6C508.9 142.7 509 187.8 506.8 232.9C505.7 255.8 504.6 278.8 498.1 301.1C490.7 326.7 475 343.6 448.8 349.4C438.6 351.6 428 352.4 417.6 352.8C363.2 354.7 308.9 356.4 257.4 358ZM202.1 244.3C247.7 220.7 292.8 197.3 338.8 173.4C292.9 149.4 247.8 125.9 202.1 102C202.1 149.7 202.1 196.6 202.1 244.3Z" />
  </svg>
);

export const SearchIcon = ({
  focus = false,
  onHover,
  value = "",
  router,
}: {
  focus: boolean;
  onHover: any;
  value: string;
  router: NextRouter;
}) => {
  const storeSearchValue = useStore((store) => store.setSearchValue);
  const storeSetHeaderSearchLoader = useStore(
    (store) => store.setHeaderSearchLoader,
  );

  return (
    <div
      style={{
        width: "20px",
        height: "20px",
      }}
      onClick={() => {
        storeSetHeaderSearchLoader(true);
        storeSearchValue(value);

        if (router.pathname !== "/dashboard/search") {
          router.push("/dashboard/search");
        }
      }}
      onMouseEnter={() => onHover((prev: any) => ({ ...prev, hover: true }))}
      onMouseLeave={() => onHover((prev: any) => ({ ...prev, hover: false }))}
    >
      <svg
        className={`${
          focus ? "translate-x-10 opacity-100 cursor-pointer" : ""
        } fill-white right-0 absolute hover:fill-[#ff0000] transition-all duration-400 opacity-0`}
        width="20"
        height="20"
        viewBox="0 0 633 633"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_4_5)">
          <path d="M255.108 0C119.863 0 10.204 109.66 10.204 244.904C10.204 380.149 119.863 489.809 255.108 489.809C307.114 489.809 355.346 473.586 394.991 445.955L580.196 631.131C581.867 632.803 584.575 632.803 586.16 631.246L621.052 596.355C622.665 594.742 622.522 591.976 620.937 590.39L438.151 407.605C476.644 364.359 500.011 307.368 500.011 244.903C500.012 109.66 390.353 0 255.108 0ZM255.108 460.996C135.768 460.996 39.016 364.244 39.016 244.904C39.016 125.564 135.767 28.813 255.108 28.813C374.449 28.813 471.199 125.564 471.199 244.904C471.199 364.244 374.448 460.996 255.108 460.996Z" />
        </g>
        <defs>
          <clipPath id="clip0_4_5">
            <rect width="632.399" height="632.399" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

const Header = () => {
  const router = useRouter();

  const [inputState, setInputState] = useState({
    hover: false,
    focus: false,
    focusNow: false,
    value: "",
  });

  const storeHeaderSearchLoader = useStore((store) => store.headerSearchLoader);

  return (
    <header className={"fixed right-0 left-0 w-[100%] z-10 bg-black top-0"}>
      <div className={"flex px-11 py-5 items-center justify-between"}>
        <div
          className={"flex items-center hover:cursor-pointer group relative"}
          onClick={() => router.push("/")}
        >
          <YoutubeIcon />
          <p
            className={
              "absolute left-4 opacity-0 group-hover:opacity-100 group-hover:left-16 transition-all duration-300 text-[#ff0000]"
            }
          >
            YouAwesome
          </p>
          <p
            className={
              "ml-1 absolute left-14 right-0 group-hover:left-44 transition-all "
            }
          >
            Youtube
          </p>
        </div>

        <div className={"flex items-center group relative w-[500px]"}>
          <input
            onInput={(event: any) => {
              setInputState((prev) => ({ ...prev, value: event.target.value }));
              if (event.target.value) {
                setInputState((prev) => ({ ...prev, focus: true }));
              } else {
                setInputState((prev) => ({ ...prev, focus: false }));
              }
            }}
            className={`${
              inputState.hover ? "bg-red bg-opacity-90" : ""
            } absolute text-black text-[16px] left-0 right-0 p-3 rounded bg-white group transition-all`}
          />
          {/*{Boolean(searchData?.length) && (*/}
          {/*  <div*/}
          {/*    className={*/}
          {/*      "absolute top-[30px] right-0 left-0 bg-black rounded-b-[15px] p-4"*/}
          {/*    }*/}
          {/*  >*/}
          {/*    {searchData.map((item) => (*/}
          {/*      <p*/}
          {/*        onClick={() => {*/}
          {/*          router.push(`/view/${item.id.videoId}`);*/}
          {/*        }}*/}
          {/*        key={item.id.videoId}*/}
          {/*        className={"cursor-pointer hover:text-black hover:bg-white"}*/}
          {/*      >*/}
          {/*        {item.snippet.title.length > 60*/}
          {/*          ? item.snippet.title.slice(0, 60) + "..."*/}
          {/*          : item.snippet.title}*/}
          {/*      </p>*/}
          {/*    ))}*/}
          {/*  </div>*/}
          {/*)}*/}

          {storeHeaderSearchLoader ? (
            <Spinner />
          ) : (
            <SearchIcon
              value={inputState.value}
              focus={inputState.focus}
              onHover={setInputState}
              router={router}
            />
          )}
        </div>
        <div>
          <div className={"rounded-[100px] bg-white w-[40px] h-[40px]"}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
