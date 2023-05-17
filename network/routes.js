import express from "express";
import { router } from "../components/message/network.js";

const routes = server => {
    server.use("/message", router);
};

export { routes }