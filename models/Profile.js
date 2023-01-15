const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  authEmail: {
    type: String,
  },
  userId: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  favouriteFilms: {
    type: [String],
  },
});

module.exports = mongoose.model("profile", ProfileSchema);
