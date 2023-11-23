var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Concert = require('../models/Bio_concert');
let ConcertController = require('../controllers/Bio_concert')
/* Get route for the Bio Concerts list */
// Read Operation
router.get('/', ConcertController.DislayConcertlist);
/* Get route for Add Concert page --> Create */
router.get('/add', ConcertController.AddConcert); 
/* Post route for Add Concert page --> Create */
router.post('/add', ConcertController.ProcessConcert);
/* Get route for displaying the Edit Concert page --> Update */
router.get('/edit/:id', ConcertController.EditConcert);
/* Post route for processing the Edit Concert page --> Update */
router.post('/edit/:id', ConcertController.ProcessEditConcert);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', ConcertController.DeleteConcert);
 module.exports = router;