const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#6bc6e2",
          2: "#27acd4",
          3: "#195c79",
          blue: "#0071bc",
          gray: "#4d4d4d",
        },
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
  
  ],
})