const { Router } = require("express");

const { getMovie } = require("../controllers/movie");

const router = Router();

router.get("/:id", getMovie);

module.exports = router;
