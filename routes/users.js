var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hello world');
});

router.get("/me", (req, res) => {
  res.send("me");
});

module.exports = router;
