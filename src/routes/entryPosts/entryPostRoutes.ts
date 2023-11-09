import express from "express";
const router = express.Router();
import postController from "../../Controllers/entryPosts/postController";

router.post("/", postController.createEntry);

module.exports = router;
