const router = require('express').Router();


const userRoutes = require('./userRoutes.js');
const blogRoutes = require('./blogRoutes.js');

router.use('/users', userRoutes.js);
router.use('/blogs', blogRoutes.js);


module.exports = router;
