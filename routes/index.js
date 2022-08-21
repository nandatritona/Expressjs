var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/home", (req, res) => {
  res.json({
    message: "hello home"
  });
});

module.exports = router;
