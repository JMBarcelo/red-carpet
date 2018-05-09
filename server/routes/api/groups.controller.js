const express  = require('express');
const router   = express.Router();
const Group   = require('../../models/Group.model');
const loggedIn = require('../../utils/isAuth');

router.get('/', (req, res, next) => {
  Group
    .find({})
    .populate('_user')
    .exec( (err, groups) => {
      if (err) { return res.status(500).json(err); }

      return res.status(200).json(groups);
    });
});

router.get('/:id', (req, res, next) => {
  Group
    .findById(req.params.id)
    .populate('_user')
    .exec( (err, group) => {
      if (err)     { return res.status(500).json(err); }
      if (!group) { return res.status(404).json(err); }

      return res.status(200).json(group);
    });
});

router.post('/', loggedIn, (req, res, next) => {
  const newGroup = new Group({
    name: req.body.name,
    _user: req.user._id,
  });

  newGroup.save((err) => {
    if (err)              { return res.status(500).json(err); }
    if (newGroup.errors) { return res.status(400).json(newGroup); }

    return res.status(200).json(newGroup);
  });
});

module.exports = router;