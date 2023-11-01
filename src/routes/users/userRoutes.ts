import express from "express";
const router = express.Router();
import userController from "../../Controllers/user/userController";

router.get("/", userController.findAllUsers);
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
