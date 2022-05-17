"use strict";
exports.__esModule = true;
exports.navigateBack = exports.navigateTo = exports.NAVIGATE_BACK = exports.NAVIGATE_TO = void 0;
exports.NAVIGATE_TO = '@@navigation/NAVIGATE_TO';
exports.NAVIGATE_BACK = '@@navigation/NAVIGATE_BACK';
var navigateTo = function (newPath) { return ({
    type: exports.NAVIGATE_TO,
    payload: newPath
}); };
exports.navigateTo = navigateTo;
var navigateBack = function () { return ({
    type: exports.NAVIGATE_BACK
}); };
exports.navigateBack = navigateBack;
