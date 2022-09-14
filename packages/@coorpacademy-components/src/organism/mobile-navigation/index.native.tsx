import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {BlurView} from '@react-native-community/blur';

import {NovaCompositionNavigationNavBar as BlurredShadow} from '@coorpacademy/nova-icons';

import {useTemplateContext} from '../../template/app-review/template-context';
import {
  Position,
  FlexDirection,
  JustifyContent,
  AlignSelf,
  Overflow,
  FlexAlignType,
  FontSize
} from '../../types/styles';
import {Theme} from '../../variables/theme.native';

export type NavItemType = {
  label: string;
  icon: any;
  onPress: () => void;
};

export interface Props {
  testID?: string;
  items: Array<NavItemType>;
  selectedItemIndex: number;
}

type StyleSheetType = {
  main: {
    marginHorizontal: number;
  };
  container: {
    position: Position;
    bottom: number;
    width: string;
    flexDirection: FlexDirection;
    justifyContent: JustifyContent;
    alignSelf: AlignSelf;
    overflow: Overflow;
    height: number;
    borderRadius: number;
    backgroundColor: string;
  };
  button: {
    alignItems: FlexAlignType;
    flex: number;
    height: string;
    marginTop: number;
  };
  buttonText: {
    fontSize: FontSize;
    lineHeight: number;
    color: string;
  };

  dot: {
    width: number;
    height: number;
    borderRadius: number;
    backgroundColor: string;
    marginTop: number;
  };
  blur: {
    marginTop: number;
    width: number;
    height: number;
  };
};

const createStyleSheet = (theme: Theme) =>
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

interface ButtonProps {
  title: string;
  testID: string;
  selected: boolean;
  Icon: any;
  styles: StyleSheetType;
  theme: Theme;
}

const Button = ({testID, title, selected, Icon, styles, theme}: ButtonProps) => (
  <View testID={testID} style={styles.button}>
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
  </View>
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
      <BlurView
        style={styleSheet.container}
        blurAmount={32}
        reducedTransparencyFallbackColor="rgba(17, 17, 23, 0.5)"
      />
      <View style={styleSheet.container}>
        {items.map((prop, index) => (
          <Button
            key={`button-${prop.label}`}
            title={prop.label}
            Icon={prop.icon}
            selected={index === selectedItemIndex}
            testID={`navigationButton_${index}`}
            styles={styleSheet}
            theme={theme}
          />
        ))}
      </View>
    </View>
  );
};

export default NavigationBar;
