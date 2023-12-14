import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        changeColorButton:
          "changeColorButtonToRed 1s linear infinite alternate",
        changeColorBg: "changeColorBg 1s linear infinite alternate",
      },
      keyframes: {
        changeColorBg: {
          "0%": {
            backgroundColor: "white",
          },
          "100%": {
            backgroundColor: "#ff0000",
          },
        },
        changeColorButtonToRed: {
          "0%": {
            fill: "white",
          },
          "100%": {
            fill: "#ff0000",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
};
export default config;
