var fs = require('fs');
//扩展模块方法获取自由行模块数据
module.exports.getfreeWalkJson = function(){
	//同步读取freeWalk数据
	//并以json格式返回
	var data = fs.readFileSync('./data/index/freeWalk.json');
	return data.toString();
}
//扩展模块方法获取菜单数据
module.exports.getmenuJson = function(){
	//同步读取菜单数据
	//并以json格式返回
	var data = fs.readFileSync('./data/index/menu.json');
	return JSON.parse(data.toString());
}