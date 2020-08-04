const { override, addWebpackAlias } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, '.', dir)
  }

const addCustomize = () => config => {
    if (process.env.NODE_ENV === 'production') {
        config.devtool = false;
        config.output.path = resolve('dist');
        config.output.publicPath = './';
    }
    return config;
}

module.exports = {
    webpack: override(
        addWebpackAlias({
            ['@']: resolve('src')
          }),
        addCustomize(),
        (config, env) => {
            config = rewireReactHotLoader(config, env);
            config.resolve = {
                extensions: ['.js', '.jsx'],
                symlinks: false,
                alias: {
                    ...config.resolve.alias,
                    'react-dom': '@hot-loader/react-dom',
                }
            };
            return config;
        }       
    )
};