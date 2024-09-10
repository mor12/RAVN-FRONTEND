/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/components/**/*.{html,js,ts}",
    "./src/app/pages/**/*.{html,js,ts}",
    "./src/app/shared/**/*.{html,js,ts}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontSize: {
        S: "13px",
        M: "15px",
        L: "18px",
        xL: "20px",
      },
      colors: {
        "neutral-1": "rgba(255, 255, 255, 1)",
        "neutral-2": "rgba(148, 151, 154, 1)",
        "neutral-3": "rgba(57, 61, 65, 1)",
        "neutral-4": "rgba(44, 47, 51, 1)",
        "neutral-5": "rgba(34, 37, 40, 1)",
        "primary-1": "rgba(244, 204, 200, 1)",
        "primary-2": "rgba(235, 165, 158, 1)",
        "primary-3": "rgba(226, 125, 115, 1)",
        "primary-4": "rgba(218, 88, 75, 1)",
        "secondary-1": "rgba(200, 225, 188, 1)",
        "secondary-2": "rgba(170, 209, 153, 1)",
        "secondary-3": "rgba(141, 194, 117, 1)",
        "secondary-4": "rgba(112, 178, 82, 1)",
        "tertiary-1": "rgba(249, 238, 215, 1)",
        "tertiary-2": "rgba(242, 218, 171, 1)",
        "tertiary-3": "rgba(235, 199, 127, 1)",
        "tertiary-4": "rgba(229, 180, 84, 1)",
      },
    },
  },
  plugins: [],
};
