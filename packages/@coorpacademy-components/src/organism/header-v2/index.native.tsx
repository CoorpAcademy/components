import React, {useState, useEffect} from 'react';
import type {PressEvent} from 'react-native/Libraries/Types/CoreEventTypes';

import {View, StyleSheet} from 'react-native';
import {
  NovaCompositionCoorpacademySearch as SearchIcon,
  NovaCompositionCoorpacademyCog as SettingsIcon
} from '@coorpacademy/nova-icons';
import {useTemplateContext} from '../../template/app-review/template-context';
import BrandLogo from '../../molecule/brand-logo/index.native';
import Gradient from '../../atom/gradient/index.native';
import Touchable from '../../hoc/touchable/index.native';
import {FlexAlignType, FlexDirection, JustifyContent, Position} from '../../types/styles';
import {Theme} from '../../variables/theme.native';

export interface Props {
  onSearchPress: (event: PressEvent) => any;
  onSettingsPress: (event: PressEvent) => any;
  onLogoLongPress: (event: PressEvent) => any;
}

export const HEADER_HEIGHT = 67;
const ICON_WIDTH = 20;

type StyleSheetType = {
  container: {
    position: Position;
    backgroundColor: string;
    flexDirection: FlexDirection;
    alignItems: FlexAlignType;
    justifyContent: JustifyContent;
    height: string | number;
    top: number;
    width: string | number;
  };
  icons: {
    flexDirection: FlexDirection;
  };
  icon: {
    marginRight: number;
  };
  logo: {
    width: number;
    marginLeft: number;
  };
  gradient: {
    position: Position;
    left: number;
    top: number;
    right: number;
    opacity: number;
  };
};

const createStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      backgroundColor: theme.colors.white,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: HEADER_HEIGHT,
      top: 0,
      width: '100%'
    },
    icons: {
      flexDirection: 'row'
    },
    icon: {
      marginRight: 16
    },
    logo: {
      width: 80,
      marginLeft: 16
    },
    gradient: {
      position: 'absolute',
      left: 0,
      top: HEADER_HEIGHT,
      right: 0,
      opacity: 0.3
    }
  });

const Header = (props: Props) => {
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {theme} = templateContext;

  const {onSearchPress, onSettingsPress, onLogoLongPress} = props;
  const logoHeight = HEADER_HEIGHT - theme.spacing.small * 2;

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  // ------------------------------------

  if (!styleSheet) {
    return null;
  }

  return (
    <View style={[styleSheet.container]} testID="header">
      <Gradient
        height={theme.spacing.tiny}
        colors={[theme.colors.gray.medium, theme.colors.gray.light]}
        transparencyPosition="bottom"
        style={styleSheet.gradient}
      />
      <View style={styleSheet.logo}>
        <Touchable
          testID="header-logo"
          onLongPress={onLogoLongPress}
          analyticsID="sign-out"
          isWithoutFeedback
        >
          <BrandLogo height={logoHeight} />
        </Touchable>
      </View>
      <View style={[styleSheet.icons]}>
        <Touchable testID="search-icon" onPress={onSearchPress} analyticsID="search-icon">
          <SearchIcon
            height={ICON_WIDTH}
            width={ICON_WIDTH}
            color={theme.colors.gray.dark}
            style={styleSheet.icon}
          />
        </Touchable>
        <Touchable testID="settings-icon" onPress={onSettingsPress} analyticsID="settings-icon">
          <SettingsIcon
            height={ICON_WIDTH}
            width={ICON_WIDTH}
            color={theme.colors.gray.dark}
            style={styleSheet.icon}
          />
        </Touchable>
      </View>
    </View>
  );
};

export default Header;
