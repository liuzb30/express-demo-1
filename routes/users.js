var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('测试数据');
});

router.get('/xxx', function(req, res, next) {
  res.send('测试数据 xxx');
});

module.exports = router;
