import React, {useCallback, useEffect, useState, useRef} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  TextStyle,
  useWindowDimensions,
  View,
  ViewStyle
} from 'react-native';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import Text from '../../atom/text/index.native';
import Answer from '../../molecule/answer/index.native';
import ReviewCorrectionPopin from '../../molecule/review-correction-popin/index.native';
import {useTemplateContext} from '../../template/app-review/template-context';
import {Theme} from '../../variables/theme.native';
import Button from '../../atom/button/index.native';
import useTranslateVertically from '../../behaviours/use-update-opacity.native';
import {PopinProps, ReviewSlideProps, SlideProps} from './prop-types';

const styles = StyleSheet.create({
  correctionPopinWrapper: {
    position: 'absolute',
    bottom: 16,
    width: '105%'
  }
});

const CorrectionPopin = ({
  correctionPopinProps,
  slideIndex,
  showCorrectionPopin,
  animateCorrectionPopin
}: PopinProps) => {
  const translateUp = useTranslateVertically({
    fromValue: 1000,
    toValue: 0,
    duration: 800,
    easing: Easing.bezier(0.37, 0, 0.63, 1)
  });

  if (!showCorrectionPopin) return null;

  const klf = getOr(undefined, 'klf', correctionPopinProps);
  const information = getOr({label: '', message: ''}, 'information', correctionPopinProps);
  const next = get('next', correctionPopinProps);
  const onClick = get(['next', 'onClick'], correctionPopinProps);

  const _correctionPopinProps = {
    next: {
      onClick,
      label: next && next.label,
      'data-name': `next-question-button-${slideIndex}`,
      'aria-label': next && next['aria-label']
    },
    klf,
    information,
    type: correctionPopinProps.type,
    resultLabel: correctionPopinProps.resultLabel
  };

  const style = animateCorrectionPopin
    ? [styles.correctionPopinWrapper, translateUp]
    : styles.correctionPopinWrapper;

  return (
    <Animated.View style={style}>
      <ReviewCorrectionPopin {..._correctionPopinProps} />
    </Animated.View>
  );
};

type StyleSheetType = {
  questionHeading: ViewStyle;
  questionOrigin: ViewStyle;
  questionText: TextStyle;
  questionHelp: ViewStyle;
  choicesContainer: ViewStyle;
};

const createQuestionStyle = (theme: Theme): StyleSheetType =>
  StyleSheet.create({
    questionHeading: {
      justifyContent: 'space-between'
    },
    questionOrigin: {
      fontSize: 12,
      lineHeight: 16,
      color: theme.colors.text.primary,
      marginBottom: theme.spacing.tiny,
      marginTop: theme.spacing.small,
      textAlign: 'center'
    },
    questionText: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: '700',
      color: theme.colors.text.primary,
      textAlign: 'center'
    },
    questionHelp: {
      fontSize: 12,
      lineHeight: 16,
      color: theme.colors.gray.medium,
      marginBottom: 0,
      marginTop: theme.spacing.small,
      textAlign: 'center'
    },
    choicesContainer: {
      flex: 1,
      width: '100%',
      justifyContent: 'center'
    }
  });

type QuestionProps = {
  answerUI: SlideProps['answerUI'];
  questionText: SlideProps['questionText'];
  questionOrigin: SlideProps['parentContentTitle'];
};

const Question = (props: QuestionProps) => {
  const {answerUI, questionText, questionOrigin} = props;
  const {theme} = useTemplateContext();
  const [style, setStyle] = useState<StyleSheetType>();

  useEffect(() => {
    const questionStyle = createQuestionStyle(theme);
    setStyle(questionStyle);
  }, [theme]);

  if (!answerUI || !questionText || !style) return null;

  return (
    <>
      <View style={style.questionHeading}>
        <Text style={style.questionOrigin}>{questionOrigin}</Text>
        <Text style={style.questionText}>{questionText}</Text>
        <Text style={style.questionHelp}>{get('help', answerUI)}</Text>
      </View>
      <View style={style.choicesContainer}>
        <Answer {...answerUI} />
      </View>
    </>
  );
};

type SlideStyle = {
  slide: ViewStyle;
};

const createSlideStyle = (num: number, screenWidth: number): SlideStyle => {
  const slideWidth = screenWidth - 40 - num * 8;

  return StyleSheet.create({
    slide: {
      position: 'absolute',
      left: 20 + num * 4,
      bottom: 34 + num * 5,
      backgroundColor: '#fff', // theme.colors.white
      height: '90%',
      width: slideWidth,
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 25,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: -1},
      shadowOpacity: 0.05,
      shadowRadius: 16,
      elevation: 10 - num * 1,
      borderRadius: 16
    }
  });
};

const Slide = (props: ReviewSlideProps) => {
  const {slide, correctionPopinProps, validateButton, num, slideIndex = '0'} = props;

  const {width} = useWindowDimensions();
  const slideStyle = createSlideStyle(num, width);

  const {
    loading,
    parentContentTitle,
    questionText,
    answerUI,
    showCorrectionPopin,
    animateCorrectionPopin
  } = slide;

  if (loading) {
    return <Text>@todo loader {num}</Text>;
  }

  const {onClick: handleValidatePress} = validateButton;

  return (
    <View style={slideStyle.slide}>
      <Question
        questionOrigin={parentContentTitle}
        questionText={questionText}
        answerUI={answerUI}
        key="question-container"
      />
      <Button
        disabled={validateButton.disabled}
        submitValue={validateButton.label}
        onPress={handleValidatePress}
        testID={`slide-validate-button-${slideIndex}`}
      />
      {correctionPopinProps ? (
        <CorrectionPopin
          correctionPopinProps={correctionPopinProps}
          slideIndex={slideIndex}
          showCorrectionPopin={showCorrectionPopin}
          animateCorrectionPopin={animateCorrectionPopin}
          key="correction-popin"
        />
      ) : null}
    </View>
  );
};

export default Slide;
