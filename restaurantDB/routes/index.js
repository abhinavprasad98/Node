const router = require('express').Router();

router.use('/', require('./categories'));
router.use('/', require('./chef'));
router.use('/', require('./customers'));
router.use('/', require('./dishes'));
module.exports = router;