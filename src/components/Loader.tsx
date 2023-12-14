export const ButtonYouTube = () => (
  <svg
    className={"fill-white animate-changeColorButton"}
    width="100"
    height="100"
    viewBox="0 0 509 358"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M257.4 358C200.3 356.2 146 354.8 91.7 352.7C80 352.2 68.1 350.4 56.7 347.7C35.3 342.7 20.5 329.8 12.9 308.7C6.8 291.7 4.6 274.2 3 256.4C-0.500001 214.6 -0.500002 172.8 1.2 131C2.2 107.4 2.8 83.6 9.1 60.7C12.9 47 17.5 33.6 28.6 23.7C40.3 13.2 54 6.89999 69.6 6.19999C112.4 4.09999 155.1 1.49999 197.9 1.09999C255.5 0.499988 313.2 1.29999 370.8 2.39999C395.7 2.89999 420.8 4.19999 445.5 7.39999C468.1 10.4 485 23 494 45C500.9 61.9 503.5 79.6 505 97.6C508.9 142.7 509 187.8 506.8 232.9C505.7 255.8 504.6 278.8 498.1 301.1C490.7 326.7 475 343.6 448.8 349.4C438.6 351.6 428 352.4 417.6 352.8C363.2 354.7 308.9 356.4 257.4 358ZM328 214.5C373.6 190.9 292.8 197.3 338.8 173.4C338.8 131 373.7 256.8 328 232.9C328 280.6 328 166.8 328 214.5Z" />
  </svg>
);
export const PlayIcon = () => (
  <svg
    className={"animate-bounce absolute right-6"}
    width="40"
    height="40"
    viewBox="0 0 700 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0V800L700 400L0 0Z"
      fill="black"
    />
  </svg>
);

const Loader = () => (
  <div className={"flex w-100% h-[30vh]"}>
    <div className={"flex items-center m-auto relative justify-center"}>
      <ButtonYouTube />
      <PlayIcon />
    </div>
  </div>
);

export default Loader;
