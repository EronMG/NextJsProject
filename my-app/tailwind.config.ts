import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        ss: '375px',
        mm: '440px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        Thin: ['ALSthin', 'sans-serif'],
        Regular: ['ALSregular', 'sans-serif'],
        Medium: ['ALSmedium', 'sans-serif'],
        Light: ['ALSlight', 'sans-serif'],
        Book: ['ALSbook', 'sans-serif'],
        Bold: ['ALSbold', 'sans-serif'],
        Black: ['ALSblack', 'sans-serif'],
      },
      colors: {
        dark: '#161919',
        lime: '#CDFF65',
        blue: '#4F56D3',
        cloud: '#D1D4FF',
        gray: '#515161',
      },
    },
  },
  plugins: [],
};
export default config;
