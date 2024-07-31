/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {
    backgroundImage: {
      'backdrop-paintsplash': "url('./assets/backdrops/paintsplash.png')",
    },
  },
};
export const plugins = [];
