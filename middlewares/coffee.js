const coffeeModel = require("../models/coffeeModel");

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

module.exports = {
  getAllCoffees,
  createCoffee,
};
