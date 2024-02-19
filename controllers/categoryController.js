const asyncHandler = require('express-async-handler');
const Category = require('../models/category');
const Items = require('../models/item');
const { body, validationResult } = require('express-validator');

const categoryValidation = () => {
    body('name', 'Name must be between 1 to 20 characters')
        .trim()
        .isLength({ min: 1, max: 20})
        .escape(),
        body('description', 'Description must be between 1 to 20 characters')
            .trim()
            .isLength({ min: 1, max: 20})
};

module.exports.category = asyncHandler(async (req, res, next) => {
    res.redirect(req.baseUrl + '/all');
})

module.exports.get_category_all = asyncHandler(async (req, res, next) => {
    const categories = await Category.find({}).exec();

    res.render('category/all', {
        title: 'All Categories',
        categories
    })
});


