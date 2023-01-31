const router = require('express').Router();


const userRoutes = require('./userRoutes.js');
const blogRoutes = require('./blogRoutes.js');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);


module.exports = router;
