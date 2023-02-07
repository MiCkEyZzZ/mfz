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
        75: '292px',
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
      gridTemplateColumns: {
        auto: 'repeat(auto-fill, minmax(400px, 1fr))',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
}
