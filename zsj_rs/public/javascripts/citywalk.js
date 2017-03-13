var fs = require('fs');
module.exports.getcityWalk = function(){
	var data = fs.readFileSync('./data/citywalk/cityWalkList.json');
	return JSON.parse(data.toString());
}