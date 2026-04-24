/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    ...(process.env.NODE_ENV === 'production' ? {
      'cssnano': {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
          mergeLonghand: true,
          minifyFontValues: true,
          reduceCalc: true,
          sortSelectors: true,
        }],
      },
    } : {})
  },
};

export default config;
