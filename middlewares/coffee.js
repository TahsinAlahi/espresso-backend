const coffeeModel = require("../models/coffeeModel");

async function getAllCoffees(req, res, next) {
  try {
    const coffees = await coffeeModel.find().exec();
    res.status(200).json(coffees);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllCoffees,
};
