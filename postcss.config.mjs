/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? {
      // Minificación de CSS en producción
      'cssnano': {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
          // Colapsar y fusionar reglas cuando sea posible
          mergeLonghand: true,
          // Optimizar fuentes
          minifyFontValues: true,
          // Reducir cálculos
          reduceCalc: true,
          // Ordenar selectores
          sortSelectors: true,
        }],
      },
    } : {})
  },
};

export default config;
