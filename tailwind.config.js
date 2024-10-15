/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector"]
,  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
  container: {
      center: true,
      padding: '2rem',
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        '2xl': '1400px',
      },
    },
  },
  plugins: [],
}

