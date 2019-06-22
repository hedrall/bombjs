module.exports = {
  mode: 'development',
  entry: './src/bomb.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: './bomb.js'
  },
};
