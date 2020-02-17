const router = require('express').Router();

router.use('/', require('./categories'));
router.use('/', require('./chef'));
router.use('/', require('./customers'));
router.use('/', require('./dishes'));
router.use('/', require('./waiters'));
router.use('/', require('./orders'));
router.use('/', require('./order_items'));
router.use('/', require('./menus'));

module.exports = router;