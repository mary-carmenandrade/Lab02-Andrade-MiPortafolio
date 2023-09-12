app.post('/enviar', (req, res) => {
  const nombre = req.body.nombre;
  const email = req.body.email;
  const mensaje = req.body.mensaje;
  res.redirect('/confirmacion');
});