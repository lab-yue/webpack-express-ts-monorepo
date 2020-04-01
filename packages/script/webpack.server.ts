import path from "path";
import webpack, { Configuration } from "webpack";
import nodeExternals from "webpack-node-externals";

const serverSrc = path.resolve(__dirname, "./server.ts");
const distRoot = path.resolve(__dirname, "./dist");

const serverConfig: Configuration = {
  mode: "development",
  target: "node",
  node: {
    __dirname: false,
    __filename: false
  },
  externals: [nodeExternals()],
  entry: {
    server: serverSrc
  },
  output: {
    path: distRoot,
    filename: "server.js"
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env)
    }),
    new webpack.ProgressPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  }
};

export default serverConfig;
