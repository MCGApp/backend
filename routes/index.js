const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: 'welcome to the unofficial mcg gehrden api. if you want to learn more check out https://github.com/MCGApp'})
});

module.exports = router;
