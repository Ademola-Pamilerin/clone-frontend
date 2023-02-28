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
    extend: {
      height: {
        "middle": "90vh",
        "header": "7vh",
        "min": "92vh",
        "minV":"50vh"
      },
      screens: {
        xs: "420px",
        sm: "480px",
        mr:"700px",
        md: "800px",
        lg: "976px",
        xlg: "1350px",
        xl: "1440px"
      },
    },
    plugins: [],
  }
}