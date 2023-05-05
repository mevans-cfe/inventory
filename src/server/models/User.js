const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  title: {
    type: String,
    default: false,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  assets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asset",
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
