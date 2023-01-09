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
  main: ViewStyle;
  container: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  dot: ViewStyle;
  blur: ViewStyle;
};

const createStyleSheet = (theme: Theme): StyleSheetType =>
  StyleSheet.create({
    main: {
      marginHorizontal: 20
    },
    container: {
      position: 'absolute',
      bottom: 34,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
      overflow: 'hidden',
      height: 66,
      borderRadius: 12,
      backgroundColor: theme.colors.gray.light
    },
    button: {
      alignItems: 'center',
      flex: 1,
      height: '100%',
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
    blur: {
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
        <BlurredShadow color={theme.colors.cta} style={styles.blur} />
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
    <View style={styleSheet.main}>
      {Platform.OS === 'ios' ? (
        <BlurView
          style={styleSheet.container}
          blurAmount={32}
          reducedTransparencyFallbackColor="rgba(17, 17, 23, 0.5)"
        />
      ) : null}
      <View style={styleSheet.container}>
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
