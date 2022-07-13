const path = require("path");
const metroBabelRegister = require("metro-babel-register");

// global.__DEV__ = true;

// const onlyList = [
//   path.join(require.resolve("react-native"), ".."),
//   path.join(require.resolve("react-native-mock"), "../.."),
// ];
// console.log({ onlyList });

// metroBabelRegister(onlyList, { lazy: true });
// require("@babel/register")({
//   only: [],
//   babelrc: false,
//   configFile: false,
// });
// console.log(metroBabelRegister.config(onlyList))
// require("@babel/register")({
//   ...metroBabelRegister.config(onlyList),
//   extensions: [
//     ".ts",
//     ".tsx", // Babel's default extensions
//     ".es6",
//     ".es",
//     ".jsx",
//     ".js",
//     ".mjs",
//   ],
// });

require('react-native-mock-render/mock');

require("@babel/register")({
  extensions: [".es6", ".es", ".jsx", ".js", ".mjs", ".ts", ".tsx"],
});

