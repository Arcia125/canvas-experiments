
const path = require("path");

const config = {
  entry: [
    "babel-polyfill",
    path.resolve("src/index.js")
  ],
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        query: {

          "plugins": [
            ["transform-react-jsx", { "pragma": "preact.h" }]
          ]
          ,
          presets: ["es2015", "stage-0"],
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ],
  },
}

module.exports = config;