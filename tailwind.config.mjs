/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light: "var(--light)",
        darkerGreen: "var(--color-dark1)",
        lightyellow: "var(--color-light1)",
        brown: "var(--color-brown)",
        redLight: "var(--color-light5)",
      },
      backgroundImage: {
        'bc-1': "url('/bc-1.png')",
      },
    },
  },
  plugins: [],
};
