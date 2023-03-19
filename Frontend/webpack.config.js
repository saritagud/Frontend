const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports ={
    entry: './src/index.js',
    output:{
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module:{
        rules:[
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },

            {
                test: /\.(png|jpg|gif|svg)$/, 
                type: 'asset/resource', 
                generator: {
                filename: 'assets/[name][ext]', // nombre del archivo generado
                }
            },

            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader', 
                options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'menu.html',
            template: './src/menu.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'nosotros.html',
            template: './src/nosotros.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'contacto.html',
            template: './src/contacto.html',
        }),
        new MiniCssExtractPlugin(),
    ],

    devServer: {
        open: true,
    },

    resolve: { extensions: ['.js','.jsx', '.html', '.css'] },

    resolve: { fallback: { util: require.resolve("util/") } }
}




// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//     mode: 'development',
//     entry: './src/index.js', // archivo js principal
//     output: {
//       path: path.resolve(__dirname, 'dist'), // carpeta de salida
//       filename: 'bundle.js' // nombre del archivo js generado
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/, // regla para archivos css
//                 use: [MiniCssExtractPlugin.loader, 'css-loader']
//             },
//             {
//                 test: /\.(png|jpg|gif|svg)$/, // expresión regular que indica qué archivos procesar
//                 type: 'asset/resource', // tipo de módulo a usar
//                 generator: {
//                     filename: 'images/[name][ext]', // nombre del archivo generado
//                     },
//             },
//             {
//                 test: /\.js$/, // archivos que terminan en .js
//                 exclude: /node_modules/, // excluir la carpeta node_modules
//                 use: {
//                     loader: 'babel-loader', // usar el loader de babel
//                     options: {
//                         presets: ['@babel/preset-env'] // usar el preset de babel para convertir el código moderno
//                     }
//                 }
//             },
//         ],
//     },


// plugins: [
//     new MiniCssExtractPlugin({ // instancia el plugin
//       filename: 'style.css', // nombre del archivo css generado
//       chunkFilename: '[id].css' // nombre del archivo css por cada chunk
//     }),
//         new HtmlWebpackPlugin({ // plugin para crear el primer archivo html
//             filename: 'index.html', // nombre del archivo html generado
//             template: './src/index.html' // plantilla del primer archivo html
//         }),
//         new HtmlWebpackPlugin({ // plugin para crear el segundo archivo html
//             filename: 'menu.html', // nombre del archivo html generado
//             template: './src/menu.html' // plantilla del segundo archivo html
//         }),
//         new HtmlWebpackPlugin({ // plugin para crear el tercer archivo html
//             filename: 'nosotros.html', // nombre del archivo html generado 
//             template:'./src/nosotros.html'// plantilla del tercer archivo html 
//         }),
//         new HtmlWebpackPlugin({ // plugin para crear el tercer archivo html
//             filename: 'contacto.html', // nombre del archivo html generado 
//             template:'./src/contacto.html'// plantilla del tercer archivo html 
//         })
//     ]
