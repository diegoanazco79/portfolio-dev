import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors');

const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      'main-blue': '#1F2F48',
      'dark-bg': '#171212',
      'dark-text': '#DEDEDE',
      'dark-bg-green': '#18342B'
    }
  },
  darkMode: 'class',
  plugins: [nextui(), require('tailwindcss-animated')]
};
export default config;
