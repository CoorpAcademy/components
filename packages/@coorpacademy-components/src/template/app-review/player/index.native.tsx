import React, {useEffect, useState} from 'react';
import {ImageBackground, ImageStyle, View, StyleSheet, ViewStyle} from 'react-native';
import StackedSlides from '../../../organism/review-stacked-slides/index.native';
import ReviewCongrats from '../../../organism/review-congrats/index.native';
import ReviewHeader from '../../../organism/review-header/index.native';
import QuitPopinReview from '../../../molecule/cm-popin/index.native';
import {Theme} from '../../../variables/theme.native';
import {useTemplateContext} from '../template-context';
import {ReviewPlayerProps} from './prop-types';

type StyleSheetType = {
  container: ViewStyle;
  imageBackground: ImageStyle;
};

const createStyleSheet = (theme: Theme): StyleSheetType =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: theme.colors.white,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    imageBackground: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      height: '100%'
    }
  });

const Slides = (props: ReviewPlayerProps) => {
  const {congrats, header, stack, quitPopin, backgroundImage} = props;

  const {theme} = useTemplateContext();

  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }

  const source = backgroundImage as number;

  return (
    <View style={styleSheet.container}>
      <ImageBackground style={styleSheet.imageBackground} source={source} resizeMode="cover" />
      <ReviewHeader {...header} />
      {stack ? <StackedSlides {...stack} /> : null}
      {congrats ? <ReviewCongrats {...congrats} /> : null}
      {quitPopin ? <QuitPopinReview {...quitPopin} /> : null}
    </View>
  );
};

export default Slides;
