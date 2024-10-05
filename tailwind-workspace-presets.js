const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    {
      pattern:
        /(m|p)(t|b|l|r)-(0|px|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
    },
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        white: '#fafafa',
        black: '#0a0a0a',
        neutral: colors.neutral,
        primary: colors.teal,
        secondary: colors.blue,
        accent: colors.cyan,
        danger: colors.rose,
        warning: colors.amber,
        success: colors.emerald,
        info: colors.sky,
      }),
      fontFamily: {
        mono: ['Fira Code', ...fontFamily.mono],
        display: [...fontFamily.sans],
        book: [...fontFamily.sans],
        detail: [...fontFamily.sans],
        code: [...fontFamily.mono],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
};
