import * as flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
        colors: {
          'black-1': '#1e1e1e',
          'gray-1': '#3c3c3c',
          'green-line': '#06c755',
        },
        fontFamily: {
          'impact': ['Impact', 'sans-serif'],
          'inter': ['Inter', 'sans-serif'],
          'notothai': ['Noto Sans Thai', 'sans-serif'],
          'lineseedsans': ['var(--font-lineseedsans)', 'sans-serif'],
        },
    },
    screens: {
      '2xs': { min: '300px' },
      'xs': { max: '575px' },
      'sm': { min: '576px' },
      'md': { min: '898px' },
      'lg': { min: '1200px' },
      'xl': { min: '1259px' },
      '2xl': { min: '1359px' },
      '3xl': { min: '1650px' }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}