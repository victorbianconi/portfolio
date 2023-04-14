/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      mobile: { max: "1000px" },
    },
    colors: {
      grey: {
        500: "#8a8375",
      },
      gold: {
        500: "#a17f3e",
        600: "#8f6924",
        700: "#8f6924",
        800: "#593e0d",
        900: "#452f08",
      },
      body: "#f0f0f0",
    },
  },
  plugins: [],
};
