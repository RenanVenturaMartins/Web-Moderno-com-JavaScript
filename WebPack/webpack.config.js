const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('WebPack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode:modoDev?  'development': 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new TerserPlugin({
            parallel: true,
            terserOptions: {
              ecma: 6,
            },
          }),
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    optimization: {
        minimizer: [
          
            new OptimizeCSSAssetsPlugin ({ })
        ]
    },
        module: {
            rules:  [{
                    test: /\.s?[ac]ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        //'style-loader',  // adicionar css a dom injetando a tag <style>
                        'css-loader',
                        'sass-loader',
                    ]
                }, {
                    test:/\.(png|jpg|gif|svg)$/,
                    use: ['filer-loader']

                }]
            
        }
}