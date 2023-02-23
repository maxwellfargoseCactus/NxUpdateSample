module.exports = {
  name: 'reactapp',
  exposes: {
    './Module': 'apps/reactapp/src/app/remote-entry/entry.module.ts',
  },
  //   module:{
  //     rules:[{
  //         loader: 'babel-loader',
  //         test: /\.js$|jsx/,
  //         exclude: /node_modules/
  //     }]
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
};
