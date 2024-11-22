const router = require("express").Router();

const { getAllCoffees, createCoffee } = require("../middlewares/coffee");

// get all the coffees
router.route("/").get(getAllCoffees).post(createCoffee);

module.exports = router;
