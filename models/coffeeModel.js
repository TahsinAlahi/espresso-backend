const mongoose = require("mongoose");

const coffeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Coffee name is required"],
  },
  chef: { type: String, required: [true, "Chef name is required"] },
  supplier: { type: String, required: [true, "Supplier name is required"] },
  taste: { type: String, required: [true, "Taste is required"] },
  category: { type: String, required: [true, "Category is required"] },
  details: { type: String, required: [true, "Details is required"] },
});

module.exports = mongoose.model("Coffee", coffeeSchema);
