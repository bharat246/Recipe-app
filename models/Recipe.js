const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [2, "Title must be at least 2 characters"]
    },

    ingredients: {
      type: [String],
      required: [true, "Ingredients are required"],
      validate: {
        validator: function (val) {
          return val.length > 0;
        },
        message: "Ingredients cannot be empty"
      }
    },

    instructions: {
      type: String,
      required: [true, "Instructions are required"],
      trim: true
    },

    cookingTime: {
      type: Number,
      required: [true, "Cooking time is required"],
      min: [1, "Cooking time must be greater than 0"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);