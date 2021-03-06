var path = require('path');
var webpack = require('webpack');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	devtool: '#source-map',
	entry: {
		main : './src/main.jsx',
		commons : ['react', 'react-dom', 'socket.io-client', 'jquery']
	},
	output: {
	    path: path.resolve(__dirname, './dist'),
	    filename: 'main.js',
	    publicPath: '/dist/'
	},
	module:{
		loaders:[
			{
				test:/\.jsx$/,
				exclude: /node_modules/,
				loader:'babel',
				query: {
			        presets: ['react']
			   	}
			}
			//{ test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") },
			//{ test: /\.(jpg|png|gif)$/, loader: 'file'}
			//{ test: /\.html$/, loader: "html" }
			//loader: "file-loader?name=images/[hash].[ext]"
		]
	},
	plugins: [
		//提取公共js
	    new webpack.optimize.CommonsChunkPlugin({
	        name: "commons",
	        filename:"commons.js"
	        //minChunks: Infinity
	    }),
	    new webpack.optimize.UglifyJsPlugin({
	    	compress:{
	    		warnings:false
	    	}
	    })
	    //独立出css
	    //new ExtractTextPlugin("style.css", {allChunks: true})
	]
}