import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary : "#ffd60a",
        darkBg: "#131424"
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(255, 255, 255, 0.5) -5.91%, rgba(0, 0, 0, 0.5) 111.58%)"
      }
    },
  },
  plugins: [],
};
export default config;
