module.exports = {
  entry: [
  'script!jquery/dist/jquery.min.js',
    './src/index.jsx'
  ],
  output: {
    path: __dirname,    
    filename: './public/js/bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
