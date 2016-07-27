var path = require('path');


module.exports = {
	entry:path.resolve(__dirname,'2016年7月27日/src/index.js'),
	output:{
		path:path.resolve(__dirname,'2016年7月27日/build'),
		filename:'bundle.js'
	   },
	module:{
		loaders:[{test:/\.js$/,loader:'babel-loader'}]
	   }
}