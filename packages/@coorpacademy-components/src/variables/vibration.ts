export type VibrationType =
  | 'selection'
  | 'impactLight'
  | 'impactMedium'
  | 'impactHeavy'
  | 'notificationSuccess'
  | 'notificationWarning'
  | 'notificationError';

export const VIBRATION_TYPE: {
  [key in
    | 'SELECTION'
    | 'IMPACT_LIGHT'
    | 'IMPACT_MEDIUM'
    | 'IMPACT_HEAVY'
    | 'NOTIFICATION_SUCCESS'
    | 'NOTIFICATION_WARNING'
    | 'NOTIFICATION_ERROR']?: VibrationType;
} = {
  SELECTION: 'selection',
  IMPACT_LIGHT: 'impactLight',
  IMPACT_MEDIUM: 'impactMedium',
  IMPACT_HEAVY: 'impactHeavy',
  NOTIFICATION_SUCCESS: 'notificationSuccess',
  NOTIFICATION_WARNING: 'notificationWarning',
  NOTIFICATION_ERROR: 'notificationError'
};

export type Vibration = {
  VIBRATION_TYPE: typeof VIBRATION_TYPE;
  vibrate: (arg0: VibrationType | void) => void;
};
