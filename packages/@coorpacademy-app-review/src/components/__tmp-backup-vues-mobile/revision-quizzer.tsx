import * as React from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';

// import theme from '../../../modules/theme';
// import translations from '../../../translations';
// import {BrandThemeContext} from '../../../app-shared/components/brand-theme-provider';
// import Button from '../../../app-shared/components/button';
// import {HEADER_HEIGHT} from '../../../app-shared/components/header-v2';

export type _Choice_ = {
  text?: string;
  selected: boolean;
};

export type _Slide_ = {
  category: string;
  question: string;
  instruction: string;
  type: 'multiSelection' | 'singleSelection' | 'trueOrFalse';
  choices?: _Choice_[];
};

interface Props {
  slide: _Slide_;
  num: number;
}

const quizzerStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // paddingTop: HEADER_HEIGHT + 20,      @todo with props
    // backgroundColor: theme.colors.white, @todo with props
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

const SLIDE_HEIGHT = () => useWindowDimensions().height * 0.75;

const creatSlideStyle = (num: number) =>
  StyleSheet.create({
    slide: {
      position: 'absolute',
      // backgroundColor: theme.colors.white, @todo with props
      top: useWindowDimensions().height / 2 - SLIDE_HEIGHT() / 2 - num * 4,
      flex: 1,
      height: SLIDE_HEIGHT(),
      width: useWindowDimensions().width - 40 - num * 8,
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 25,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: -1},
      shadowOpacity: 0.05,
      shadowRadius: 16,
      elevation: 10 - num * 1,
      borderRadius: 16
    },
    category: {
      fontSize: 12,
      lineHeight: 16,
      // color: theme.colors.text.primary, @todo with props
      // marginBottom: theme.spacing.tiny, @todo with props
      // marginTop: theme.spacing.small,   @todo with props
      textAlign: 'center'
    },
    question: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: '700',
      // color: theme.colors.text.primary, @todo with props
      textAlign: 'center'
    },
    instruction: {
      fontSize: 12,
      lineHeight: 16,
      // color: theme.colors.gray.medium,  @todo with props
      // marginBottom: theme.spacing.base, @todo with props
      // marginTop: theme.spacing.small,   @todo with props
      textAlign: 'center'
    },
    button: {
      width: 287,
      height: 52,
      borderRadius: 7
      // marginTop: theme.spacing.base  @todo with props
    }
  });

const createOptionStyle = (selected: boolean) => {
  // const brandTheme = React.useContext(BrandThemeContext); @todo with props

  return StyleSheet.create({
    box: {
      width: '100%',
      // https://stackoverflow.com/a/66561995/959219
      shadowColor: '#000',
      shadowOffset: {width: 0, height: -1},
      shadowOpacity: 0.2,
      shadowRadius: 16,
      elevation: 8,
      // backgroundColor: selected ? brandTheme.colors.primary : theme.colors.white, @todo with props
      padding: 12,
      marginTop: 4,
      marginBottom: 4,
      borderRadius: 8
    },
    text: {
      fontSize: 15,
      fontWeight: 'bold',
      lineHeight: 24,
      // color: selected ? theme.colors.white : theme.colors.text.primary, @todo with props
      textAlign: 'center'
    }
  });
};

const choicesStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const onButtonPress = () => {};

const Choices = ({choices}: any) => (
  <View style={choicesStyle.container}>
    {choices.map(({text, selected = false}: _Choice_) => {
      const optionStyle = createOptionStyle(selected);
      return (
        <View style={optionStyle.box}>
          <Text style={optionStyle.text}>
            {text} {selected}
          </Text>
        </View>
      );
    })}
  </View>
);

const Slide = ({slide, num}: Props) => {
  const slideStyle = creatSlideStyle(num);

  return (
    <View style={slideStyle.slide}>
      <Text style={slideStyle.category}>
        {slide.category} {num}
      </Text>
      <Text style={slideStyle.question}>{slide.question}</Text>
      <Text style={slideStyle.instruction}>{slide.instruction}</Text>

      <Choices choices={slide.choices} />

      {/* <Button style={slideStyle.button} onPress={onButtonPress} testID={`button-quizzer-validate`}>
        {translations.validate}
      </Button> */}
    </View>
  );
};

const RevisionQuizzer = ({slide}: Props) => {
  const slides = [slide, slide, slide, slide, slide];
  return (
    <View style={quizzerStyle.container}>
      {slides.reverse().map((slide, index) => (
        <Slide slide={slide} num={slides.length - index} />
      ))}
    </View>
  );
};

export default RevisionQuizzer;
