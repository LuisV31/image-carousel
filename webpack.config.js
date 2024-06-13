const path = require("path");

module.exports = {
  entry: "./src/carousel.js", // Ensure this path is correct
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "CarouselModule",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "development", // Set the mode to 'development'
};
