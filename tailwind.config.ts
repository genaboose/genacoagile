import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0c255d',
          gold: '#ffcd59',
        },
      },
    },
  },
  plugins: [],
}
export default config

