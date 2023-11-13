import { Request, Response } from "express";
const Post = require("../../Models/postEntryModel");

// GET: posts by all Users
const getAllEntryPosts = async (req: Request, res: Response) => {
  const allPosts = await Post.find({});

  res.status(200).json(allPosts);
};

export default { getAllEntryPosts };
