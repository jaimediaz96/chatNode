import express from "express";

let app = express();

app.use('/', (req, res) => res.send("hola"));

app.listen(3000);
console.log("La aplicacion esta escuchando en http://localhost:3000");
