import express from "express";
import { success, error } from "../../network/response.js";
import { addMessage } from "./controller.js";

const router = express.Router();

router.get("/", (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "Our personal value"
    });
	success(req, res, "list of message");
});

router.post("/", (req, res) => {
    
    addMessage(req.body.user, req.body.message)
        .then(fullMessage => {
            success(req, res, fullMessage, 201);
        })
        .catch(() => {
            error(req, res, "Unexpected data", 400, "Error in the controller");
        });
});

export { router }