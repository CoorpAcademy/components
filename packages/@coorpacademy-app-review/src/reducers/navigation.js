"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.getCurrentViewName = exports.initialState = void 0;
var navigation_1 = require("../actions/navigation");
exports.initialState = ['home'];
var reducer = function (state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case navigation_1.NAVIGATE_TO: {
            return __spreadArray(__spreadArray([], state, true), [action.payload], false);
        }
        case navigation_1.NAVIGATE_BACK: {
            var newState = __spreadArray([], state, true);
            newState.pop();
            return newState;
        }
        default:
            return state;
    }
};
var getCurrentViewName = function (appState) { return appState.navigation[appState.navigation.length - 1]; };
exports.getCurrentViewName = getCurrentViewName;
exports["default"] = reducer;
