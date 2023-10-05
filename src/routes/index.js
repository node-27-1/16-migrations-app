const express = require('express');
const productRouter = require('./product.router');
const movieRouter = require('./movie.router');
const categoryRouter = require('./category.router');
const genreRouter = require('./genre.router');
const supplierRouter = require('./supplier.router');
const actorRouter = require('./actor.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/products', productRouter);
router.use('/movies', movieRouter);
router.use('/categories', categoryRouter);
router.use('/genres', genreRouter);
router.use('/suppliers', supplierRouter);
router.use('/actors', actorRouter);

module.exports = router;
