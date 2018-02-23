import React, {Component} from 'react';
import {View, Animated, Easing} from 'react-native';

const styles = StyleSheet.create({
  container: {
    top: 100,
    left: 100,
    width: 60,
    height: 60,
    maxHeight: 60,
    alignContent: 'center',

    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  box: {
    flex: 0,
    justifyContent: 'center',
    width: 30,
    height: 30
  },
  bar: {
    position: 'relative',
    borderRadius: 10,
    borderWidth: 0,
    height: 6
  }
});

const DURATION = 3000;

class Loader extends Component {
  componentWillMount() {
    this._innerLoop = new Animated.Value(0);
    this._outerLoop = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.loop(
      Animated.timing(this._innerLoop, {
        easing: Easing.inOut(Easing.ease),
        toValue: 100,
        duration: DURATION
      })
    ).start();
    Animated.loop(
      Animated.timing(this._outerLoop, {
        easing: Easing.inOut(Easing.ease),
        toValue: 100,
        duration: DURATION * 3
      })
    ).start();
  }

  componentWillUnmount() {
    this._innerLoop.stopAnimation();
    this._outerLoop.stopAnimation();
  }

  render() {
    const interpolatedWidthAnimation = this._innerLoop.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [30, 5, 30]
    });
    const interpolatedRotateAnimation = this._innerLoop.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '360deg']
    });
    const interpolatedScaleAnimation = this._outerLoop.interpolate({
      inputRange: [0, 45, 100, 133, 150, 200, 233, 266, 300],
      outputRange: [0.5, 0.2, 0.5, 0.5, 0.8, 0.5, 0.5, 0.3, 0.5]
    });

    return (
      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              {rotateZ: interpolatedRotateAnimation},
              {scaleX: interpolatedScaleAnimation},
              {scaleY: interpolatedScaleAnimation}
            ]
          }
        ]}
      >
        <View
          style={[
            styles.box,
            {
              transform: [{rotateZ: '45deg'}]
            }
          ]}
        >
          <Animated.View
            style={[
              styles.bar,
              {
                backgroundColor: '#f73f52',
                width: interpolatedWidthAnimation
              }
            ]}
          />
        </View>
        <View
          style={[
            styles.box,
            {
              transform: [{rotateZ: '135deg'}]
            }
          ]}
        >
          <Animated.View
            style={[
              styles.bar,
              {
                backgroundColor: '#3ec483',
                width: interpolatedWidthAnimation
              }
            ]}
          />
        </View>
        <View
          style={[
            styles.box,
            {
              transform: [{rotateZ: '315deg'}]
            }
          ]}
        >
          <Animated.View
            style={[
              styles.bar,
              {
                backgroundColor: '#00b0ff',
                width: interpolatedWidthAnimation
              }
            ]}
          />
        </View>
        <View
          style={[
            styles.box,
            {
              transform: [{rotateZ: '225deg'}]
            }
          ]}
        >
          <Animated.View
            style={[
              styles.bar,
              {
                backgroundColor: '#ffe100',
                width: interpolatedWidthAnimation
              }
            ]}
          />
        </View>
      </Animated.View>
    );
  }
}

export default Loader;
