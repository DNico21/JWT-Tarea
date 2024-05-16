//login.js
const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/", (req, res) => {
  const { email, contraseña } = req.body;

  // Verifica las credenciales del usuario (simulado para este ejemplo)
  if (email === "admin@admin.com" && contraseña === "admin") {
    // Genera el token JWT
    const token = jwt.sign({ email: email }, "secreto", { expiresIn: "1h" });

    // Crea una cookie de sesión con el token JWT
    res.cookie("session_token", token, { httpOnly: true });

    // Devuelve una respuesta
    res.json({ message: "Inicio de sesión exitoso" });
  } else {
    res.status(401).json({ message: "Credenciales inválidas" });
  }
});

module.exports = router;    
