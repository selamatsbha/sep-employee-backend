const mongoose = require("mongoose");

//Creating our schema
const BookSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    authors: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Book", BookSchema);
