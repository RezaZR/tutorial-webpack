const VueLoaderPlugin = require("vue-loader/lib/plugin");

const path = require("path");

module.exports = {
  entry: {
    main: "./src/main.js",
    vendor: "./src/vendor.js"
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader" },
      { test: /\.vue$/, use: "vue-loader" },
      {
        test: /\.(svg|jpg|jpeg|png|gif)(\?.*$|$)/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images",
            esModule: false
          }
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "fonts",
            esModule: true
          }
        }
      }
    ]
  }
};
