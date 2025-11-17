import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config