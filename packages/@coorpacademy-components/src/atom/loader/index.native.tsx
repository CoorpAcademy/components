import {useAnimateProp} from '@coorpacademy/react-native-animation';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, Easing, ViewStyle, ColorValue} from 'react-native';
import {useTemplateContext} from '../../template/app-review/template-context';
import {Theme} from '../../variables/theme.native';

type StyleSheetType = {
  container: ViewStyle;
  dot: ViewStyle;
  blue: ViewStyle;
  red: ViewStyle;
  green: ViewStyle;
  yellow: ViewStyle;
};

const createStyleSheet = (theme: Theme): StyleSheetType =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    dot: {
      position: 'absolute'
    },
    blue: {
      backgroundColor: theme.colors.cta
    },
    red: {
      backgroundColor: theme.colors.negative
    },
    green: {
      backgroundColor: theme.colors.positive
    },
    yellow: {
      backgroundColor: theme.colors.battle
    }
  });

export type Props = {
  color?: ColorValue;
  height?: number;
  readyToHide: boolean;
};

const CYCLE_DURATION = 3000;
const MIN_TIME = 1000;

const Loader = (props: Props) => {
  const templateContext = useTemplateContext();
  const {theme} = templateContext;

  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const [visible, setVisible] = useState<boolean>(true);
  const [minTimeIsSpent, setMinTimeSpent] = useState<boolean>(false);

  const rotation = useRef<Animated.Value>(new Animated.Value(0)).current;
  const scale = useRef<Animated.Value>(new Animated.Value(0)).current;

  const hideAnimation = useAnimateProp({
    property: 'opacity',
    fromValue: 1,
    toValue: 0
  });

  const {height = 60, color, readyToHide} = props;

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  useEffect(() => {
    if (readyToHide && minTimeIsSpent) {
      setVisible(false);
    }
  }, [readyToHide, minTimeIsSpent]);

  useEffect(() => {
    if (!visible) {
      hideAnimation.start();
    }
  }, [visible, hideAnimation]);

  useEffect(() => {
    setTimeout(() => {
      setMinTimeSpent(true);
    }, MIN_TIME);

    const _animation = Animated.parallel([
      Animated.loop(
        Animated.sequence([
          Animated.timing(scale, {toValue: 0, duration: 0, useNativeDriver: false}),
          Animated.timing(scale, {
            toValue: 1,
            duration: CYCLE_DURATION,
            useNativeDriver: false,
            easing: Easing.inOut(Easing.sin)
          }),
          Animated.timing(scale, {
            toValue: 2,
            duration: CYCLE_DURATION,
            useNativeDriver: false,
            easing: Easing.inOut(Easing.sin)
          }),
          Animated.timing(scale, {
            toValue: 3,
            duration: CYCLE_DURATION,
            useNativeDriver: false,
            easing: Easing.inOut(Easing.sin)
          })
        ])
      ),
      Animated.loop(
        Animated.sequence([
          Animated.timing(rotation, {toValue: 0, duration: 0, useNativeDriver: false}),
          Animated.timing(rotation, {
            toValue: 1,
            duration: CYCLE_DURATION,
            useNativeDriver: false,
            easing: Easing.inOut(Easing.sin)
          })
        ])
      )
    ]);

    _animation.start();

    return () => {
      _animation.stop();
    };
    // eslint bad warning --> effect only onmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!styleSheet) {
    return null;
  }

  const interpolatedScale = scale.interpolate({
    inputRange: [0, 0.45, 1, 1.32, 1.5, 2, 2.3, 2.64, 3],
    outputRange: [0.5, 0.2, 0.5, 0.5, 0.8, 0.5, 0.5, 0.3, 0.5]
  });

  const interpolatedRotation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });
  const dotWidth = rotation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [height / 2, height / 6, height / 2]
  });
  const dotTranslate = rotation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [-25 * (height / 60), -35 * (height / 60), -25 * (height / 60)]
  });
  const dotStyle = {
    width: dotWidth,
    height: height / 6,
    borderRadius: height / 12
  };

  return (
    <Animated.View style={hideAnimation.animatedStyle}>
      <Animated.View
        style={[
          styleSheet.container,
          {
            height,
            width: height,
            transform: [
              {scaleX: interpolatedScale},
              {scaleY: interpolatedScale},
              {rotateZ: interpolatedRotation}
            ]
          }
        ]}
      >
        <Animated.View
          style={[
            styleSheet.dot,
            color ? {backgroundColor: color} : styleSheet.red,
            dotStyle,
            {transform: [{rotateZ: '45deg'}, {translateX: dotTranslate}]}
          ]}
        />
        <Animated.View
          style={[
            styleSheet.dot,
            color ? {backgroundColor: color} : styleSheet.green,
            dotStyle,
            {transform: [{rotateZ: '135deg'}, {translateX: dotTranslate}]}
          ]}
        />
        <Animated.View
          style={[
            styleSheet.dot,
            color ? {backgroundColor: color} : styleSheet.yellow,
            dotStyle,
            {transform: [{rotateZ: '225deg'}, {translateX: dotTranslate}]}
          ]}
        />
        <Animated.View
          style={[
            styleSheet.dot,
            color ? {backgroundColor: color} : styleSheet.blue,
            dotStyle,
            {transform: [{rotateZ: '315deg'}, {translateX: dotTranslate}]}
          ]}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default Loader;
