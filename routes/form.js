//form.js
const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Endpoint protegido para enviar un formulario
router.post("/", verificarToken, (req, res) => {
  // Verifica si existe la propiedad 'text' en el cuerpo de la solicitud
  if (!req.body.text) {
    return res
      .status(400)
      .json({
        message: 'Falta la propiedad "text" en el cuerpo de la solicitud',
      });
  }

  // Obtiene el texto del cuerpo de la solicitud
  const texto = req.body.text;

  // Devuelve el mismo texto como respuesta
  res.json({ text: texto });
});

// Función de middleware para verificar el token JWT en las solicitudes protegidas
function verificarToken(req, res, next) {
  const token = req.cookies.session_token;

  // Verifica si existe el token
  if (!token) {
    return res
      .status(401)
      .json({ message: "No autorizado: Token no proporcionado" });
  }

  try {
    // Verifica y decodifica el token
    const decoded = jwt.verify(token, "secreto");

    // Almacena la información del usuario en el objeto de solicitud para usarla en otras rutas
    req.user = decoded;

    // Llama a la siguiente función de middleware
    next();
  } catch (error) {
    return res.status(401).json({ message: "No autorizado: Token inválido" });
  }
}

module.exports = router;
