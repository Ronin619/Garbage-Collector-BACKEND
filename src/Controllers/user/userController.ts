import { Request, Response } from "express";
const User = require("../../Models/usersModel");

// Get all Users
const findAllUsers = async (req: Request, res: Response) => {
  const users = await User.find({});

  res.status(200).json(users);
};

// Post a new User
const addUser = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;

  try {
    const user = await User.create({ username, password, email });
    res.status(200).json(user);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json(err.message);
    } else {
      res.status(400).json("Unexpected error");
    }
  }
};

// Delete a User
const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findOneAndDelete({ _id: id });
  if (!user) {
    return res.status(400).json({ error: "user does not exist." });
  }
  res.status(200).json(user);
};

export default { addUser, findAllUsers, deleteUser };
