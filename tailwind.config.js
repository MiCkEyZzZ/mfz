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
      maxWidth: {
        '1xl': '626px',
        '2xlx': '686px',
      },
      fontSize: {
        md: '22px',
        smb: '15px',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
}
