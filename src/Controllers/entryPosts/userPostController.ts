import { Request, Response } from "express";
const Post = require("../../Models/postEntryModel");

// Get: Get all entries by user
const getAllEntriesByUser = async (req: Request, res: Response) => {
  const userId = req.userId;
  const AllUsersPosts = await Post.find({}).where({ author: userId });

  res.status(200).json(AllUsersPosts);
};

// POST:Create a new entry
const createEntry = async (req: Request, res: Response) => {
  try {
    const user_id = req.userId;
    const entry = await Post.create({
      title: req.body.title,
      postEntry: req.body.postEntry,
      author: user_id,
    });
    res.status(200).json(entry);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
};

export default { getAllEntriesByUser, createEntry };
