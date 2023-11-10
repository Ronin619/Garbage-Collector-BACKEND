export {};

declare global {
  namespace Express {
    interface Request {
      user: String;
      headers: String;
    }
  }
}
