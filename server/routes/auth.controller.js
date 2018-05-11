const express  = require('express');
const passport = require('passport');
const router   = express.Router();
const User     = require('../models/User');
const bcrypt   = require('bcrypt');

router.post("/login", (req, res, next) => {
  passport.authenticate('local', (err, user, info) =>  {
    if (err) { return next(err); }

    if (!user) { return res.status(401).json(info); }

    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({
          message: 'something went wrong :('
        });
      }
      res.status(200).json(req.user);
    });
  })(req, res, next);
});

router.post("/signup", (req, res, next) => {
  console.log(req.body)
  const { username, password, email, firstname, lastname, birthday, city, image } = req.body;
  console.log(req.body)
  if (!username || !password || !email || !firstname || !lastname || !birthday || !city || !image) {
    return res
      .status(400)
      .json({ message: "Please provide all fields" });
    ;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      return res
          .status(400)
          .json({ message: "The username already exists" });
    }

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = User({
      username,
      password: hashPass,
      email,
      firstname,
      lastname,
      birthday,
      city,
      image
    });

    newUser.save((err) => {
      if (err) {
        res.status(400).json({ message: "Something went wrong" });
      } else {
        req.login(newUser, function(err) {
          if (err) {
            return res.status(500).json({
              message: 'something went wrong'
            });
          }
          return res.status(200).json(req.user);
        });
      }
    });
  });
});

router.post("/logout", function(req, res) {
  req.logout();
  res.status(200).json({ message: 'Success' });
});

router.get("/loggedin", function(req, res) {
  if(req.isAuth()) {
    return res.status(200).json(req.user);
  }

  return res.status(403).json({ message: 'Unauthorized' });
});

module.exports = router;