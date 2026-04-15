import React, {useRef, useCallback, useMemo} from 'react';
import {View, StyleSheet, PanResponder, Animated, ViewStyle, LayoutChangeEvent} from 'react-native';

const THUMB_SIZE = 28;
const TRACK_HEIGHT = 4;
const HIT_SLOP = 20;

export type NativeSliderProps = {
  min: number;
  max: number;
  value: number;
  step?: number;
  trackColor?: string;
  activeTrackColor?: string;
  thumbColor?: string;
  onValueChange?: (value: number) => void;
  onSlidingStart?: (value: number) => void;
  onSlidingComplete?: (value: number) => void;
  style?: ViewStyle;
  testID?: string;
};

type StyleSheetType = {
  container: ViewStyle;
  track: ViewStyle;
  activeTrack: ViewStyle;
  thumbContainer: ViewStyle;
  thumb: ViewStyle;
  hitArea: ViewStyle;
};

const NativeSlider = (props: NativeSliderProps) => {
  const {
    min,
    max,
    value,
    step = 1,
    trackColor = '#b3b3b3',
    activeTrackColor = '#007AFF',
    thumbColor = '#007AFF',
    onValueChange,
    onSlidingStart,
    onSlidingComplete,
    style,
    testID
  } = props;

  const trackWidth = useRef(0);
  const currentValue = useRef(value);
  const thumbX = useRef(new Animated.Value(0));
  const activeWidth = useRef(new Animated.Value(0));

  const clampAndStep = useCallback(
    (raw: number): number => {
      const clamped = Math.min(max, Math.max(min, raw));
      if (step > 0) {
        return Math.round((clamped - min) / step) * step + min;
      }
      return clamped;
    },
    [min, max, step]
  );

  const valueToPosition = useCallback(
    (v: number): number => {
      if (max === min) return 0;
      return ((v - min) / (max - min)) * trackWidth.current;
    },
    [min, max]
  );

  const positionToValue = useCallback(
    (pos: number): number => {
      if (trackWidth.current === 0) return min;
      const ratio = pos / trackWidth.current;
      return ratio * (max - min) + min;
    },
    [min, max]
  );

  const updatePosition = useCallback(
    (v: number) => {
      const pos = valueToPosition(v);
      thumbX.current.setValue(pos);
      activeWidth.current.setValue(pos);
    },
    [valueToPosition]
  );

  const handleLayout = useCallback(
    (e: LayoutChangeEvent) => {
      trackWidth.current = e.nativeEvent.layout.width;
      updatePosition(currentValue.current);
    },
    [updatePosition]
  );

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (evt) => {
          const touchX = evt.nativeEvent.locationX;
          const raw = positionToValue(touchX);
          const stepped = clampAndStep(raw);
          currentValue.current = stepped;
          updatePosition(stepped);
          onSlidingStart?.(stepped);
          onValueChange?.(stepped);
        },
        onPanResponderMove: (evt) => {
          const touchX = evt.nativeEvent.locationX;
          const raw = positionToValue(Math.max(0, Math.min(touchX, trackWidth.current)));
          const stepped = clampAndStep(raw);
          currentValue.current = stepped;
          updatePosition(stepped);
          onValueChange?.(stepped);
        },
        onPanResponderRelease: (evt) => {
          const touchX = evt.nativeEvent.locationX;
          const raw = positionToValue(Math.max(0, Math.min(touchX, trackWidth.current)));
          const stepped = clampAndStep(raw);
          currentValue.current = stepped;
          updatePosition(stepped);
          onSlidingComplete?.(stepped);
        }
      }),
    [clampAndStep, positionToValue, valueToPosition, updatePosition, onValueChange, onSlidingStart, onSlidingComplete]
  );

  const styles = useMemo(
    (): StyleSheetType =>
      StyleSheet.create({
        container: {
          height: THUMB_SIZE + HIT_SLOP * 2,
          justifyContent: 'center'
        },
        track: {
          height: TRACK_HEIGHT,
          borderRadius: TRACK_HEIGHT / 2,
          backgroundColor: trackColor,
          width: '100%'
        },
        activeTrack: {
          height: TRACK_HEIGHT,
          borderRadius: TRACK_HEIGHT / 2,
          backgroundColor: activeTrackColor,
          position: 'absolute',
          left: 0,
          top: 0
        },
        thumbContainer: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          justifyContent: 'center'
        },
        thumb: {
          width: THUMB_SIZE,
          height: THUMB_SIZE,
          borderRadius: THUMB_SIZE / 2,
          backgroundColor: thumbColor,
          marginLeft: -THUMB_SIZE / 2,
          elevation: 3,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3
        },
        hitArea: {
          position: 'absolute',
          top: -HIT_SLOP,
          bottom: -HIT_SLOP,
          left: 0,
          right: 0
        }
      }),
    [trackColor, activeTrackColor, thumbColor]
  );

  return (
    <View style={[styles.container, style]} testID={testID}>
      <View style={styles.track} onLayout={handleLayout}>
        <Animated.View style={[styles.activeTrack, {width: activeWidth.current}]} />
      </View>
      <Animated.View
        style={[styles.thumbContainer, {transform: [{translateX: thumbX.current}]}]}
      >
        <View style={styles.thumb} />
      </Animated.View>
      <View style={styles.hitArea} {...panResponder.panHandlers} />
    </View>
  );
};

export default NativeSlider;
