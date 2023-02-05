/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      fontFamily: {
        gteestipro: ['var(--font-gteestipro)'],
      },
      height: {
        506: '506px',
      },
      fontSize: {
        md: '22px',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
}
