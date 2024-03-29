import React, {useState, useEffect} from 'react';
import {View, StyleSheet, GestureResponderEvent, ViewStyle} from 'react-native';

import {
  NovaSolidPlacesPlacesHome2 as HomeIcon,
  NovaSolidStatusClose as CloseIcon
} from '@coorpacademy/nova-icons';
import {useTemplateContext} from '../../template/app-review/template-context';
import Touchable from '../../hoc/touchable/index.native';
import HeaderBackIcon from '../header-back-icon/index.native';
import {Theme} from '../../variables/theme.native';

export const HOME_ICON_HEIGHT = 20;
export const CLOSE_ICON_HEIGHT = 16;
export const BACK_ICON_HEIGHT = 20;

export type Props = {
  type: 'close' | 'back' | 'home';
  color?: string;
  onPress?: (event: GestureResponderEvent) => void;
  isFloating?: boolean;
  noSafeArea?: boolean;
  testID?: string;
};

type StyleSheetType = {
  container: ViewStyle;
  floating: ViewStyle;
  noSafeArea: ViewStyle;
};

const createStyleSheet = (theme: Theme, statusBarHeight: number): StyleSheetType =>
  StyleSheet.create({
    container: {
      paddingLeft: theme.spacing.base
    },
    floating: {
      paddingTop: theme.spacing.base,
      position: 'absolute',
      top: statusBarHeight
    },
    noSafeArea: {
      top: 0
    }
  });

const HeaderBackButton = (props: Props) => {
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {
    theme,
    display: {statusBarHeight}
  } = templateContext;

  const {
    type,
    color = theme.colors.white,
    onPress,
    isFloating = true,
    noSafeArea = false,
    testID = 'default-header-back-button-test-id'
  } = props;

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme, statusBarHeight);
    setStylesheet(_stylesheet);
  }, [theme, statusBarHeight]);

  if (!styleSheet) {
    return null;
  }

  return (
    <View
      style={[
        styleSheet.container,
        isFloating && styleSheet.floating,
        isFloating && noSafeArea && styleSheet.noSafeArea
      ]}
    >
      <Touchable testID={testID} onPress={onPress} analyticsID="button-close">
        {type === 'home' ? (
          <HomeIcon height={HOME_ICON_HEIGHT} width={HOME_ICON_HEIGHT} color={color} />
        ) : null}
        {type === 'close' ? (
          <CloseIcon height={CLOSE_ICON_HEIGHT} width={CLOSE_ICON_HEIGHT} color={color} />
        ) : null}
        {type === 'back' ? (
          <HeaderBackIcon height={BACK_ICON_HEIGHT} width={BACK_ICON_HEIGHT} color={color} />
        ) : null}
      </Touchable>
    </View>
  );
};

export default HeaderBackButton;
