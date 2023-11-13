import { Request, Response } from "express";
const Entry = require("../../Models/postEntryModel");

// Get: Get all entries by user
const getAllEntriesByUser = async (req: Request, res: Response) => {
  const userId = req.userId;
  const AllUsersPosts = await Entry.find({}).where({ author: userId });

  res.status(200).json(AllUsersPosts);
};

// POST:Create a new entry
const createEntry = async (req: Request, res: Response) => {
  try {
    const user_id = req.userId;
    const entry = await Entry.create({
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

// PATCH: Edit a users Entry
const editEntry = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const update = await Entry.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(update);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
};

export default { getAllEntriesByUser, createEntry, editEntry };
