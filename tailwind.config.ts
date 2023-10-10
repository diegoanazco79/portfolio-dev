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
      'main-blue': '#1F2F48'
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
};
export default config;
