import { Request, Response } from "express";
const User = require("../../Models/usersModel");

// Get: all Users
const findAllUsers = async (req: Request, res: Response) => {
  const users = await User.find({});

  res.status(200).json(users);
};

// Post: Register new User
const registerUser = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;

  try {
    const user = await User.signup(email, password, username);

    res.status(200).json({ email, user });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
};

// Post: Login user

// Delete a User
const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findOneAndDelete({ _id: id });
  if (!user) {
    return res.status(400).json({ error: "user does not exist." });
  }
  res.status(200).json(user);
};

export default { registerUser, findAllUsers, deleteUser };
