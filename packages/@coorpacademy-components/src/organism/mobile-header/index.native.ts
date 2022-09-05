import * as React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';

import {
  NovaCompositionCoorpacademyClockTime as ClockIcon,
  NovaSolidPlacesPlacesHome2 as HomeIcon,
  NovaCompositionCoorpacademySearch as SearchIcon
} from '@coorpacademy/nova-icons';

import translations from '../../translations';
import blur from '../../assets/images/nav-blur.png';
import {useTemplateContext} from '../../template/app-review/template-context';
import {
  Position,
  FlexDirection,
  JustifyContent,
  AlignSelf,
  Overflow,
  FlexAlignType
} from '../../types/styles';
import {Theme} from '../../variables/theme.native';

export interface Props {
  testID?: string;
  selection: string;
}

export const HOME = 'home';
export const REVISION = 'revision';
export const SEARCH = 'search';

type StyleSheetType = {
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
    fontSize: number;
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
      marginTop: -8
    },
    blur: {
      marginTop: -20,
      width: 50,
      height: 32
    }
  });

interface ButtonProps {
  title: string;
  testID: string;
  selected: boolean;
  Icon: any;
}

const Button = ({testID, title, selected, Icon}: ButtonProps) => (
  <View testID={testID} style={styles.button}>
    <Icon height={16} width={16} color={selected ? theme.colors.cta : theme.colors.text.primary} />
    <Text style={styles.buttonText}>{title}</Text>
    {selected ? <ImageBackground source={blur} style={styles.blur} /> : null}
    {selected ? <View style={styles.dot} /> : null}
  </View>
);

const NavigationBar = ({selection = HOME}: Props) => {
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
    <View style={styles.container}>
      <Button
        title={translations.navigationBar.home}
        Icon={HomeIcon}
        selected={selection === HOME}
        testID="navigationHomeButton"
      />
      <Button
        title={translations.navigationBar.revision}
        Icon={ClockIcon}
        selected={selection === REVISION}
        testID="navigationRevisionButton"
      />
      <Button
        title={translations.navigationBar.search}
        Icon={SearchIcon}
        selected={selection === SEARCH}
        testID="navigationSearchButton"
      />
    </View>
  );
};

export default NavigationBar;
