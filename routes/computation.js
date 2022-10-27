var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x = Math.floor(Math.random()*10);
    var y = Math.floor(Math.random()*10);
    var a = Math.atan(x);
    var b = Math.exp(x,y);
    var c = Math.expm1(x);

  res.render('computation', { title: 'My Bonus computation', x:x,y:y, a:a, b:b, c:c});
});

module.exports = router;