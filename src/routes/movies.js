const { Router } = require("express");

const { renderMoviePage } = require("../controllers/movie");

const router = Router();

router.get("/", renderMoviePage);

module.exports = router;
