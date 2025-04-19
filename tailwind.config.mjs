/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "var(--color1)",
        color2: "var(--color2)",
        color3: "var(--color3)",
        color4: "var(--color4)",
        color5: "var(--color5)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  // Reducir el tamaño del bundle CSS
  safelist: [],
  // Deshabilitar variantes no utilizadas
  variants: {
    extend: {},
  },
  // Reducir el tamaño de los espacios en blanco y colores generados
  future: {
    hoverOnlyWhenSupported: true,
  },
  // Deshabilitar algunos elementos base para reducir tamaño
  corePlugins: {
    preflight: true,
    // Deshabilitar plugins que no se utilizan (descomenta según necesidad)
    // aspectRatio: false,
    // container: false,
    // placeholderColor: false,
    // placeholderOpacity: false,
    // space: false,
    // divideColor: false,
    // divideOpacity: false,
    // divideStyle: false,
    // divideWidth: false,
  },
};
