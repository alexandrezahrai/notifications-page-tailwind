/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        red: "hsl(1, 90%, 64%)",
        blue: "hsl(219, 85%, 26%)",
        "grayish-blue": "hsl(219, 14%, 63%)",
        "darker-blue-gray": "hsl(219, 12%, 42%)",
        "deep-blue": "hsl(224, 21%, 14%)",
        "pale-blue-1": "hsl(211, 68%, 94%)",
        "pale-blue-2": "hsl(205, 33%, 90%)",
        "ultra-pale-blue": "hsl(210, 60%, 98%)",
      },
      screens: {
        lg: "992px",
        xl: "1358px",
      },
      container: {
        padding: {
          DEFAULT: "0px",
          md: "44px",
        },
      },
      boxShadow: {
        custom:
          "0 100px 140px -50px rgba(0,0,0,0.25), 0 0 20px 0 rgba(0,0,0,0.03)",
      },
    },
  },
  plugins: [],
};
