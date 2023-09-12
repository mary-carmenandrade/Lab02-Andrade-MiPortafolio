const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public')); // Para servir archivos estáticos (como HTML, CSS y JavaScript)

app.get('/', (req, res) => {
  // Envía el formulario de contacto al cliente
  fs.readFile(path.join(__dirname, 'public', 'formulario.html'), (err, content) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('Error del servidor');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  });
});

app.post('/enviar', (req, res) => {
  // Procesar los datos del formulario
  const nombre = req.body.nombre;
  const email = req.body.email;
  const mensaje = req.body.mensaje;

  // Puedes enviar un correo electrónico, almacenar los datos en una base de datos, etc.

  // Redirigir a la página de confirmación
  res.redirect('/confirmacion');
});

app.get('/confirmacion', (req, res) => {
  // Envía la página de confirmación al cliente
  fs.readFile(path.join(__dirname, 'public', 'confirmacion.html'), (err, content) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('Error del servidor');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
