/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      darkNavy: "#070724",
      darkGrey: "#38384F",
      lightGrey: "#838391",
      skyBlue: "#419EBB",
      goldish: "#EDA249",
      purple: "#6f2ED6",
      lightOrange: "#D14C32",
      darkOrange: "#CD5120",
      red: "#D83A34",
      mintGreen: "#1EC2A4",
      brightBlue: "#2D68F0",
    },
    fontFamily: {
      antonio: "'Antonio', sans-serif",
      spartan: "'League Spartan', sans-serif",
    },
    extend: {
      fontSize: {
        40: "40px",
        28: "28px",
        11: "11px",
        9: "9px",
        8: "8px",
      },
    },
  },
  plugins: [],
};
