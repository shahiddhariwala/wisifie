/** @type {import('tailwindcss').Config} */
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
        white: {
          follower: "#FFEDEE",
        },
      },
    },
  },
  plugins: [],
};
