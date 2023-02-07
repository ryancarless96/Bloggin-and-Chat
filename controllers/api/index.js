const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const postRoutes = require('./postRoutes.js');
const blogRoutes = require('./blogRoutes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/blogs', blogRoutes);


module.exports = router;
