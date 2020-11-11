const path = require('path'); // pour créer un chemin absolu pour webpack

module.exports = {
  mode: "production",
  // entrée avec les polyfill
  entry: ['babel-polyfill', './src/app.js'], 
  // Sortie
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:  'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
