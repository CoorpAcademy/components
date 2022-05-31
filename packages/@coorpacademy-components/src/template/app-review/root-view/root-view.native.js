import React, {useEffect} from 'react';
import {Text, StyleSheet, Pressable, View, BackHandler} from 'react-native';
import propTypes from './prop-types';
import {ViewNames} from './common';

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
  const handlePress = v => () => navigateTo(v);

  switch (viewName) {
    case ViewNames.home:
      return (
        <Pressable onPress={handlePress('onboarding')}>
          <Text>view home</Text>
        </Pressable>
      );
    case ViewNames.onboarding:
      return (
        <Pressable onPress={handlePress('quizzer')}>
          <Text>view onboarding</Text>
        </Pressable>
      );
    case ViewNames.slides:
      return (
        <Pressable onPress={handlePress('home')}>
          <Text>view quizzer</Text>
        </Pressable>
      );
    default:
      return <Text>view (none selected)</Text>;
  }
};

// -----------------------------------------------------------------------------

const RootView = ({viewName, navigateBack, navigateTo}) => {
  useEffect(() => {
    const backAction = () => {
      navigateBack();
      return true;
    };

    // https://reactnative.dev/docs/backhandler
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [navigateBack]);

  return (
    <View style={styles.rootView}>
      <NavText viewName={viewName} navigateTo={navigateTo} />
    </View>
  );
};

// -----------------------------------------------------------------------------

RootView.propTypes = propTypes;
NavText.propTypes = RootView.propTypes;

// -----------------------------------------------------------------------------

export default RootView;
