/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#7D5E54",
          100: "#f3e1d7",
        },
        secondary: {
          50: "#fef8f3",
        },
      },
    },
    fontFamily: {
      abc: ["Roboto", "sans-serif"],
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
