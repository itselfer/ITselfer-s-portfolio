var express = require('express');
var router = express.Router();

// exports.index = function(req, res) {
// 	res.render('index', {title : 'Express'});
// };

// exports.load = function(req, res) {
// 	memoModel.find({}, function(err, data) {
// 		res.json(data);
// 	});
// };


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
