/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // your custom color here
        l_green: "hsl(148, 38%, 91%)",
        d_green: "hsl(169, 82%, 27%)",
        red: "hsl(0, 66%, 54%)",
        l_gray: "hsl(186, 15%, 59%)",
        d_gray: "hsl(187, 24%, 22%)",
      },
      fontFamily: {
        sans: ["Karla", "sans-serif"], // Replace default sans with Karla
      },
    },
  },
  plugins: [],
};
