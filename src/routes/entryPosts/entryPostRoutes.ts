import express from "express";
const router = express.Router();
const { requireAuth } = require("../../middleware");
import postController from "../../Controllers/entryPosts/postController";

router.use(requireAuth);

router.get("/", postController.getAllEntries);
router.post("/", postController.createEntry);

module.exports = router;
