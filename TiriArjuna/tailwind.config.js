/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    colors:{
      ...colors,
      'ungu':'#CECEDC',
      'putih' : '#ffffff',
      'abu': '#B2B2B2',
      'navbar': '#A7A6E1',
      'button': '#483EA8',
      'box' : '#F8F8FF',
      'tabel' : '#ECEBFA',
      'heder' : '#ABAADE',
      'form' : '#131316',
    },
    extend: {    
    },
  },
  plugins: [],
};


