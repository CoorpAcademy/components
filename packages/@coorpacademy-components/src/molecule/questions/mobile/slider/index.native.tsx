import React, {useState, useMemo, useCallback} from 'react';
import {View, StyleSheet, ViewStyle, TextStyle} from 'react-native';

import {Theme} from '../../../../variables/theme.native';
import Text from '../../../../atom/text/index.native';
import {useTemplateContext} from '../../../../template/app-review/template-context';
import {Brand} from '../../../../variables/brand.native';
import NativeSlider from '../../../../molecule/native-slider/index.native';

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
  slider: ViewStyle;
};

const createStyleSheet = (brandTheme: Brand, theme: Theme): StyleSheetType =>
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
    slider: {
      height: 68,
      marginVertical: 10
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
  const [value, setValue] = useState<number>(storeValue);

  const styleSheet = useMemo(
    () => createStyleSheet(brandTheme, theme),
    [brandTheme, theme]
  );

  const handleValueChange = useCallback((v: number) => {
    setValue(v);
  }, []);

  const handleSlidingComplete = useCallback(
    (finalValue: number) => {
      setValue(finalValue);
      onSlidingComplete(finalValue);
    },
    [onSlidingComplete]
  );

  const primaryColor = brandTheme?.colors?.primary || '#007AFF';

  const textStyle: TextStyle = {
    ...styleSheet.header,
    color: primaryColor
  };

  return (
    <View style={[styleSheet.container, style]} testID={testID}>
      <Text style={textStyle} testID="slider-value">
        {value}
      </Text>
      <NativeSlider
        min={min}
        max={max}
        value={value}
        step={step || 1}
        activeTrackColor={primaryColor}
        thumbColor={primaryColor}
        onValueChange={handleValueChange}
        onSlidingComplete={handleSlidingComplete}
        style={styleSheet.slider}
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
