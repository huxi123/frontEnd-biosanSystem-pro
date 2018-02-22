module.exports = {
    entry: {
        indexMin:['babel-polyfill','./app.js'],
        vendor: ['redux','react-redux','react-router']
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname,"dist"),
        publicPath: "../web/src/dist/",
        chunkFilename: '[name].[chunkhash:5].min.js'
    },
    externals : {
        'react': 'React',
        'react-dom': 'ReactDOM',
        "echarts": "echarts"
      },
      plugins: [
        new ExtractTextPlugin("../css/restructCSS/min.css")
      ]
}