import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, ViewStyle} from 'react-native';
import StackedSlides from '../../../organism/review-stacked-slides/index.native';
import {Theme} from '../../../variables/theme.native';
import {useTemplateContext} from '../template-context';
import {Props} from './prop-types';

type StyleSheetType = {
  container: ViewStyle;
  header: ViewStyle;
};

const createStyleSheet = (theme: Theme, headerHeight: number): StyleSheetType =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: headerHeight,
      backgroundColor: theme.colors.white,
      // justifyContent: 'space-between',
      alignItems: 'center'
    },
    header: {
      width: '100%',
      backgroundColor: '#ded',
      height: 70
    }
  });

type ReviewHeaderProps = {style: ViewStyle};

const ReviewHeader = ({style}: ReviewHeaderProps) => (
  <View {...style}>
    <Text>review header @todo</Text>
  </View>
);

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
      <ReviewHeader style={styleSheet.header} />
      {stack ? <StackedSlides {...stack} /> : null}
    </View>
  );
};

export default Slides;
