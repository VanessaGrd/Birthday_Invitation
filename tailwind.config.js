/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#CD8987",
          100: "#FEF7F9",
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
      "hero-pattern": "url('https://i.pinimg.com/564x/2e/78/db/2e78dbe5d5b513c901548f96b5f6f197.jpg')",
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
