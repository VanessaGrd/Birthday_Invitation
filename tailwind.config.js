/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#593837",
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
      abc: ["Caveat", "cursive"],
      def: ["Montserrat", "sans-serif"],
    },
    backgroundImage: {
      "hero-pattern": "url('https://i.pinimg.com/564x/89/a7/85/89a7853cbde438da7a3013f35836e30f.jpg')",
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
