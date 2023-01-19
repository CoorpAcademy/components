import React, {useState, useEffect, FC} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
  Platform
} from 'react-native';
import {BlurView} from '@react-native-community/blur';

import {NovaCompositionNavigationNavBar as BlurredShadow} from '@coorpacademy/nova-icons';

import {useTemplateContext} from '../../template/app-review/template-context';
import Touchable from '../../hoc/touchable/index.native';
import {Theme} from '../../variables/theme.native';

interface ButtonProps {
  title: string;
  testID: string;
  selected: boolean;
  Icon: FC<{height: number; width: number; color?: string}>;
  styles: StyleSheetType;
  theme: Theme;
  onPress: (event: GestureResponderEvent) => void;
}

export type NavItemType = {
  label: string;
  icon: ButtonProps['Icon'];
  action: (event: GestureResponderEvent) => void;
};

export interface Props {
  testID?: string;
  items: Array<NavItemType>;
  selectedItemIndex: number;
}

type StyleSheetType = {
  container: ViewStyle;
  navbar: ViewStyle;
  blur: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  dot: ViewStyle;
  dotShadow: ViewStyle;
};

const createStyleSheet = (theme: Theme): StyleSheetType =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      paddingTop: 10,
      paddingBottom: 34,
      paddingHorizontal: 20,
      width: '100%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.15,
      shadowRadius: 3,
      elevation: 4
    },
    blur: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    navbar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
      overflow: 'hidden',
      height: 66,
      borderRadius: 12,
      backgroundColor: Platform.OS === 'ios' ? theme.colors.gray.light : '#edededee'
    },
    button: {
      alignItems: 'center',
      flex: 1,
      height: '100%',
      maxWidth: 110,
      marginTop: theme.spacing.small
    },
    buttonText: {
      fontSize: theme.fontSize.small,
      lineHeight: 26,
      // height: 11,
      color: theme.colors.text.primary
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 8,
      backgroundColor: theme.colors.cta,
      marginTop: 3,
      position: 'absolute',
      alignSelf: 'center'
    },
    dotShadow: {
      marginTop: -87,
      width: 200,
      height: 100,
      position: 'absolute',
      alignSelf: 'center',
      transform: [{rotateX: '180deg'}, {scaleX: 0.7}]
    }
  });

const Button = ({testID, title, selected, Icon, styles, theme, onPress}: ButtonProps) => (
  <Touchable testID={testID} style={styles.button} onPress={onPress}>
    <View style={{alignItems: 'center'}}>
      <Icon
        height={16}
        width={16}
        color={selected ? theme.colors.cta : theme.colors.text.primary}
      />
      <Text style={styles.buttonText}>{title}</Text>
    </View>
    {selected ? (
      <View>
        <View style={styles.dot} />
        <BlurredShadow color={theme.colors.cta} style={styles.dotShadow} />
      </View>
    ) : null}
  </Touchable>
);

const NavigationBar = ({items, selectedItemIndex}: Props) => {
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {theme} = templateContext;

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }

  return (
    <View style={styleSheet.container}>
      <View style={styleSheet.navbar}>
        {Platform.OS === 'ios' ? (
          <BlurView style={styleSheet.blur} blurAmount={75} blurType="xlight" />
        ) : null}
        {items.map((prop, index) => {
          const handlePress = prop.action;
          return (
            <Button
              key={`button-${prop.label}`}
              title={prop.label}
              Icon={prop.icon}
              onPress={handlePress}
              selected={index === selectedItemIndex}
              testID={`navigationButton_${index}`}
              styles={styleSheet}
              theme={theme}
            />
          );
        })}
      </View>
    </View>
  );
};

export default NavigationBar;
