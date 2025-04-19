// Next.js 15.3 introdujo mejoras a la instrumentación
// Este archivo permite realizar monitoreo a nivel del servidor

export function register() {
  // Este código se ejecuta en el servidor durante la inicialización
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    console.log('La aplicación está iniciando en el servidor Node.js');
  }
} 