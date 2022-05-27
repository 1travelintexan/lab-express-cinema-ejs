const express = require("express");
const router = express.Router();

require("../db");
const MovieModel = require("../Models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) =>
  res.render("index", { newTitle: "Cinema Ironhack" })
);

router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .then((allMovies) => {
      console.log("got all the movies :)");
      res.render("movies", { allMovies });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/movie/:id", (req, res, next) => {
  const { id } = req.params;
  MovieModel.findById(id)
    .then((singleMovie) => {
      console.log("got the movie", singleMovie);
      res.render("singleMovie", { singleMovie });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
