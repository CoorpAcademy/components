"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var navigation_1 = require("./navigation");
var rootReducer = (0, redux_1.combineReducers)({
    navigation: navigation_1["default"]
});
exports["default"] = rootReducer;
