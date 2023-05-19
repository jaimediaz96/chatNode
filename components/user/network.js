import express from "express";
import { response } from "../../network/response.js";
import { controller } from "./controller.js";

const router = express.Router();

router.post("/", (req, res) => {
    controller.addUser(req.body.name)
        .then(name => {
            response.success(req, res, name, 201);
        })
        .catch(error => {
            response.error(req, res, "Invalid name", 500, error);
        });
});

router.get("/", (req, res) => {
    controller.listUsers()
        .then(users => {
            response.success(req, res, users, 200);
        })
        .catch(error => {
            response.error(req, res, "Unexpected error", 500, error);
        });
});

router.patch("/:id", (req, res) => {
    controller.updateUser(req.params.id, req.body.name)
        .then(users => {
            response.success(req, res, users, 200);
        })
        .catch(error => {
            response.error(req, res, "Invalid Id", 500, error);
        });
});

router.delete("/:id", (req, res) => {
    controller.deleteUser(req.params.id)
        .then(users => {
            response.success(req, res, users, 200);
        })
        .catch(error => {
            response.error(req, res, "Invalid Id", 500, error);
        });
});

const user = router ;

export { user }