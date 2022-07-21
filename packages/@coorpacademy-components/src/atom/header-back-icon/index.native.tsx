import React from 'react';
import {View, ViewStyle} from 'react-native';
import {NovaCompositionNavigationArrowLeft as BackIcon} from '@coorpacademy/nova-icons';
import {useTemplateContext} from '../../template/app-review/template-context';

export type Props = {
  color?: string;
  height?: number;
  width?: number;
  style?: ViewStyle;
};

const HeaderBackIcon = (props: Props) => {
  const templateContext = useTemplateContext();
  const {theme} = templateContext;

  const {color = theme.colors.gray.dark, height = 16, width = 16, style} = props;

  return (
    <View style={style}>
      <BackIcon color={color} height={height} width={width} />
    </View>
  );
};

export default HeaderBackIcon;
