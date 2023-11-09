import mongoose from "mongoose";
const schema = mongoose.Schema;

const postEntrySchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    postEntry: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("postEntryModel", postEntrySchema);
