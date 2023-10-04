const express = require('express');
const productRouter = require('./product.router');
const movieRouter = require('./movie.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/products', productRouter);
router.use('/movies', movieRouter);

module.exports = router;
