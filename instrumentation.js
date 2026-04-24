export function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    console.log('La aplicación está iniciando en el servidor Node.js');
  }
}
