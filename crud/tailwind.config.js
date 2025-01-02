/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}", // Include all React files
  ],
  theme: {
    extend: {}, // Extend the default theme here
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
