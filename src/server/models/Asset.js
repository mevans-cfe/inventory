const mongoose = require("mongoose");

const AssetSchema = new mongoose.Schema({
  issueDate: {
    type: Date,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  model: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: false,
  },
  imei: {
    type: String,
    required: false,
  },
  number: {
    type: String,
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
});

module.exports = mongoose.model("Asset", AssetSchema);
