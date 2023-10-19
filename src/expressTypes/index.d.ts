import { findAllUsers, addUser } from "../Controllers/user/userController";
export {};

declare global {
  namespace Express {
    export interface Request {
      findAllUsers?: findAllUsers;
      addUser?: addUser;
    }
  }
}
