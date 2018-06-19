const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: 'public/app.css'
})

function sassRules () {
  return [
    {
      test: /\.(sass|scss)$/,
      loader: extractSass.extract(['css-loader', 'sass-loader'])
    }
  ]
}

module.exports = {
  entry: [
    './resources/assets/sass/app.scss'
  ],
  output: {
    filename: 'public/app.css'
  },
  module: {
    rules: sassRules()
  },
  plugins: [
    extractSass
  ]
}