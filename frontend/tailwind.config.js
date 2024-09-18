/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        PermanentMarker :['Permanent Marker','cursive'],
        Playwrite :['Playwrite CU','cursive']
      }
      
    },
  },
  plugins: [],
}

