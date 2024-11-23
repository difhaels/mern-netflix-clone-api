const { addToLikedMovies, getLikedMovies, removeFromLikedeMovies } = require("../controllers/UserController");

const router = require("express").Router();

router.post("/add", addToLikedMovies);
router.get("/liked/:email", getLikedMovies)
router.put("/delete", removeFromLikedeMovies)

module.exports = router;