module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  //darkMode: false,
  theme: {
    extend: {
      colors: {
        '111': '#111',
        '222': '#222',
        'prired': '#FD4D4D',
        'priblue': '#3D98FF',
        'transparent': 'transparent',
      },
      boxShadow: {
        'prired': '0px 0px 24px rgba(253, 77, 77, 0.75)',
        'priredb': '0px 0px 32px rgba(253, 77, 77, 0.82)',
        'priredin': 'inset 0px 0px 18px rgba(253, 77, 77, 0.75)',
        'priredinb': 'inset 0px 0px 24px rgba(253, 77, 77, 0.82)',

        'priblue': '0px 0px 24px rgba(61, 152, 255, 0.75)',
        'priblueb': '0px 0px 32px rgba(61, 152, 255, 0.82)',
        'pribluein': 'inset 0px 0px 18px rgba(61, 152, 255, 0.75)',
        'priblueinb': 'inset 0px 0px 24px rgba(61, 152, 255, 0.82)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
