const express = require('express');
const path = require('path');
const compression = require('compression');
const http2 = require('http2');

// Crear una app de Express
const app = express();

// Habilitar compresión para mejorar el rendimiento
app.use(compression());

// Servir archivos estáticos desde la carpeta 'out'
app.use(express.static(path.join(__dirname, 'out'), { extensions: ['html'] }));

// Manejar rutas desconocidas y redirigirlas a index.html (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

// Usar HTTP/2 con Heroku
const server = http2.createServer(app);

// Iniciar servidor HTTP/2
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor estático corriendo en el puerto ${PORT} con HTTP/2`);
});