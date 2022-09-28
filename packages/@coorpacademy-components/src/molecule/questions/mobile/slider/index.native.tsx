import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import Slider from '@coorpacademy/react-native-slider';

import {Theme} from '../../../../variables/theme.native';
import Text from '../../../../atom/text/index.native';
import {useTemplateContext} from '../../../../template/app-review/template-context';
import {BOX_STYLE} from '../../../../variables/shadow';

export type OnSlidingCompleteFunction = (value: number) => void;

export type Props = {
  min: number;
  max: number;
  value?: number;
  unit?: string;
  onSlidingComplete: OnSlidingCompleteFunction;
  style?: ViewStyle;
  step?: number;
  testID?: string;
};

type StyleSheetType = {
  container: ViewStyle;
  header: TextStyle;
  textValue: TextStyle;
  valuesContainer: ViewStyle;
  leftValue: ViewStyle;
  rightValue: ViewStyle;
  track: ViewStyle;
  thumb: ViewStyle;
};

const createStyleSheet = (theme: Theme): StyleSheetType =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    header: {
      fontSize: 25,
      fontWeight: theme.fontWeight.bold,
      textAlign: 'center'
    },
    textValue: {
      fontSize: 15,
      color: theme.colors.black,
      fontWeight: theme.fontWeight.bold,
      textAlign: 'center'
    },
    valuesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    leftValue: {
      flex: 1,
      alignItems: 'flex-start'
    },
    rightValue: {
      flex: 1,
      alignItems: 'flex-end'
    },
    track: {
      height: 10,
      borderRadius: theme.radius.button
    },
    thumb: {
      ...BOX_STYLE,
      width: 30,
      height: 30,
      borderRadius: 30 / 2,
      backgroundColor: 'white',
      borderWidth: 1
    }
  });

const QuestionSlider = (props: Props) => {
  const {
    step,
    style,
    min,
    max,
    unit = '',
    value: storeValue = 0,
    onSlidingComplete,
    testID
  } = props;
  const templateContext = useTemplateContext();
  const {brandTheme, theme} = templateContext;
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const [value, setValue] = useState<number>(storeValue);

  const handleSlidingComplete = useCallback(() => {
    onSlidingComplete(value);
  }, [onSlidingComplete, value]);

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }

  return (
    <View style={[styleSheet.container, style]} testID={testID}>
      <Text style={[styleSheet.header, {color: brandTheme?.colors.primary}]} testID="slider-value">
        {value}
      </Text>
      <Slider
        step={step || 1}
        value={value}
        onValueChange={setValue}
        maximumValue={max}
        minimumValue={min}
        onSlidingComplete={handleSlidingComplete}
        minimumTrackTintColor={brandTheme?.colors.primary}
        trackStyle={styleSheet.track}
        thumbStyle={[styleSheet.thumb, {borderColor: brandTheme?.colors.primary}]}
        testID="slider"
      />
      <View style={styleSheet.valuesContainer} testID="slider-values-container">
        <View style={styleSheet.leftValue}>
          <Text style={styleSheet.textValue} testID="slider-min-value">
            {`${min} ${unit}`}
          </Text>
        </View>
        <View style={styleSheet.rightValue}>
          <Text style={styleSheet.textValue} testID="slider-max-value">
            {`${max} ${unit}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default QuestionSlider;
