const express = require('express');
const router = express.Router();
const {
  homepageController
} = require('../controllers/main')

/* GET home page. */


router.get('/', homepageController);

module.exports = router;
