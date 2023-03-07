import React, {useEffect} from 'react';
import {StyleSheet, View, BackHandler, Animated, Platform} from 'react-native';
import {useAnimateProp, useAnimationWaiter} from '@coorpacademy/react-native-animation';
import Loader from '../../atom/loader/index.native';
import {AppReviewProps} from './prop-types';
import Player from './player/index.native';

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  player: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const AppReview = (props: AppReviewProps) => {
  const {navigateBack, viewName, slides} = props;

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

  const fadePlayerIn = useAnimateProp({
    property: 'opacity',
    fromValue: 0,
    toValue: 1,
    duration: 1250
  });

  const isLoading = viewName === 'loader';
  useAnimationWaiter(isLoading, fadePlayerIn);

  return (
    <View style={styles.rootView}>
      <Animated.View
        style={[styles.player, Platform.OS === 'ios' ? fadePlayerIn.animatedStyle : null]}
      >
        {slides ? (
          <Player
            congrats={slides.congrats}
            header={slides.header}
            stack={slides.stack}
            quitPopin={slides.quitPopin}
            backgroundImage={slides.backgroundImage}
          />
        ) : null}
      </Animated.View>

      <View style={styles.loaderContainer} pointerEvents="none">
        <Loader readyToHide={!isLoading} />
      </View>
    </View>
  );
};

export default AppReview;
