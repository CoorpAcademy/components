import React, {useCallback, useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View, ViewStyle} from 'react-native';

import QRCodeScannerBase from 'react-native-qrcode-scanner';
import type {BarCodeReadEvent} from 'react-native-camera';
import {NovaCompositionCoorpacademyQrCode as QrCodeIcon} from '@coorpacademy/nova-icons';
import Touchable from '../../../hoc/touchable/index.native';
import Text from '../../../atom/text/index.native';

export interface Props {
  hasPermission: boolean;
  onScan: (token?: string) => void;
  onHelpPress: () => void;
  locales: {
    title: string;
    explanation1: string;
    explanation2: string;
    ctaHelp: string;
    titleHelp: string;
  };
}

const HEIGHT = 280;
const WIDTH = 280;
const COLOR = '#fff';
const BORDER_RADIUS = 8;

const LINE_WIDTH = 7;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  camera: {
    width: '100%',
    height: '100%'
  },
  blurs: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.6
  },
  blurTop: {
    position: 'absolute',
    backgroundColor: '#000',
    width: '100%',
    height: '35%',
    transform: [{translateY: -HEIGHT / 2 + LINE_WIDTH / 2}]
  },
  blurBottom: {
    position: 'absolute',
    backgroundColor: '#000',
    width: '100%',
    height: '65%',
    bottom: 0,
    transform: [{translateY: HEIGHT / 2 - LINE_WIDTH / 2}]
  },
  blurLeft: {
    position: 'absolute',
    backgroundColor: '#000',
    width: '50%',
    height: HEIGHT - LINE_WIDTH,
    left: 0,
    top: '35%',
    transform: [
      {translateX: -WIDTH / 2 + LINE_WIDTH / 2},
      {translateY: -HEIGHT / 2 + LINE_WIDTH / 2}
    ]
  },
  blurRight: {
    position: 'absolute',
    backgroundColor: '#000',
    width: '50%',
    height: HEIGHT - LINE_WIDTH,
    right: 0,
    top: '35%',
    transform: [
      {translateX: WIDTH / 2 - LINE_WIDTH / 2},
      {translateY: -HEIGHT / 2 + LINE_WIDTH / 2}
    ]
  }
});

const targetStyle = StyleSheet.create({
  target: {
    width: HEIGHT,
    height: WIDTH,
    top: '35%',
    left: '50%',
    transform: [{translateX: -WIDTH / 2}, {translateY: -HEIGHT / 2}],
    borderRadius: BORDER_RADIUS,
    position: 'absolute',
    overflow: 'hidden'
  },
  square: {
    position: 'absolute',
    width: '35%',
    height: '35%'
  },
  stroke: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: COLOR,
    borderRadius: BORDER_RADIUS
  }
});

const explanationsStyle = StyleSheet.create({
  explanations: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 30
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 16
  },
  qrCodeIcon: {
    fill: '#000',
    height: 14,
    width: 14
  },
  titleText: {
    fontWeight: '600',
    color: '#1D1D2B',
    fontSize: 21,
    lineHeight: 24,
    letterSpacing: 0.5,
    marginLeft: 7
  },
  line: {
    flexDirection: 'row',
    paddingRight: 24,
    paddingVertical: 8
  },
  lineText: {
    fontWeight: '400',
    color: '#1D1D2B',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.5,
    marginRight: 7
  },
  help: {
    flexDirection: 'row',
    marginTop: 12
  },
  titleHelp: {
    fontSize: 16,
    color: '#9999A8'
  },
  ctaHelp: {
    marginLeft: 5,
    fontSize: 16,
    letterSpacing: 0.5,
    textDecorationLine: 'underline',
    color: '#9999A8'
  }
});

const Corner = (props: {position: ViewStyle; lineLength: Animated.AnimatedInterpolation}) => {
  const {position, lineLength} = props;

  return (
    <View style={[targetStyle.square, position]}>
      <Animated.View style={[targetStyle.stroke, {height: LINE_WIDTH, width: lineLength}]} />
      <Animated.View style={[targetStyle.stroke, {width: LINE_WIDTH, height: lineLength}]} />
    </View>
  );
};

