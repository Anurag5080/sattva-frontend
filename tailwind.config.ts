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
        Lyellow: "#BEB634",
        Twhite: "#FFFFFF",
        sblack: "#050303",
        Dyellow: "#836F25",
        Hwhite: "#F5F5F5",
      },
      fontFamily: {
        questrial: ["Questrial", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        samarkan: ["Samarkan", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
