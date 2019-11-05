const webpack = require('webpack');

module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    });
    config.resolve.extensions.push('.ts', '.tsx');

    config.plugins = config.plugins.filter(
        plugin => !(plugin instanceof webpack.DefinePlugin)
    );

    return config;
};
