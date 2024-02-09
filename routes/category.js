const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.category);

router.get('/all', categoryController.get_category_all);
module.exports = router;