const Target = () => {
  const animationRef = useRef<Animated.Value>(new Animated.Value(0)).current;
  const lineLength = animationRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, WIDTH * 0.35]
  });

  useEffect(() => {
    const animation = Animated.timing(animationRef, {
      toValue: 1,
      duration: 700,
      delay: 400,
      easing: Easing.out(Easing.sin),
      useNativeDriver: false
    });

    animation.start();
    // on mount only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={targetStyle.target}>
      <Corner lineLength={lineLength} position={{top: 0, left: 0, transform: [{rotate: '0deg'}]}} />
      <Corner
        lineLength={lineLength}
        position={{top: 0, right: 0, transform: [{rotate: '90deg'}]}}
      />
      <Corner
        lineLength={lineLength}
        position={{bottom: 0, right: 0, transform: [{rotate: '180deg'}]}}
      />
      <Corner
        lineLength={lineLength}
        position={{bottom: 0, left: 0, transform: [{rotate: '270deg'}]}}
      />
    </View>
  );
};

const Explanations = (props: {locales: Props['locales']; onHelpPress: Props['onHelpPress']}) => {
  const {locales, onHelpPress} = props;

  const animationRef = useRef<Animated.Value>(new Animated.Value(0)).current;
  const animateBottom = animationRef.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 0]
  });

  useEffect(() => {
    const animation = Animated.timing(animationRef, {
      toValue: 1,
      duration: 600,
      delay: 400,
      easing: Easing.out(Easing.sin),
      useNativeDriver: false
    });

    animation.start();

    // on mount only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View style={[explanationsStyle.explanations, {bottom: animateBottom}]}>
      <View style={explanationsStyle.titleWrapper}>
        <QrCodeIcon style={explanationsStyle.qrCodeIcon} />
        <Text style={explanationsStyle.titleText}>{locales.title}</Text>
      </View>
      <View style={explanationsStyle.line}>
        <Text style={explanationsStyle.lineText}>1.</Text>
        <Text style={explanationsStyle.lineText}>{locales.explanation1}</Text>
      </View>
      <View style={explanationsStyle.line}>
        <Text style={explanationsStyle.lineText}>2.</Text>
        <Text style={explanationsStyle.lineText}>{locales.explanation2}</Text>
      </View>

      <Touchable onPress={onHelpPress} style={explanationsStyle.help}>
        <Text style={explanationsStyle.titleHelp}>{locales.titleHelp}</Text>
        <Text style={explanationsStyle.ctaHelp}>{locales.ctaHelp}</Text>
      </Touchable>
    </Animated.View>
  );
};

const QRCodeScanner = (props: Props) => {
  const {hasPermission, locales, onScan, onHelpPress} = props;

  const handleRead = useCallback(({data}: BarCodeReadEvent) => {
    onScan(typeof data === 'string' ? data : undefined);
    // on mount only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const blurRef = useRef<Animated.Value>(new Animated.Value(0)).current;
  const blurOpacity = blurRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.7]
  });

  useEffect(() => {
    const animation = Animated.timing(blurRef, {
      toValue: 1,
      duration: 800,
      delay: 600,
      easing: Easing.out(Easing.sin),
      useNativeDriver: false
    });

    animation.start();

    // on mount only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container} testID="qr-code-scanner">
      {hasPermission ? (
        <QRCodeScannerBase
          fadeIn={false}
          onRead={handleRead}
          cameraStyle={styles.camera}
          cameraProps={{captureAudio: false}}
        />
      ) : null}
      <Animated.View style={[styles.blurs, {opacity: blurOpacity}]}>
        <View style={styles.blurTop} />
        <View style={styles.blurBottom} />
        <View style={styles.blurLeft} />
        <View style={styles.blurRight} />
      </Animated.View>
      <Target />
      <Explanations locales={locales} onHelpPress={onHelpPress} />
    </View>
  );
};

export default QRCodeScanner;
