import express from "express";
const router = express.Router();
const { requireAuth } = require("../../middleware");
import userPostController from "../../Controllers/entryPosts/userPostController";

router.use(requireAuth);

router.get("/", userPostController.getAllEntriesByUser);
router.post("/createPost", userPostController.createEntry);

module.exports = router;
