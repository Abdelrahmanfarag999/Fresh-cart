const flowbite = require("flowbite-react/tailwind");
// const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    
    'node_modules/flowbite-react/lib/esm/**/*.js',
  flowbite.content(),
],
  theme: {
    extend: {
      colors: {
        'custom-green': '#29B729',
        'custom-shadow': '#065e06'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
    require('flowbite/plugin')
  ],
  
}

// module.exports = withMT({
//   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });


