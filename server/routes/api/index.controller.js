const express = require('express');
const router  = express.Router();

const authRoutes = require('./auth.controller');
const grpRoutes  = require('./groups.controller');
const favlistRoutes  = require('./favLists.controller');
const cltRoutes  = require('./clothes.controller');

router.use('/', authRoutes);
router.use('/groups', grpRoutes);
router.use('/favlists', grpRoutes);
router.use('/clothes', grpRoutes);

module.exports = router;