var path = require('path');


module.exports = {
	entry:path.resolve(__dirname,'2016_07_27/src/index.js'),
	output:{
		path:path.resolve(__dirname,'2016_07_27/build'),
		filename:'bundle.js',
	   },
  devServer: {
  publicPath: "/static/",
  stats: { colors: true },
  port: 8088,
  contentBase: 'build',
  inline: true
    },
	module:{
		loaders:[
			{   test:/\.js$/,
				loader:'babel-loader'
			}]
	   }
}