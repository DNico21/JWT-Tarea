//profile.js
const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Endpoint protegido para mostrar información del perfil del usuario
router.get("/", verificarToken, (req, res) => {
  // Obtiene la información del usuario del token JWT decodificado
  const { email } = req.user; 

  const userProfile = {
    nombre: "Juan",
    apellido: "Pérez",
    correo: email,
    fechaNacimiento: "1990-01-01", // Fecha de nacimiento inventada
  };

  // Devuelve la información del perfil del usuario
  res.json(userProfile);
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
