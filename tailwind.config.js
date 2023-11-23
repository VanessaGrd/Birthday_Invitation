/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#7D5E54",
          100: "#f3e1d7",
          150: "#C2A499",
        },
        secondary: {
          50: "#fef8f3",
          100: "#FCF9F6",
          150: "#B8EAE0",
        },
      },
    },
    fontFamily: {
      abc: ["Dancing Script", "cursive"],
    },
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
        options: {
          svgo: false, // optional, if you want to disable SVGO optimization
          throwIfNamespace: false, // set this to false to bypass the error
        },
      },
    ],
  },
};
