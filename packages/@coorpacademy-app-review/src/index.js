"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var configure_store_1 = require("./configure-store");
var navigation_1 = require("./actions/navigation");
var navigation_2 = require("./reducers/navigation");
// -----------------------------------------------------------------------------
var styles = react_native_1.StyleSheet.create({
    rootView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
// -----------------------------------------------------------------------------
var NavText = function (_a) {
    var viewName = _a.viewName, navigateTo = _a.navigateTo;
    console.log({ viewName: viewName });
    switch (viewName) {
        case 'home':
            return (<react_native_1.Pressable onPress={function () {
                    navigateTo('onboarding');
                }}>
          <react_native_1.Text>view home</react_native_1.Text>
        </react_native_1.Pressable>);
        case 'onboarding':
            return (<react_native_1.Pressable onPress={function () { return navigateTo('quizzer'); }}>
          <react_native_1.Text>view onboarding</react_native_1.Text>
        </react_native_1.Pressable>);
        case 'quizzer':
            return (<react_native_1.Pressable onPress={function () { return navigateTo('home'); }}>
          <react_native_1.Text>view quizzer</react_native_1.Text>
        </react_native_1.Pressable>);
        default:
            return <react_native_1.Text>view (none selected)</react_native_1.Text>;
    }
};
// -----------------------------------------------------------------------------
var RootView = function (props) {
    var backAction = function () {
        props.navigateBack();
        return true;
    };
    (0, react_1.useEffect)(function () {
        // https://reactnative.dev/docs/backhandler
        var backHandler = react_native_1.BackHandler.addEventListener('hardwareBackPress', backAction);
        return function () { return backHandler.remove(); };
    }, []);
    return (<react_native_1.View style={styles.rootView}>
      <NavText viewName={props.viewName} navigateTo={props.navigateTo}/>
    </react_native_1.View>);
};
// -----------------------------------------------------------------------------
var mapStateToProps = function (state, ownProps) {
    return __assign(__assign({}, ownProps), { viewName: (0, navigation_2.getCurrentViewName)(state) });
};
var mapDispatchToProps = { navigateTo: navigation_1.navigateTo, navigateBack: navigation_1.navigateBack };
var App = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)(RootView);
// -----------------------------------------------------------------------------
var AppRevision = function (_a) {
    var services = _a.services;
    var _b = (0, react_1.useState)(null), store = _b[0], setStore = _b[1];
    (0, react_1.useEffect)(function () {
        var store = (0, configure_store_1["default"])(services);
        setStore(store);
    }, []);
    if (!store)
        return null;
    return (<react_redux_1.Provider store={store}>
      <App />
    </react_redux_1.Provider>);
};
// -----------------------------------------------------------------------------
exports["default"] = AppRevision;
