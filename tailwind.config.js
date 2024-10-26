/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      screens: {
        "sm": "320px",
        "sm-m": "375px",
        "sm-l": "425px",
        "md": "768px",
        "lg": "992px",
        "xl": "1024px",
        "2xl": "1200px",
        "3xl": "1440px"
      },
      fontFamily: {
        "sans": ["Satoshi", "sans-serif"]
      },
      fontSize: {
        "md": ["16px", "24px"]
      },
      colors: {
        "black": "#010101",
        "merino": "#f2f0ea",
        "arylide": "#edcf5d",
        "dawn": "#a4a4a4",
        "gray": "#949494",
        "peach": "#ee6e6e"
      },
      transitionDuration: {
        "375": "375ms"
      },
      transitionProperty: {
        "width": "width"
      }
    },
  },
  plugins: [],
}

