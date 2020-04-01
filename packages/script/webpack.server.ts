import path from "path";
import webpack, { Configuration } from "webpack";
const serverSrc = path.resolve(__dirname, "./server.ts");
const distRoot = path.resolve(__dirname, "./dist");

const serverConfig: Configuration = {
  mode: "production",
  target: "node",
  node: {
    __dirname: false,
    __filename: false
  },
  externals: [
    (_, req, cb) => {
      if (!/^@package/.test(req) && req[0] !== "." && req[0] !== "/") {
        return cb(null, `commonjs ${req}`);
      }
      cb(null, undefined);
    }
  ],
  entry: {
    server: serverSrc
  },
  output: {
    path: distRoot,
    filename: "server.js"
  },
  resolve: { extensions: [".js", ".ts"] },
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
