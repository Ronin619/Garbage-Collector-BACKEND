import express from "express";
const router = express.Router();
import userController from "../../Controllers/user/userController";

router.get("/", userController.findAllUsers);
router.post("/", userController.addUser);

module.exports = router;
