import express from "express";
const router = express.Router();
import allPostsController from "../../Controllers/entryPosts/allPostsController";

router.get("/", allPostsController.getAllEntryPosts);

module.exports = router;
