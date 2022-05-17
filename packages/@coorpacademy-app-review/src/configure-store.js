"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var actionCreators = require("./actions");
var reducers_1 = require("./reducers");
var preloadedState = undefined;
function configureStore(services) {
    var _compose = process.env.NODE_ENV !== 'production' ? redux_devtools_extension_1.composeWithDevTools : redux_1.compose;
    var composeEnhancers = _compose({
        actionCreators: actionCreators,
        name: 'app-review',
        trace: true,
        traceLimit: 25
    });
    var composedEnhancer = composeEnhancers((0, redux_1.applyMiddleware)(redux_thunk_1["default"]));
    var store = (0, redux_1.createStore)(reducers_1["default"], preloadedState, composedEnhancer);
    return store;
}
exports["default"] = configureStore;
