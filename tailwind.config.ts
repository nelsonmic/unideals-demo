import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gibson: ['var(--font-gibson)'],
      },
      colors: {
        black: {
          100: "#071f44"
        },
        grey: {
          100: "#eff4f4",
          200: "#4c5a71",
        },
        purple: {
          100: "#9f4bfa",
          200: "#6523e3", 
          300: "#7101ea",
          tint: "#e0d2f9"
        },
        yellow: {
          100: "#f4ffaf",
          200:"#e4ff38"
        },
        blue: {
          100: "#161b50"
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
