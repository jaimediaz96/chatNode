import express from "express";
import { success, error } from "../../network/response.js";

const router = express.Router();

router.get("/", (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "Our personal value"
    });
	success(req, res, "list of message");
});

router.post("/", (req, res) => {
    console.log(req.query);
    if (req.query.error == "ok") {
        error(req, res, "Unexpected error", 500, "Is only a simulation");
    } else {
        success(req, res, "create message", 201);
    }
});

export { router }