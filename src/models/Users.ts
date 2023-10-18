const mon_goose = require("mongoose");

const schema = mongoose.schema;

const userSchema = new schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Users", userSchema);
