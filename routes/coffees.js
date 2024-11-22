const router = require("express").Router();

const { getAllCoffees } = require("../middlewares/coffee");

// get all the coffees
router.route("/").get(getAllCoffees);

module.exports = router;
