import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionDuration: {
        '4000': '4000ms',
      },
      screens: {
        ss: '375px',
        mm: '440px',
        gg: '494px',
        ll: '806px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xm: '1440px',
        xx: '1577px',
        xb: '1768px',
        bb: '1920px',
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
        darkCloud: '#B8BCFF',
        cloud: '#D1D4FF',
        gray: '#515161',
      },
    },
  },
  plugins: [],
};
export default config;
