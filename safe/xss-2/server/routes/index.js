var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var xss = req.query.xss;
    res.render('index', {title:'xss test', xss: xss });

  	// res.render('index', { title: 'Express' });
});

module.exports = router;
