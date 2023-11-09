import { Request, Response } from "express";
const Post = require("../../Models/postEntryModel");

// Get: Get all entries
// const getAllEntries = async (req: Request, res: Response) => {
//   const posts = await Post.find({});

//   res.status(200).json(posts);
// };

// POST:Create a new entry
const createEntry = async (req: Request, res: Response) => {
  const { title, postEntry } = req.body;

  try {
    const entry = await Post.create({ title, postEntry });
    res.status(200).json(entry);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
};

export default { createEntry };
