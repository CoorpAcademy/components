import {TouchableOpacity, TouchableHighlight, ViewStyle} from 'react-native';
import type {
  BlurEvent,
  LayoutEvent,
  FocusEvent,
  PressEvent
} from 'react-native/Libraries/Types/CoreEventTypes';

import React, {useMemo} from 'react';
import {useTemplateContext} from '../../template/app-review/template-context';
import {ANALYTICS_EVENT_TYPE, Analytics, AnalyticsEventParams} from '../../variables/analytics';

interface Props {
  accessible?: boolean;
  children?: React.ReactNode;
  delayLongPress?: number;
  delayPressIn?: number;
  delayPressOut?: number;
  disabled?: boolean;
  focusable?: boolean;
  hitSlop?: number /* TODO: fix type EdgeInsetsProp,*/;
  onBlur?: (event: BlurEvent) => any;
  onFocus?: (event: FocusEvent) => any;
  onLayout?: (event: LayoutEvent) => any;
  onLongPress?: (event: PressEvent) => any;
  onPress?: (event: PressEvent) => any;
  onPressIn?: (event: PressEvent) => any;
  onPressOut?: (event: PressEvent) => any;
  testID?: string;
  isHighlight?: boolean;
  isWithoutFeedback?: boolean;
  // for TouchableOpacity
  activeOpacity?: number;
  style?: ViewStyle;
  // Analytics
  analyticsID: string;
  analyticsParams?: AnalyticsEventParams;
  analytics: Analytics;
  vibration: any;
}

const logEvent = (
  eventName: string,
  analyticsID: String,
  analytics: Analytics,
  analyticsParams: AnalyticsEventParams | undefined
) => {
  analytics &&
    analytics.logEvent(eventName, {
      ...(analyticsParams || {}),
      id: analyticsID
    });
};

const Touchable = (props: Props) => {
  const templateContext = useTemplateContext();
  const {theme} = templateContext;

  const {
    /* only used by this component */
    /* eslint-disable no-unused-vars */
    vibration,
    analytics,
    analyticsID,
    analyticsParams,
    onPress,
    onLongPress,
    /* eslint-enable no-unused-vars */
    isWithoutFeedback,
    isHighlight,
    activeOpacity,
    disabled,
    ...props
  } = props;

  const handlePress = useMemo(
    () => (event: PressEvent) => {
      if (!onPress) return;

      vibration.vibrate();

      analytics && logEvent(ANALYTICS_EVENT_TYPE.PRESS, analyticsID, analytics, analyticsParams);
      onPress(event);
    },
    [analytics, analyticsID, analyticsParams, onPress, vibration]
  );

  const handleLongPress = useMemo(
    () => (event: PressEvent) => {
      if (!onLongPress) return;

      vibration.vibrate();

      analytics &&
        logEvent(ANALYTICS_EVENT_TYPE.INPUT_FOCUS, analyticsID, analytics, analyticsParams);
      onLongPress(event);
    },
    [analytics, analyticsID, analyticsParams, onLongPress, vibration]
  );

  if (isHighlight) {
    return (
      <TouchableHighlight
        {...props}
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
      onPress={handlePress}
      onLongPress={handleLongPress}
      activeOpacity={(isWithoutFeedback && 1) || activeOpacity || (disabled ? 1 : 0.2)}
    />
  );
};

export default Touchable;
