const Webpack = require("webpack"); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isRelease = process.argv.indexOf("--release") !== -1;

module.exports = {
    entry: `${__dirname}/src/Index.tsx`,
    mode: isRelease ? "production" : "development",

    output: {
        filename: "bundle.js",
        path: `${__dirname}/dist`,
        pathinfo: false
    },

    performance: {
        hints: false
    },

    devtool: isRelease ? false : "eval",

    resolve: {
        extensions: [
            ".ts", 
            ".tsx", 
            ".js", 
            ".json"
        ]
    },

    optimization: {
        removeAvailableModules: isRelease,
        removeEmptyChunks: isRelease,
        minimize: isRelease,
    },

    module: {
        rules: [ 

            { 
                test: /\.tsx?$/, 
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                            experimentalWatchApi: true,
                        }
                    }
                ]
            },

            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader" 
            },

            {
                test: /\.css$/,
                use: [
                    isRelease ? MiniCssExtractPlugin.loader : "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    "postcss-loader"
                ]
            },

            {
                test: /\.(png|jpg|jpeg|gif|svg|bmp|ttf|otf|eot|woff2|woff)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            outputPath: "assets",
                            limit: 8000,
                            fallback: "file-loader?outputPath=assets"
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            minify: isRelease ? {
                removeComments: true,
                removeEmptyAttributes: true,
                collapseWhitespace: true,
                useShortDoctype: true
            } : false,
            filename: "index.html",
            favicon: `${__dirname}/src/Index.png`,
            template: `${__dirname}/src/Index.html`
        }),
        new Webpack.DefinePlugin({
            webpackCfg: {
                aVariable: JSON.stringify("hello!")
            }
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new ForkTsCheckerWebpackPlugin()
    ],

    devServer: {
        contentBase: "dist",
        https: false,
        port: 9000,
        open: true,
        clientLogLevel: 'none',
        historyApiFallback: true, // allows rooting, disable if you are not using rooting
        overlay: true
    }
};