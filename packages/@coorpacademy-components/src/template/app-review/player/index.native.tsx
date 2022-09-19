import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import StackedSlides from '../../../organism/review-stacked-slides/index.native';
import {Theme} from '../../../variables/theme.native';
import {useTemplateContext} from '../template-context';
import {Props} from './prop-types';

const createStyleSheet = (theme: Theme, headerHeight: number) =>
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

const ReviewHeader = ({style}) => (
  <View {...style}>
    <Text>review header @todo</Text>
  </View>
);

const Slides = (props: Props) => {
  const {header, stack, reviewBackgroundAriaLabel, congratsProps} = props;

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
