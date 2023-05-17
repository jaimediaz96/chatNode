import express from "express";
import { routes } from "./network/routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
routes(app);

app.use('/app', express.static("public"));

app.listen(3000);
console.log("La aplicacion esta escuchando en http://localhost:3000");
