const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Metropolis', ...defaultTheme.fontFamily.sans],
      heading: ['BebasNeue'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      msm: { max: '640px' },
      mmd: { max: '768px' },
      mlg: { max: '1024px' },
      mxl: { max: '1280px' },
      m2xl: { max: '1536px' },
      smm: { min: '640px' },
      mdm: { min: '768px' },
      lgm: { min: '1024px' },
      xlm: { min: '1280px' },
      '2xlm': { min: '1536px' },
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        rose: colors.rose,
        fuchsia: colors.fuchsia,
        teal: colors.teal,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        orange: colors.orange,
        bluegray: colors.blueGray,
        coolgray: colors.coolGray,
        truegray: colors.trueGray,
        warmgray: colors.warmGray,
        gray: colors.gray,
        amber: colors.amber,
        yellow: colors.yellow,
        sky: colors.sky,
        violet: colors.violet,
        purple: colors.purple,
      },
      minWidth: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        '2xl': '96px',
      },
    },
  },
};
