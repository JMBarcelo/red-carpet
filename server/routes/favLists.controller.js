const express = require("express");
const router = express.Router();
const FavoutitesList = require("../../models/FavouritesList");
const loggedIn = require("../../utils/isAuth");

router.get("/", (req, res, next) => {
  FavoutitesList.find({})
    .populate("_user")
    .exec((err, favoutitesLists) => {
      if (err) {
        return res.status(500).json(err);
      }

      return res.status(200).json(favoutitesLists);
    });
});

router.get("/:id", (req, res, next) => {
  FavoutitesList.findById(req.params.id)
    .populate("_user")
    .exec((err, favoutitesList) => {
      if (err) {
        return res.status(500).json(err);
      }
      if (!favoutitesList) {
        return res.status(404).json(err);
      }

      return res.status(200).json(favoutitesList);
    });
});

router.post("/", loggedIn, (req, res, next) => {
  const newFavoutitesList = new FavoutitesLists({
    title: req.body.title,
    _user: req.user._id,
  });

  newFavoutitesList.save(err => {
    if (err) {
      return res.status(500).json(err);
    }
    if (newFavoutitesList.errors) {
      return res.status(400).json(newFavoutitesList);
    }

    return res.status(200).json(newFavoutitesList);
  });
});

module.exports = router;