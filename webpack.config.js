const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  devtool: `source-map`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`),
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    publicPath: `https://localhost:8080`,
    compress: true,
    watchContentBase: true,
  },
};
