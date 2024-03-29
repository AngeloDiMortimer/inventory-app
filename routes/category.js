const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.category);

router.get('/all', categoryController.get_category_all);

router.get('/create', categoryController.get_category_create);

router.post('/create', categoryController.post_category_create);
router.get('/:id', categoryController.get_category);

router.get('/:id/edit', categoryController.get_category_edit);

router.post('/:id/edit', categoryController.post_category_edit);

router.get('/:id/delete', categoryController.get_category_delete);

router.post('/:id/delete', categoryController.post_category_delete);

module.exports = router;