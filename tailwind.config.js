/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": "1024px",
      xl: "1024px",
      lg: "1024px",  
      md: "768px",
      sm: "640px",
    },
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      backgroundImage: {
        'delete': "url('/src/assets/delete-icon.png')",
        'edit': "url('/src/assets/edit-icon.png')",
        'send': "url('/src/assets/ok-icon.svg')"
      }
    },
  },
  plugins: [],
};
