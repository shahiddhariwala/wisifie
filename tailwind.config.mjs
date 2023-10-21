/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./assets/spiral-bg-1.svg')",
      },
      colors: {
        "section-red": "#753032",
        "text-pink": "#B47C7B",
        "light-pink": "#F5E2CF",
        "dark-pink": "#CCA298",
        "bold-pink": "#A36261",
        white: {
          follower: "#FFEDEE",
        },
      },
    },
    fontFamily: {
      sans: [
        "Quicksand",
        '"Quicksand Variable"',
        "Inter",
        ...defaultTheme.fontFamily.sans,
      ],
      followers: ["Inter", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
