import {ColorValue, ViewStyle} from 'react-native';

export type CardCongratsProps = {
  animationUri: string | null;
  Icon: React.FC<{style: ViewStyle; color: ColorValue}>;
  value: string;
  text: string;
  iconColor: ColorValue;
  textColor: ColorValue;
  direction: ViewStyle['flexDirection'];
};
