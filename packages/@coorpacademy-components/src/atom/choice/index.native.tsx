import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import type {Media, QuestionType} from '../../types/progression-engine';

import Html from '../html/index.native';
import {getCleanUri} from '../../util/get-clean-uri';
import ImageBackground from '../../app-shared/components/image-background';
import Touchable from '../../hoc/touchable/index.native';
import {useTemplateContext} from '../../template/app-review/template-context';
import {Theme} from '../../variables/theme.native';

export type Props = {
  isSelected?: boolean;
  onPress: () => void;
  children: string;
  isDisabled?: boolean;
  testID?: string;
  media?: Media;
  squeezed?: boolean;
  style?: ViewStyle;
  questionType: QuestionType;
};

type StyleSheetType = {
  boxShadow: any;
  container: any;
  text: any;
  textSelected: any;
  textContainer: any;
  squeezedTextContainer: any;
  unselectedImageContainer: any;
  imageContainer: any;
  image: any;
};

const createStyleSheet = (theme: Theme): StyleSheetType =>
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
      minHeight: 80,
      backgroundColor: theme.colors.white,
      borderRadius: theme.radius.regular,
      overflow: 'hidden',
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
      fontWeight: theme.fontWeight.bold,
      color: theme.colors.black
    },
    textSelected: {
      color: theme.colors.white
    },
    unselectedImageContainer: {
      borderRightColor: theme.colors.border
    },
    imageContainer: {
      height: '100%',
      width: '25%'
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
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }

  const selectedStyle = brandTheme && {
    backgroundColor: brandTheme.colors.primary,
    borderColor: brandTheme.colors.primary,
    borderRadius: theme.radius.common
  };

  const selectedSuffix = prefixTestID && isSelected ? '-selected' : '';
  const mediaType = media && media.type && media.type === 'img' && media.type.toLowerCase();
  const url =
    media &&
    media.type === 'img' &&
    media.src &&
    media.src.length > 0 &&
    getCleanUri(media.src[0].url);

  const source = {uri: url && getCleanUri(url)};
  const mediaSuffix = prefixTestID && mediaType ? `-${mediaType}` : '';

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
        <View
          style={[
            styleSheet.textContainer,
            squeezed && styleSheet.squeezedTextContainer,
            isSelected && selectedStyle
          ]}
        >
          <Html
            fontSize={squeezed ? theme.fontSize.medium : theme.fontSize.regular}
            style={[styleSheet.text, isSelected && styleSheet.textSelected]}
          >
            {children}
          </Html>
        </View>
      </View>
    </Touchable>
  );
};

export default Choice;
