import React, {useEffect} from 'react';
import {Text, StyleSheet, View, BackHandler} from 'react-native';
import propTypes, {ViewNames} from './prop-types';
import Player from './player';

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Switch = ({viewName, onboarding, skills, slides, ...dispachers}) => {
  switch (viewName) {
    case ViewNames.home:
      return <Text>view home</Text>;
    case ViewNames.onboarding:
      return <Text>view onboarding</Text>;
    case ViewNames.slides:
      return <Player {...slides} {...dispachers} />;
    default:
      return <Text>view (none selected)</Text>;
  }
};

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

AppReview.propTypes = propTypes;
Switch.propTypes = AppReview.propTypes;

export default AppReview;
