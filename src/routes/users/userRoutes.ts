import express from "express";
const router = express.Router();
import userController from "../../Controllers/user/userController";

router.get("/", userController.findAllUsers);
router.post("/", userController.addUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
