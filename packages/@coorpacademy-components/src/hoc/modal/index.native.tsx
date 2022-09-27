import React, {useState, useEffect} from 'react';
import {GestureResponderEvent, StyleSheet, View, ViewStyle} from 'react-native';
import HeaderBackButton from '../../atom/header-back-button/index.native';
import {useTemplateContext} from '../../template/app-review/template-context';
import {Theme} from '../../variables/theme.native';

export type Props = {
  children: React.ReactNode;
  headerBackgroundColor?: string;
  iconBackgroundColor?: string;
  renderIcon?: React.ReactNode;
  contentStyle?: ViewStyle;
  onClose: (event: GestureResponderEvent) => any;
  testID?: string;
};

export const HEADER_HEIGHT = 64;

type StyleSheetType = {
  container: Pick<ViewStyle, 'borderRadius' | 'overflow' | 'backgroundColor'>;
  header: Pick<
    ViewStyle,
    'alignItems' | 'height' | 'justifyContent' | 'paddingHorizontal' | 'backgroundColor'
  >;
  content: Pick<ViewStyle, 'paddingHorizontal' | 'paddingBottom' | 'alignItems'>;
  contentWithHeader: Pick<ViewStyle, 'paddingTop'>;
  contentWithIcon: Pick<ViewStyle, 'paddingTop'>;
  icon: Pick<ViewStyle, 'marginTop' | 'padding' | 'backgroundColor' | 'borderRadius' | 'alignSelf'>;
  iconContent: Pick<
    ViewStyle,
    'justifyContent' | 'padding' | 'backgroundColor' | 'borderRadius' | 'alignItems'
  >;
};

const createStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      borderRadius: theme.radius.card,
      overflow: 'hidden',
      backgroundColor: theme.colors.white
    },
    header: {
      backgroundColor: theme.colors.white,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingHorizontal: theme.spacing.medium,
      height: HEADER_HEIGHT
    },
    content: {
      paddingHorizontal: theme.spacing.medium,
      paddingBottom: theme.spacing.medium,
      alignItems: 'center'
    },
    contentWithHeader: {
      paddingTop: theme.spacing.medium
    },
    contentWithIcon: {
      paddingTop: theme.spacing.small
    },
    icon: {
      marginTop: -HEADER_HEIGHT * (3 / 4),
      padding: 5,
      backgroundColor: theme.colors.white,
      borderRadius: theme.radius.thumbnail,
      alignSelf: 'center'
    },
    iconContent: {
      backgroundColor: theme.colors.white,
      padding: theme.spacing.small,
      borderRadius: theme.radius.thumbnail,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

const Modal = (props: Props) => {
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {theme} = templateContext;

  const {
    children,
    headerBackgroundColor,
    iconBackgroundColor,
    renderIcon,
    contentStyle,
    onClose,
    testID
  } = props;

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }

  const contentStyles = [styleSheet.content, contentStyle];

  return (
    <View style={styleSheet.container} testID={testID}>
      <View style={[styleSheet.header, {backgroundColor: headerBackgroundColor}]}>
        <HeaderBackButton
          color={theme.colors.gray.dark}
          isFloating={false}
          testID="close-modal"
          onPress={onClose}
          type="close"
        />
      </View>
      {renderIcon ? (
        <View style={styleSheet.icon}>
          <View style={[styleSheet.iconContent, {backgroundColor: iconBackgroundColor}]}>
            {renderIcon}
          </View>
        </View>
      ) : null}
      <View style={contentStyles}>{children}</View>
    </View>
  );
};

export default Modal;
