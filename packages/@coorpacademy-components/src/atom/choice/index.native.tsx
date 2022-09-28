import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ViewStyle, Text, TextStyle} from 'react-native';
import type {Media, QuestionType} from '../../molecule/questions/types';

import ImageBackground from '../image-background/index.native';
import getCleanUri from '../../util/get-clean-uri';
import Touchable from '../../hoc/touchable/index.native';
import {useTemplateContext} from '../../template/app-review/template-context';
import {Theme} from '../../variables/theme.native';

export type Props = {
  isSelected?: boolean;
  onPress: () => void;
  children?: string;
  isDisabled?: boolean;
  testID?: string;
  media?: Media;
  squeezed?: boolean;
  style?: ViewStyle;
  questionType: QuestionType;
};

type StyleSheetType = {
  boxShadow: ViewStyle;
  container: ViewStyle;
  text: TextStyle;
  textSelected: TextStyle;
  textContainer: ViewStyle;
  squeezedTextContainer: ViewStyle;
  unselectedImageContainer: ViewStyle;
  imageContainer: ViewStyle;
  image: ViewStyle;
};

const createStyleSheet = (theme: Theme, squeezed: boolean): StyleSheetType =>
  StyleSheet.create({
    boxShadow: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.12,
      shadowRadius: 16,
      elevation: 8,
      backgroundColor: '#0000'
    },
    container: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.radius.regular,
      flexDirection: 'row',
      alignItems: 'stretch'
    },
    textContainer: {
      paddingHorizontal: 24,
      paddingVertical: 12,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    },
    squeezedTextContainer: {
      padding: theme.spacing.small,
      paddingLeft: undefined,
      paddingVertical: undefined,
      paddingRight: undefined,
      flex: 0
    },
    text: {
      fontSize: squeezed ? theme.fontSize.medium : theme.fontSize.regular,
      fontWeight: theme.fontWeight.bold,
      color: theme.colors.black,
      textAlign: 'center'
    },
    textSelected: {
      color: theme.colors.white
    },
    unselectedImageContainer: {
      borderRightColor: theme.colors.border
    },
    imageContainer: {
      height: '100%',
      width: '25%',
      overflow: 'hidden',
      borderTopLeftRadius: theme.radius.regular,
      borderBottomLeftRadius: theme.radius.regular
    },
    image: {
      flex: 1
    }
  });

const Choice = ({
  children,
  isSelected = false,
  squeezed = false,
  isDisabled,
  onPress,
  media,
  testID: prefixTestID,
  style,
  questionType
}: Props) => {
  const templateContext = useTemplateContext();
  const {theme, brandTheme} = templateContext;

  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme, squeezed);
    setStylesheet(_stylesheet);
  }, [theme, squeezed]);

  if (!styleSheet) {
    return null;
  }

  const selectedSuffix = prefixTestID && isSelected ? '-selected' : '';
  const mediaType = media && media.type && media.type === 'img' && media.type.toLowerCase();
  const url =
    media &&
    media.type === 'img' &&
    media.src &&
    media.src.length > 0 &&
    getCleanUri(media.src[0].url);

  const source = {uri: url ? getCleanUri(url) : undefined};
  const mediaSuffix = prefixTestID && mediaType ? `-${mediaType}` : '';

  const textStyle: TextStyle[] = [styleSheet.text];
  const textWrapperStyle: ViewStyle[] = [styleSheet.textContainer];

  if (squeezed) {
    textWrapperStyle.push(styleSheet.squeezedTextContainer);
  }

  if (isSelected) {
    textStyle.push(styleSheet.textSelected);

    const selectionStyle = brandTheme && {
      backgroundColor: brandTheme.colors.primary,
      borderColor: brandTheme.colors.primary,
      ...(url
        ? {
            borderTopRightRadius: theme.radius.regular,
            borderBottomRightRadius: theme.radius.regular
          }
        : {
            borderRadius: theme.radius.regular
          })
    };

    textWrapperStyle.push(selectionStyle);
  }

  return (
    <Touchable
      onPress={!isDisabled ? onPress : undefined}
      style={style}
      analyticsID="question-choice"
      analyticsParams={{questionType}}
    >
      <View
        style={[styleSheet.boxShadow, styleSheet.container]}
        testID={prefixTestID && `${prefixTestID}${selectedSuffix}`}
      >
        {url ? (
          <View style={styleSheet.imageContainer}>
            <ImageBackground
              testID={prefixTestID && `${prefixTestID}${mediaSuffix}`}
              source={source}
              style={styleSheet.image}
            />
          </View>
        ) : null}

        {children ? (
          <View style={textWrapperStyle}>
            <Text style={textStyle}>{children}</Text>
          </View>
        ) : null}
      </View>
    </Touchable>
  );
};

export default Choice;
