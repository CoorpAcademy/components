import * as React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, useWindowDimensions, Button} from 'react-native';

import propTypes from './prop-types';

// import theme from '../../../modules/theme';
// import translations from '../../../translations';
// import {BrandThemeContext} from '../../../app-shared/components/brand-theme-provider';
// import Button from '../../../app-shared/components/button';
// import {HEADER_HEIGHT} from '../../../app-shared/components/header-v2';

// export type _Choice_ = {
//   text?: string,
//   selected: boolean
// };

// export type _Slide_ = {
//   category: string,
//   question: string,
//   instruction: string,
//   type: 'multiSelection' | 'singleSelection' | 'trueOrFalse',
//   choices?: _Choice_[]
// };

// interface Props {
//   slide: _Slide_;
//   num: number;
// }

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

// const creatSlideStyle = (num: number) =>
const creatSlideStyle = (num, width, height) =>
  StyleSheet.create({
    slide: {
      position: 'absolute',
      // backgroundColor: theme.colors.white, @todo with props
      top: height / 2 - SLIDE_HEIGHT() / 2 - num * 4,
      flex: 1,
      height: SLIDE_HEIGHT(),
      width: width - 40 - num * 8,
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

const createOptionStyle = selected => {
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

// -----------------------------------------------------------------------------

/* {choices.map(({text, selected = false}: _Choice_) => { */
const Choices = ({choices}) => (
  <View style={choicesStyle.container}>
    {choices.map(({text, selected = false}, index) => {
      const optionStyle = createOptionStyle(selected);
      return (
        <View style={optionStyle.box} key={`choice-${index}`}>
          <Text style={optionStyle.text}>
            {text} {selected}
          </Text>
        </View>
      );
    })}
  </View>
);

Choices.propTypes = {
  choices: PropTypes.arrayOf({
    text: PropTypes.text,
    selected: PropTypes.bool
  })
};

// -----------------------------------------------------------------------------

// const Slide = ({slide, num}: Props) => {
const Slide = ({validateSlide, slide, num}) => {
  const {width, height} = useWindowDimensions();
  const slideStyle = creatSlideStyle(num, width, height);
  const validateLabel = '__validate'; // translations.validate

  // TODO replace choices with <Answer>; move mobile answers in the package..
  return (
    <View style={slideStyle.slide}>
      <Text style={slideStyle.category}>
        {slide.category} {num}
      </Text>
      <Text style={slideStyle.question}>{slide.question}</Text>
      <Text style={slideStyle.instruction}>{slide.instruction}</Text>

      <Choices choices={slide.choices} />

      <Button style={slideStyle.button} onPress={validateSlide} testID={`button-quizzer-validate`}>
        {validateLabel}
      </Button>
    </View>
  );
};

Slide.propTypes = {
  slide: propTypes.slide,
  validateSlide: propTypes.validateSlide,
  num: PropTypes.number
};

// -----------------------------------------------------------------------------

// const Slides = ({slide}: Props) => {
const Slides = ({slide, validateSlide}) => {
  const slides = [slide, slide, slide, slide, slide];
  return (
    <View style={quizzerStyle.container}>
      {slides.reverse().map((_slide, index) => (
        <Slide
          validateSlide={validateSlide}
          slide={_slide}
          num={slides.length - index}
          key={`slide-${index}`}
        />
      ))}
    </View>
  );
};

Slides.propTypes = propTypes;

// -----------------------------------------------------------------------------

export default Slides;
