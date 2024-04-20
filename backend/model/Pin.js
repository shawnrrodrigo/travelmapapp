const mongoose = require("mongoose");

const PinSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    title: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      max: 50,
    },
    rating: {
      type: Number,
      require: true,
      min: 0,
      max: 5
    },
    lat: {
      type: Number,
      require: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Pin", PinSchema);
