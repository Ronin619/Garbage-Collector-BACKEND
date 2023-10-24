import { Request, Response } from "express";
const User = require("../../Models/usersModel");
const bcrypt = require("bcrypt");
const saltRounds = 12;

// Get: all Users
const findAllUsers = async (req: Request, res: Response) => {
  const users = await User.find({});

  res.status(200).json(users);
};

// Post: Register new User
const registerUser = async (req: Request, res: Response) => {
  bcrypt.hash(
    req.body.password,
    saltRounds,
    async (err: string, hash: string) => {
      const exists = await User.findOne({ email: req.body.email });
      if (exists) {
        throw Error("Email already in use");
      } else {
        const user = await User.create({
          username: req.body.username,
          password: hash,
          email: req.body.email,
        });
        if (err) {
          res.status(400).json(err);
        } else {
          res.status(200).json(user);
        }
      }
    }
  );
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
