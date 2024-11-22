const mongoose = require("mongoose");

const coffeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Coffee name is required"],
  },
  chef: { type: String, required: [true, "Chef name is required"] },
  Supplier: { type: String, required: [true, "Supplier name is required"] },
  Taste: { type: String, required: [true, "Taste is required"] },
  Category: { type: String, required: [true, "Category is required"] },
  Details: { type: String, required: [true, "Details is required"] },
});

module.exports = mongoose.model("Coffee", coffeeSchema);
