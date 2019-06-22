module.exports = {
  mode: 'development',
  entry: './src/bomb.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: true,
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          },
        ]
      },
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        // 画像をBase64として取り込む
        loader: "url-loader"
      }
      //{ test: /\.svg$/, use: ['svg-url-loader']},
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.scss']
  },
  output: {
    filename: './bomb.js'
  },
};
