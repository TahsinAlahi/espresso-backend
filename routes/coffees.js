const router = require("express").Router();

const {
  getAllCoffees,
  createCoffee,
  getCoffee,
  updateCoffee,
  deleteCoffee,
} = require("../middlewares/coffee");

// get all the coffees
router.route("/").get(getAllCoffees).post(createCoffee);

// get a specific coffee
router.route("/:id").get(getCoffee).patch(updateCoffee).delete(deleteCoffee);

module.exports = router;
