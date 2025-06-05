/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      screens: {
        "xxs-h": { 'raw': '(min-height: 320px)' },
        "xs-h": { 'raw': '(min-height: 480px)' },
        "sm-h": { 'raw': '(min-height: 640px)' },
        "md-h": { 'raw': '(min-height: 768px)' },
        "lg-h": { 'raw': '(min-height: 1024px)' },
        "xl-h": { 'raw': '(min-height: 1280px)' },
        "2xl-h": { 'raw': '(min-height: 1536px)' },
      },
      colors: {
        primary: {
          400: "#035B8C",
        },
        
      },
    },
  },
  plugins: [],
};
