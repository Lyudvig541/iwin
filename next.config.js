const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
    reactStrictMode: true,
    env: {
        REACT_APP_INFURA_KEY: process.env.REACT_APP_INFURA_KEY
    },
    webpack(config) {

        config.module.rules.push({
            test: /\.mp3$/,
            use: {
                loader: 'url-loader'
            }
        });
        return config;
    
    }
});
