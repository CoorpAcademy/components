import React, {useCallback} from 'react';
import {Animated, StyleSheet, View, ViewStyle} from 'react-native';

import QRCodeScannerBase from 'react-native-qrcode-scanner';
import type {BarCodeReadEvent} from 'react-native-camera';

export interface Props {
  hasPermission: boolean;
  onScan: (token?: string) => void;
  testID?: string;
}

const HEIGHT = 280;
const WIDTH = 280;
const COLOR = '#fff';
const BORDER_RADIUS = 8;

const LINE_WIDTH = 8;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
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
    width: '33%',
    height: '33%'
  },
  line1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: COLOR,
    borderRadius: BORDER_RADIUS,
    height: LINE_WIDTH
  },
  line2: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: LINE_WIDTH,
    backgroundColor: COLOR,
    borderRadius: BORDER_RADIUS
  },
  camera: {
    width: '100%',
    height: '100%'
  }
});

const Corner = (props: {position: ViewStyle}) => {
  const {position} = props;

  return (
    <View style={[styles.square, position]}>
      <View style={styles.line1} />
      <View style={styles.line2} />
    </View>
  );
};

const Target = () => (
  <View style={[styles.target]}>
    <Corner position={{top: 0, left: 0, transform: [{rotate: '0deg'}]}} />
    <Corner position={{top: 0, right: 0, transform: [{rotate: '90deg'}]}} />
    <Corner position={{bottom: 0, right: 0, transform: [{rotate: '180deg'}]}} />
    <Corner position={{bottom: 0, left: 0, transform: [{rotate: '270deg'}]}} />
  </View>
);

const QRCodeScanner = (props: Props) => {
  const {hasPermission, onScan} = props;

  const handleRead = useCallback(({data}: BarCodeReadEvent) => {
    onScan(typeof data === 'string' ? data : undefined);
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
      <Target />
    </View>
  );
};

export default QRCodeScanner;
