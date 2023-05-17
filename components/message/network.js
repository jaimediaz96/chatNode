import express from "express";
import { response } from "../../network/response.js";
import { controller } from "./controller.js";

const router = express.Router();

router.get("/", (req, res) => {
    controller.getMessages()
        .then(messageList => {
            response.success(req, res, messageList, 200);
        })
        .catch(error => {
            response.error(req, res, "Unexpected Error", 500, error);
        });
});

router.post("/", (req, res) => {
    
    controller.addMessage(req.body.user, req.body.message)
        .then(fullMessage => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(() => {
            response.error(req, res, "Unexpected data", 400, "Error in the controller");
        });
});

export { router }