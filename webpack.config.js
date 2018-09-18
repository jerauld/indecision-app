const path = require('path');

module.exports = {
    entry: './src/app.js', // entry -> output
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: { //loader
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
};

