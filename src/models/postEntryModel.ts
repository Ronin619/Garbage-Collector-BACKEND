import mongoose from "mongoose";
const schema = mongoose.Schema;

const postEntrySchema = new schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usersModel",
  },
  title: {
    type: String,
    required: true,
  },
  postEntry: {
    type: String,
    required: true,
  },
  entryDate: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("postEntryModel", postEntrySchema);
