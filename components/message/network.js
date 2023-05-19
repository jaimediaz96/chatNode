import express from "express";
import { response } from "../../network/response.js";
import { controller } from "./controller.js";

const router = express.Router();

router.get("/", (req, res) => {
    const filterMessage = req.query.user || null;
    controller.getMessages(filterMessage)
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
        .catch(error => {
            response.error(req, res, "Unexpected data", 400, error);
        });
});

router.patch("/:id", (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(error => {
            response.error(req, res, "Internal error", 500, error);
        });
});

router.delete("/:id", (req, res) => {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `User ${req.params.id} deleted`, 200);
        })
        .catch(error => {
            response.error(req, res, "Internal error", 500, error);
        });
});

const message = router;

export { message }