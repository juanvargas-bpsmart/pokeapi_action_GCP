const express = require('express');
const path = require('path');
const app = express();

// Cloud Run asigna el puerto automáticamente en la variable de entorno PORT
const PORT = process.env.PORT || 8080;

// Servir los archivos (index.html, styles.css, app.js) desde la raíz
app.use(express.static(__dirname));

// Ruta principal para cargar el index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
