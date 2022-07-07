import React, {useEffect} from 'react';
import {Text, StyleSheet, Pressable, View, BackHandler} from 'react-native';
import propTypes, {ViewNames} from './prop-types';
import Slides from './slides';

// -----------------------------------------------------------------------------

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

// -----------------------------------------------------------------------------

const Switch = ({viewName, onboarding, skills, slides, ...dispachers}) => {
  const {navigateTo} = dispachers;
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
      return <Slides {...slides} {...dispachers} />;
    default:
      return <Text>view (none selected)</Text>;
  }
};

// -----------------------------------------------------------------------------

const AppReview = props => {
  const {navigateBack} = props;

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
      <Switch {...props} />
    </View>
  );
};

// -----------------------------------------------------------------------------

AppReview.propTypes = propTypes;
Switch.propTypes = AppReview.propTypes;

// -----------------------------------------------------------------------------

export default AppReview;
