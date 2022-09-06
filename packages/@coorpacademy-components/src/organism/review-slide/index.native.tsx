import React, {useMemo} from 'react';
import {Button, StyleSheet, useWindowDimensions, View} from 'react-native';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
// import Answer from '../../molecule/answer';
// import Loader from '../../atom/loader';
// import ReviewCorrectionPopin from '../../molecule/review-correction-popin';
import Text from '../../atom/text/index.native';
import {Props} from './prop-types';

const CorrectionPopin = ({
  correctionPopinProps,
  slideIndex,
  showCorrectionPopin,
  animateCorrectionPopin
}) => {
  if (!showCorrectionPopin) return null;

  const klf = getOr({}, 'klf', correctionPopinProps);
  const information = getOr({label: '', message: ''}, 'information', correctionPopinProps);
  const next = get('next', correctionPopinProps);

  const _correctionPopinProps = {
    next: {
      onClick: () => {
        // eslint-disable-next-line no-console
        console.log('Next Slide');
      },
      label: next && next.label,
      'data-name': `next-question-button-${slideIndex}`,
      'aria-label': next && next['aria-label']
    },
    klf,
    information,
    type: correctionPopinProps.type,
    resultLabel: correctionPopinProps.resultLabel
  };

  return (
    <Text>ReviewCorrectionPopin</Text>
    // <ReviewCorrectionPopin {..._correctionPopinProps} />
  );
};

const ValidateButton = ({slideIndex, validateButton, primarySkinColor}) => {
  const {label, onClick, disabled} = validateButton;
  const validateButtonProps = {
    type: 'primary',
    label,
    'aria-label': label,
    'data-name': `slide-validate-button-${slideIndex}`,
    onClick,
    disabled,
    customStyle: {
      backgroundColor: primarySkinColor
    }
    /*
      slide validation action, this will trigger the correction popin
      (with the useEffect that fires the dispatchers, if there is a nextContent content,
      it will be loaded here) but will not trigger any animations unless the endReview
      signal is received (all slide will disappear, also fired in a useEffect),

      if it is the last slide and the content needs to be different, then that update will
      be handled on the next slide logic but the content will be carried from here.
    onClick: async () => {
      // endReview based on nextContent ref exit node values: 'successExitNode' : 'failExitNode'
      await validateSlide();
    },
    */
  };

  return <Button title="validate todo" />;
};

const QuestionContainer = props => {
  const {answerUI, questionText, questionOrigin} = props;
  if (!answerUI || !questionText) return null;

  const answerProps = get(['model', 'choices'], answerUI)
    ? /* istanbul ignore next */ {
        ...answerUI,
        model: {
          ...answerUI.model,
          answers: answerUI.model.choices
        }
      }
    : answerUI;

  return (
    <>
      <Text>{questionOrigin}</Text>
      <Text>{questionText}</Text>
      <Text>{get('help', answerUI)}</Text>
      {/* <Answer {...answerProps} key="answer" /> */}
      <Text>Todo molecule answer</Text>
    </>
  );
};

const creatSlideStyle = (num: number, screenWidth: number, screenHeight: number) => {
  const slideWidth = screenWidth - 40 - num * 8;
  const slideHeight = screenHeight * 0.65;

  return StyleSheet.create({
    slide: {
      position: 'absolute',
      top: num * -5,
      left: -slideWidth / 2,
      flex: 1,
      backgroundColor: '#fff', // theme.colors.white
      height: slideHeight,
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

const Slide = (props: Props, context: any) => {
  const {slide, validateButton, correctionPopinProps, num, slideIndex = '0'} = props;

  const {skin} = context;
  const primarySkinColor = useMemo(() => getOr('#00B0FF', 'common.primary', skin), [skin]);
  const {width, height} = useWindowDimensions();
  const slideStyle = creatSlideStyle(num, width, height);

  const {
    loading,
    loadingAriaLabel,
    parentContentTitle,
    questionText,
    answerUI,
    showCorrectionPopin,
    animateCorrectionPopin
  } = slide;

  return (
    <View style={slideStyle.slide}>
      {loading ? (
        // <Loader className={style.loader} theme="default" aria-label={loadingAriaLabel} />
        <Text>todo loader {num}</Text>
      ) : (
        [
          <QuestionContainer
            questionOrigin={parentContentTitle}
            questionText={questionText}
            answerUI={answerUI}
            key="question-container"
          />,
          <ValidateButton
            slideIndex={slideIndex}
            validateButton={validateButton}
            key="validate-button"
            primarySkinColor={primarySkinColor}
          />,
          <CorrectionPopin
            correctionPopinProps={correctionPopinProps}
            slideIndex={slideIndex}
            showCorrectionPopin={showCorrectionPopin}
            animateCorrectionPopin={animateCorrectionPopin}
            key="correction-popin"
          />
        ]
      )}
    </View>
  );
};

export default Slide;
