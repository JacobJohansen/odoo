module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'odoo.js',
    path: './lib/',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};