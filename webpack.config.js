var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry : __dirname+'/src/js/index.js',
  output : {
    path: path.resolve(__dirname,'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
  			test: /\.scss$/,
  			use: [
        				{loader:'style-loader'},
        				{loader:'css-loader',options:{sourceMap:true}},
        				{loader:'sass-loader',options:{sourceMap:true}}
        			]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
		    loader: 'file-loader'
      },
      {
				test:/\.(png|jpg|gif|svg)$/,
				loader:'file-loader'
			}
    ]
  },
  devServer:{
    contentBase: path.resolve(__dirname,''),
    port: 8090,
    inline: true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
}
