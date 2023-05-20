import express from "express";
import { connect } from "./db.js"
import { routes } from "./network/routes.js";
import http from "http";
import { connectSocket } from "./socket.js";

const app = express();
const server = http.Server(app);

connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mongodblab.f94tuty.mongodb.net/`);

app.use(express.json());
app.use(express.urlencoded({extended : false}));

connectSocket(server);

routes(app);

app.use('/app', express.static("public"));

server.listen(3000, () => {
    console.log("La aplicacion esta escuchando en http://localhost:3000");
});
