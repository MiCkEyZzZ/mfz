/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{mdx, md}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        gteestipro: ['var(--font-gteestipro)'],
      },
      height: {
        75: '292px',
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
      colors: {
        'gr-1': 'rgb(35 39 47/1);',
        'gr-2': 'rgb(52 58 70/1)',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
