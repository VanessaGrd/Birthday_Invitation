/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#621639",
          100: "#F3FBF9",
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
    backgroundImage: {
      "hero-pattern": "url('https://i.etsystatic.com/18975710/r/il/225af9/3080039953/il_570xN.3080039953_hhrg.jpg')",
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
