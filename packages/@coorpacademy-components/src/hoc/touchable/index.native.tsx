import {
  TouchableOpacity,
  TouchableHighlight,
  ViewStyle,
  LayoutChangeEvent,
  NativeSyntheticEvent,
  GestureResponderEvent,
  TargetedEvent
} from 'react-native';

import React, {useMemo} from 'react';
import {useTemplateContext} from '../../template/app-review/template-context';
import {ANALYTICS_EVENT_TYPE, Analytics, AnalyticsEventParams} from '../../variables/analytics';
import {Vibration} from '../../variables/vibration';

const hitSlop = {
  left: 12,
  right: 12,
  bottom: 12,
  top: 12
};

export type Props = {
  accessible?: boolean;
  children?: React.ReactNode;
  delayLongPress?: number;
  delayPressIn?: number;
  delayPressOut?: number;
  disabled?: boolean;
  focusable?: boolean;
  onBlur?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  onFocus?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  onLayout?: (event: LayoutChangeEvent) => any;
  onLongPress?: (event: GestureResponderEvent) => any;
  onPress?: (event: GestureResponderEvent) => any;
  onPressIn?: (event: GestureResponderEvent) => any;
  onPressOut?: (event: GestureResponderEvent) => any;
  testID?: string;
  isHighlight?: boolean;
  isWithoutFeedback?: boolean;
  // for TouchableOpacity
  activeOpacity?: number;
  style?: ViewStyle;
  // Analytics
  analytics?: Analytics;
  analyticsID?: string;
  analyticsParams?: AnalyticsEventParams;
  vibration?: Vibration;
};

const logEvent = (
  eventName: string,
  analyticsID: String,
  analytics: Analytics,
  analyticsParams?: AnalyticsEventParams
) => {
  analytics &&
    analytics.logEvent(eventName, {
      ...(analyticsParams || {}),
      id: analyticsID
    });
};

const Touchable = (props: Props) => {
  const templateContext = useTemplateContext();

  const {theme, vibration, analytics} = templateContext;

  const {
    analyticsID,
    analyticsParams,
    onPress,
    onLongPress,
    isWithoutFeedback,
    isHighlight,
    activeOpacity,
    disabled
  } = props;

  const handlePress = useMemo(
    () => (event: GestureResponderEvent) => {
      if (!onPress) return;

      vibration?.vibrate();

      analytics &&
        analyticsID &&
        logEvent(ANALYTICS_EVENT_TYPE.PRESS, analyticsID, analytics, analyticsParams);
      onPress(event);
    },
    [analytics, analyticsID, analyticsParams, onPress, vibration]
  );

  const handleLongPress = useMemo(
    () => (event: GestureResponderEvent) => {
      if (!onLongPress) return;

      vibration?.vibrate();

      analytics &&
        analyticsID &&
        logEvent(ANALYTICS_EVENT_TYPE.LONG_PRESS, analyticsID, analytics, analyticsParams);
      onLongPress(event);
    },
    [analytics, analyticsID, analyticsParams, onLongPress, vibration]
  );

  if (isHighlight) {
    return (
      <TouchableHighlight
        {...props}
        hitSlop={hitSlop}
        underlayColor={theme.colors.gray.light}
        onPress={handlePress}
        onLongPress={handleLongPress}
        activeOpacity={activeOpacity || (disabled ? 1 : 0.85)}
      />
    );
  }

  return (
    <TouchableOpacity
      {...props}
      hitSlop={hitSlop}
      onPress={handlePress}
      onLongPress={handleLongPress}
      activeOpacity={(isWithoutFeedback && 1) || activeOpacity || (disabled ? 1 : 0.2)}
    />
  );
};

export default Touchable;
