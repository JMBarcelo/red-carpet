const express = require('express');
const router  = express.Router();

const authRoutes = require('./auth.controller');
//const grpRoutes  = require('./groups.controller');
//const favlistRoutes  = require('./favLists.controller');
//const cltRoutes  = require('./clothes.controller');

const User = require('../models/User');
const Garment = require('../models/Garment');
const FavList = require('../models/FavouritesList');
const Group = require('../models/Group');
const crud = require('./crud');

router.use('/', authRoutes);
router.use('/edit', crud(User));
router.use('/groups', crud(Group));
router.use('/favlists', crud(FavList));
router.use('/clothes', crud(Garment));

module.exports = router;