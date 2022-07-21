export const ANALYTICS_EVENT_TYPE = {
  PRESS: 'press',
  SWIPE: 'swipe',
  LONG_PRESS: 'longPress',
  SLIDE: 'slide',
  MEDIA_VIEWED: 'mediaViewed',
  START_PROGRESSION: 'startProgression',
  OPEN_SELECT: 'openSelect',
  CLOSE_SELECT: 'closeSelect',
  INPUT_BLUR: 'inputBlur',
  INPUT_FOCUS: 'inputFocus',
  FINISH_PROGRESSION: 'finishProgression',
  SIGN_IN: 'signIn',
  SIGN_OUT: 'signOut',
  NAVIGATE: 'navigate',
  VALIDATE_ANSWER: 'validateAnswer',
  PERMISSION: 'permission',
  NOTIFICATIONS_MAYBE_LATER: 'notificationsMaybeLater',
  NOTIFICATIONS_YES_NOTIFY_ME: 'notificationsYesNotifyMe',
  NOTIFICATIONS: 'notifications'
};

export type Analytics = {
  logEvent: Function;
};

export type AnalyticsEventParams = {
  [key: string]: string | number;
};
