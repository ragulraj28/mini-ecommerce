const express = require("express");
const router = express.Router();
const { getProducts, getSingleProduct } = require("../controller/productController");

router.route('/products').get(getProducts)
router.route('/product/:id').get(getSingleProduct)

module.exports = router;