const router = require("express").Router();

// get all the coffees
router.route("/").get();

module.exports = router;
