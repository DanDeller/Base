const path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, '/client/src/app.jsx'),
    path.join(__dirname, '/client/src/styles/main.less')
  ],
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },

  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/src'),
      loader: 'babel-loader',
      query: {
        presets: ["react", "es2015"]
      }
    },
    {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      }
    ]
  },
  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};
