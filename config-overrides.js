const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackResolve,
  addWebpackPlugin,
  overrideDevServer,
  addWebpackExternals
} = require('customize-cra');
const path = require('path');
const pkgJson = require('./package.json');
const webpack = require('webpack');
const rewireWebpackOutput = require('react-app-rewire-output');

const devServerCustom = () => (config) => {
  config.quiet = false;
  config.proxy = {
    '/api': 'http://localhost:1447'
  };
  return config;
};
const webpackConfig = () => (config, env) => {
  config = rewireWebpackOutput(config, env, {
    publicPath: './'
  });
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto'
  });
  return config;
};
module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      libraryDirectory: 'es',
      style: true
    }),
    addWebpackExternals({
      moment: 'moment',
      lodash: '_'
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: { '@brand-primary': '#01A2A4', '@brand-primary-tap': '#007475' }
    }),
    webpackConfig(),
    addWebpackResolve({
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@gcomponents': path.resolve(__dirname, 'src/graphql/components'),
        '@messages': path.resolve(__dirname, 'src/messages/index')
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.html', '.scss', '.less', '.css']
    }),
    addWebpackPlugin(
      new webpack.DefinePlugin({
        'process.env': {
          version: `"${pkgJson.version}"`
        }
      })
    )
  ),
  devServer: overrideDevServer(devServerCustom())
};
