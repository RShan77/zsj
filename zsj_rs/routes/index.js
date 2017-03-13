var express = require('express');
var qs = require('querystring')

var router = express.Router();
var data= require('../public/javascripts/index');
/* GET home page. */
router.get('/', function(req, res, next) {
	var freeWalk = JSON.parse(data.getfreeWalkJson());
  	var menu = data.getmenuJson();
  	// express中专门渲染视图
	res.render( 'index',{freeWalk:freeWalk,menu:menu});
});
router.get("/CityWalk",function(req,res,next){
	res.render('CityWalk',{})
})
module.exports = router;
