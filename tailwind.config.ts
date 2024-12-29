import type { Config } from "tailwindcss";

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundColor: {
        'home': 'rgb(249 20 20 / 0%)',
      },
      boxShadow: {
        'custom-1': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      },
      fontFamily: {
        outfit: ['var(--font-outfit)'],
        inter: ['var(--font-inter)'],
        jakarta: ['var(--font-jakarta)'],
      },
    },
  },
  plugins: [],
} satisfies Config
