const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: true,
      unique: true,
    },
    recruiterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    rating: {
      type: Number,
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Review", reviewSchema);
