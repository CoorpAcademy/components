import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import StackedSlides from '../../../organism/review-stacked-slides/index.native';
import ReviewHeader from '../../../organism/review-header/index.native';
import {Theme} from '../../../variables/theme.native';
import {useTemplateContext} from '../template-context';
import {Props} from './prop-types';

type StyleSheetType = {
  container: ViewStyle;
};

const createStyleSheet = (theme: Theme, headerHeight: number): StyleSheetType =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      // paddingTop: headerHeight, // @todo toggle when header is visible
      backgroundColor: theme.colors.white,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  });

const Slides = (props: Props) => {
  const {header, stack, reviewBackgroundAriaLabel, congrats, quitPopin} = props;

  const {
    theme,
    display: {headerHeight}
  } = useTemplateContext();

  const [styleSheet, setStylesheet] = useState<any | null>(null);

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme, headerHeight);
    setStylesheet(_stylesheet);
  }, [theme, headerHeight]);

  if (!styleSheet) {
    return null;
  }

  return (
    <View style={styleSheet.container}>
      <ReviewHeader {...header} />
      {stack ? <StackedSlides {...stack} /> : null}
    </View>
  );
};

export default Slides;
