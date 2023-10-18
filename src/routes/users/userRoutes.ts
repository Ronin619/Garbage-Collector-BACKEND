import express from "express";
const router = express.Router();
//const userCtrl = require("../../Controllers/user/userController");
import addUser from "../../Controllers/user/userController";

router.post("/", addUser);

module.exports = router;
