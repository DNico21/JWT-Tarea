//app.js
const express = require('express');
const login = require('./routes/login');
const profile = require('./routes/profile');
const form = require('./routes/form');
const contacts = require('./routes/contacts');
const PORT = process.env.PORT || 8000;
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/login', login);
app.use('/profile', profile);
app.use('/form', form);
app.use('/contacts', contacts);

app.listen(PORT, () => {
  console.log(`Server ejecutandose en: ${PORT}`);
});










// endpoint /contacts
// app.get('/contacts',verificarToken, (req, res) => {
//     const usuarios = [
//         {nombre: "Pepito Julian",Apellido: "Perez Gonzalez",email: "pepitoperez@gmail.com"},
//         {nombre: "María",Apellido: "García López",email: "maria.garcia@gmail.com"},
//         {nombre: "Juan",Apellido: "Martínez Rodríguez",email: "juan.martinez@gmail.com"},
//         {nombre: "Ana",Apellido: "Fernández Pérez",email: "anafernandez@gmail.com"},
//         {nombre: "Carlos",Apellido: "Sánchez Gómez",email: "carlossanchez@gmail.com"},
//         {nombre: "Luisa",Apellido: "Díaz Martínez",email: "luisadm@gmail.com"},
//         {nombre: "David",Apellido: "Rodríguez Hernández",email: "david.r@gmail.com"},
//         {nombre: "Sara",Apellido: "López García",email: "sara.lopez@gmail.com"},
//         {nombre: "Pedro",Apellido: "Pérez Rodríguez",email: "pedroperez@gmail.com"},
//         {nombre: "Lucía",Apellido: "Gómez Sánchez",email: "luciags@gmail.com"},
//         {nombre: "Eduardo",Apellido: "Martín Pérez",email: "eduardomartin@gmail.com"},
//         {nombre: "Laura",Apellido: "Hernández González",email: "laura.hernandez@gmail.com"},
//         {nombre: "Diego",Apellido: "García Martínez",email: "diego.garcia@gmail.com"},
//         {nombre: "Marta",Apellido: "Fernández López",email: "martaf@gmail.com"},
//         {nombre: "Javier",Apellido: "Sánchez Martínez",email: "javier.sm@gmail.com"},
//         {nombre: "Carmen",Apellido: "Pérez García",email: "carmenpg@gmail.com"},
//         {nombre: "Alberto",Apellido: "Díaz López",email: "albertod@gmail.com"},
//         {nombre: "Rocío",Apellido: "Martínez Sánchez",email: "rocio.m@gmail.com"},
//         {nombre: "Manuel",Apellido: "González Pérez",email: "manuelgp@gmail.com"},
//         {nombre: "Elena",Apellido: "Sánchez Martínez",email: "elenasm@gmail.com"}
//     ];
//     const usuariosAleatorios = obtenerUsuariosAleatorios(usuarios, 5);
//     res.status(200).json(usuariosAleatorios);
// });
