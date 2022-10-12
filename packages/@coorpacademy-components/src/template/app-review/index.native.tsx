import React, {useEffect} from 'react';
import {Text, StyleSheet, View, BackHandler} from 'react-native';
import {AppReviewProps} from './prop-types';
import Player from './player';

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Switch = (props: AppReviewProps) => {
  const {viewName} = props;
  switch (viewName) {
    case 'onboarding':
      return <Text>@todo view onboarding</Text>;
    case 'skills':
      return <Text>@todo view skills</Text>;
    case 'slides': {
      const {slides} = props;
      return <Player {...slides} />;
    }
    case 'loader':
      return <Text>@todo loader</Text>;
    default:
      return <Text>unknown viewname: {viewName}</Text>;
  }
};

const AppReview = (props: AppReviewProps) => {
  const {navigateBack} = props;

  useEffect(() => {
    const backAction = () => {
      if (navigateBack) {
        navigateBack();
        return true;
      }
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

export default AppReview;
