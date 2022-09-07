import React, {useEffect, useMemo, useState} from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import Text from '../../atom/text/index.native';
import Answer from '../../molecule/answer/index.native';
// import Loader from '../../atom/loader';
// import ReviewCorrectionPopin from '../../molecule/review-correction-popin';
import {useTemplateContext} from '../../template/app-review/template-context';
import {Theme} from '../../variables/theme.native';
import Touchable from '../../hoc/touchable/index.native';
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

// const ValidateButton = ({slideIndex, validateButton, primarySkinColor}) => {
//   const {label, onClick, disabled} = validateButton;
//   const validateButtonProps = {
//     type: 'primary',
//     label,
//     'aria-label': label,
//     'data-name': `slide-validate-button-${slideIndex}`,
//     onClick,
//     disabled,
//     customStyle: {
//       backgroundColor: primarySkinColor
//     }
//   };

//   return <Button title="validate todo" />;
// };

const createQuestionStyle = (theme: Theme, brandTheme: any) =>
  StyleSheet.create({
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
      marginBottom: theme.spacing.base,
      marginTop: theme.spacing.small,
      textAlign: 'center'
    },
    validateButton: {
      backgroundColor: brandTheme?.colors.primary || theme.colors.text.primary,
      borderRadius: 7,
      width: '100%'
    },
    validateButtonText: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '700',
      color: theme.colors.white,
      marginBottom: 16,
      marginTop: 16,
      textAlign: 'center'
    },
    dummyAnswer: {
      backgroundColor: '#a986bb',
      flex: 1
    }
  });

const QuestionContainer = props => {
  const {answerUI, questionText, questionOrigin} = props;
  const {theme, brandTheme} = useTemplateContext();
  const [style, setStyle] = useState<any | null>(null);

  useEffect(() => {
    const questionStyle = createQuestionStyle(theme, brandTheme);
    setStyle(questionStyle);
  }, [theme, brandTheme]);

  if (!answerUI || !questionText || !style) return null;

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
      <Text style={style.questionOrigin}>{questionOrigin}</Text>
      <Text style={style.questionText}>{questionText}</Text>
      <Text style={style.questionHelp}>{get('help', answerUI)}</Text>
      <Answer {...answerProps} />
      <Touchable style={style.validateButton}>
        <Text style={style.validateButtonText}>validate todo</Text>
      </Touchable>
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
