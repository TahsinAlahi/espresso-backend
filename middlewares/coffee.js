const { default: mongoose } = require("mongoose");
const coffeeModel = require("../models/coffeeModel");
const createHttpError = require("http-errors");

async function getAllCoffees(req, res, next) {
  try {
    const coffees = await coffeeModel.find().exec();
    res.status(200).json(coffees);
  } catch (error) {
    next(error);
  }
}

async function createCoffee(req, res, next) {
  try {
    const { name, chef, supplier, taste, category, details } = req.body;
    if (!name || !chef || !supplier || !taste || !category || !details) {
      throw createHttpError(400, "All fields are required");
    }

    const newCoffee = await coffeeModel.create({
      name,
      chef,
      supplier,
      taste,
      category,
      details,
    });

    res.status(201).json(newCoffee);
  } catch (error) {
    next(error);
  }
}

async function getCoffee(req, res, next) {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) throw createHttpError(400, "Invalid id");

    const coffee = await coffeeModel.findById(id).exec();

    if (!coffee) throw createHttpError(404, "Coffee not found");

    res.status(200).json(coffee);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllCoffees,
  createCoffee,
  getCoffee,
};
