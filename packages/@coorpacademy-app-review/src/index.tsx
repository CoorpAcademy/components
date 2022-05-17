import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, Pressable, View, BackHandler} from 'react-native';
import {connect, Provider} from 'react-redux';

import configureStore from './configure-store';
import {navigateTo, navigateBack} from './actions/navigation';
import {getCurrentViewName} from './reducers/navigation';

// -----------------------------------------------------------------------------

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

// -----------------------------------------------------------------------------

const NavText = ({viewName, navigateTo}) => {
  switch (viewName) {
    case 'home':
      return (
        <Pressable
          onPress={() => {
            navigateTo('onboarding');
          }}
        >
          <Text>view home</Text>
        </Pressable>
      );
    case 'onboarding':
      return (
        <Pressable onPress={() => navigateTo('quizzer')}>
          <Text>view onboarding</Text>
        </Pressable>
      );
    case 'quizzer':
      return (
        <Pressable onPress={() => navigateTo('home')}>
          <Text>view quizzer</Text>
        </Pressable>
      );
    default:
      return <Text>view (none selected)</Text>;
  }
};

// -----------------------------------------------------------------------------

const RootView = (props) => {
  const backAction = () => {
    props.navigateBack();
    return true;
  };

  useEffect(() => {
    // https://reactnative.dev/docs/backhandler
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.rootView}>
      <NavText viewName={props.viewName} navigateTo={props.navigateTo} />
    </View>
  );
};

// -----------------------------------------------------------------------------

const mapStateToProps = (state, ownProps) => {
  return {...ownProps, viewName: getCurrentViewName(state)};
};

const mapDispatchToProps = {navigateTo, navigateBack};
const App = connect(mapStateToProps, mapDispatchToProps)(RootView);

// -----------------------------------------------------------------------------

const AppRevision = ({services}) => {
  const [store, setStore] = useState(null);

  useEffect(() => {
    const store = configureStore(services);
    setStore(store);
  }, []);

  if (!store) return null;

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

// -----------------------------------------------------------------------------

export default AppRevision;
