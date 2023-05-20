import express from "express";
import { response } from "../../network/response.js";
import { controller } from "./controller.js";

const router = express.Router();

router.get("/:userId", (req, res) => {
    const filterChat = req.query.userId || null;
    controller.getChat(filterChat)
        .then(chats => {
            response.success(req, res, chats, 200);
        })
        .catch(error => {
            response.error(req, res, "Unexpected Error", 500, error);
        });
});

router.post("/", (req, res) => {
    controller.addChat(req.body.users)
        .then(chat => {
            response.success(req, res, chat, 201);
        })
        .catch(error => {
            response.error(req, res, "Unexpected data", 400, error);
        });
});

const chat = router;

export { chat };