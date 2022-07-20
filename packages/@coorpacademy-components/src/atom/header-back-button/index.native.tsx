import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  NovaSolidPlacesPlacesHome2 as HomeIcon,
  NovaSolidStatusClose as CloseIcon
} from '@coorpacademy/nova-icons';
import {useTemplateContext} from '../../template/app-review/template-context';
import Touchable from '../../hoc/touchable';
import HeaderBackIcon from '../header-back-icon';

export const HOME_ICON_HEIGHT = 20;
export const CLOSE_ICON_HEIGHT = 16;
export const BACK_ICON_HEIGHT = 20;

interface Props {
  type: 'close' | 'back' | 'home';
  color?: string;
  onPress: () => void;
  isFloating?: boolean;
  noSafeArea?: boolean;
  testID: string;
}

type StyleSheetType = {
  container: {
    paddingLeft: number;
  };
  floating: {
    paddingTop: number;
    position: string;
    top: number;
  };
  noSafeArea: {
    top: 0;
  };
};

const createStyleSheet = (brandTheme, theme, getStatusBarHeight) =>
  StyleSheet.create({
    container: {
      paddingLeft: theme.spacing.base
    },
    floating: {
      paddingTop: theme.spacing.base,
      position: 'absolute',
      top: getStatusBarHeight()
    },
    noSafeArea: {
      top: 0
    }
  });

const HeaderBackButton = (props: Props) => {
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {brandTheme, theme, getHitSlop, getStatusBarHeight} = templateContext;

  const {
    type,
    color = theme.colors.white,
    onPress,
    isFloating = true,
    noSafeArea = false,
    testID
  } = props;

  useEffect(() => {
    const _stylesheet = createStyleSheet(brandTheme, theme, getStatusBarHeight);
    setStylesheet(_stylesheet);
  }, [brandTheme, theme, getStatusBarHeight]);

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
      <Touchable
        testID={testID}
        onPress={onPress}
        hitSlop={getHitSlop && getHitSlop()}
        analyticsID="button-close"
      >
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

