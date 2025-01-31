const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

// Habilitar compresión para mejorar el rendimiento
app.use(compression());

// Servir archivos estáticos desde 'out'
app.use(express.static(path.join(__dirname, 'out'), { extensions: ['html'] }));

// Manejar rutas desconocidas y redirigirlas a index.html (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

// Iniciar el servidor en el puerto de Heroku o en el 3000 localmente
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor estático corriendo en el puerto ${PORT}`);
});