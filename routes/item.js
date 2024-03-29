const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/all', itemController.get_item_all);

router.get('/create', itemController.get_item_create);

router.post('/create', itemController.post_item_create);

router.get('/:id', itemController.get_item);

router.get('/:id/edit', itemController.get_item_edit);

router.post('/:id/edit', itemController.post_item_edit);

router.get('/:id/delete', itemController.get_item_delete);

router.post('/:id/delete', itemController.post_item_delete);

module.exports = router;

//Arreglar create y edit