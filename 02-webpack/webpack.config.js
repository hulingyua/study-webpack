var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: path.join(__dirname,'src/main.js'),
  output:{
    path: path.join(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        loader:['style-loader','css-loader']
      },{
        test:/\.sass$/,
        loader:['style-loader','css-loader','sass-loader']
      },{
        test:/\.less$/,
        loader:['style-loader','css-loader','less-loader']
      },{
        test:/\.(jpg|jpeg|png|bmp|gif|svg)$/,
        use:[{
          loader:'url-loader'
        }]
      }
    ]
  },
  devServer:{
    port:8082,
    contentBase:'./src',
    hot:true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        template: path.join(__dirname, "src/index.html")
    })
  ]
}