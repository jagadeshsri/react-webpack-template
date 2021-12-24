const path = require("path");

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return{
    mode,
    entry : "./index.js",
    output:{
        path: path.resolve(__dirname,"public"),
        filename: "main.js"
    },
    devServer:{
        open: true
    },
    module: {
       rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
             
        ]
    },
}
}