import express from "express";
import { connect } from "./db.js"
import { routes } from "./network/routes.js";

connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mongodblab.f94tuty.mongodb.net/`);

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
routes(app);

app.use('/app', express.static("public"));

app.listen(3000);
console.log("La aplicacion esta escuchando en http://localhost:3000");
