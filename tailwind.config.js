/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#7E33E0',
      'primary-light': '#E0D3F5',
      'primary-lighter': '#F6F7FB',
      'cta-primary': '#FB2E86',
      'cta-secondary': '#08D15F',
      'white': '#fff'
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}