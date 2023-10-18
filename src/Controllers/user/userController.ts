import { Request, Response } from "express";
const User = require("../../Models/usersModel");

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

export default addUser;
