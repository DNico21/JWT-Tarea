//contacts.js
const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Predefined array of users
const usersList = [
  { id: 1, nombre: "John Doe", email: "john@example.com" },
  { id: 2, nombre: "Jane Doe", email: "jane@example.com" },
  { id: 3, nombre: "Bob Smith", email: "bob@example.com" },
  // Add more users to the array as needed
];

// Endpoint protegido para recuperar una lista de usuarios
router.get("/", verificarToken, (req, res) => {
  // Devuelve la lista de usuarios como respuesta
  res.json(usersList.slice(0, 5)); // Return the first 5 users from the array
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
