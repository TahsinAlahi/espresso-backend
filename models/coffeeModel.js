const mongoose = require("mongoose");

const coffeeSchema = new mongoose.Schema({
  name: {
    Type: String,
    required: [true, "Coffee name is required"],
  },
  chef: { Type: String, required: [true, "Chef name is required"] },
  Supplier: { Type: String, required: [true, "Supplier name is required"] },
  Taste: { Type: String, required: [true, "Taste is required"] },
  Category: { Type: String, required: [true, "Category is required"] },
  Details: { Type: String, required: [true, "Details is required"] },
});

module.exports = mongoose.model("Coffee", coffeeSchema);
