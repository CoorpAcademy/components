import React, {useCallback, useEffect, useMemo, useState} from 'react';

import {
  Animated,
  Easing,
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  TextStyle,
  useWindowDimensions,
  View,
  ViewStyle
} from 'react-native';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import {useTranslateY} from '@coorpacademy/react-native-animation';
import Answer from '../../molecule/answer/index.native';
import ReviewCorrectionPopin from '../../molecule/review-correction-popin/index.native';
import {useTemplateContext} from '../../template/app-review/template-context';
import {Theme} from '../../variables/theme.native';
import Button from '../../atom/button/index.native';
import {TYPE_AUDIO, TYPE_IMAGE, TYPE_VIDEO} from '../../molecule/answer/prop-types';
import Video from '../../molecule/video-player-mobile/index.native';
import {Media} from '../../molecule/questions/types';
import Html from '../../atom/html/index.native';
import {PopinProps, ReviewSlideProps, SlideProps} from './prop-types';

const styles = StyleSheet.create({
  mediaContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    flex: 1,
    width: '100%'
  },
  correctionPopinWrapper: {
    position: 'absolute',
    bottom: 16,
    width: '105%'
  }
});

const MediaView = ({media, autoplay}: {media?: Media; autoplay: boolean}) => {
  if (!media) {
    return null;
  }

  switch (media.type) {
    case TYPE_VIDEO:
      return (
        <View style={styles.mediaContainer}>
          <Video media={media} autoplay={autoplay} />
        </View>
      );
    case TYPE_IMAGE: {
      const uri = `https://${media.url?.split('//')[1]}`;
      return <Image style={[styles.mediaContainer, styles.image]} source={{uri}} />;
    }
    case TYPE_AUDIO:
    default:
      return null;
  }
};

const CorrectionPopin = ({
  correctionPopinProps,
  slideIndex,
  showCorrectionPopin,
  animateCorrectionPopin
}: PopinProps) => {
  const translateUp = useTranslateY({
    fromValue: 500,
    toValue: 0,
    duration: 500,
    easing: Easing.bezier(0.34, 1.36, 0.64, 1)
  });

  // the translation is required only once on mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => translateUp.start(), []);

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
    ? [styles.correctionPopinWrapper, translateUp.animatedStyle]
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
  choicesScrollView: ViewStyle;
  choicesScrollContent: ViewStyle;
};

const createQuestionStyle = (theme: Theme): StyleSheetType =>
  StyleSheet.create({
    questionHeading: {
      justifyContent: 'space-between',
      alignItems: 'center'
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
    choicesScrollView: {
      marginTop: 20,
      width: '100%'
    },
    choicesScrollContent: {
      flexGrow: 1,
      justifyContent: 'space-around',
      padding: 10
    }
  });

type QuestionProps = {
  autoplayMedia: boolean;
  answerUI: SlideProps['answerUI'];
  isKeyboardVisible: boolean;
  questionText: SlideProps['questionText'];
  questionOrigin: SlideProps['parentContentTitle'];
};

const Question = (props: QuestionProps) => {
  const {
    answerUI,
    questionText,
    questionOrigin = '',
    isKeyboardVisible,
    autoplayMedia = false
  } = props;
  const {theme} = useTemplateContext();
  const [style, setStyle] = useState<StyleSheetType>();

  useEffect(() => {
    const questionStyle = createQuestionStyle(theme);
    setStyle(questionStyle);
  }, [theme]);

  if (!answerUI || !questionText || !style) return null;

  const hasVideoOrImage =
    answerUI.media?.type && [TYPE_VIDEO, TYPE_IMAGE].includes(answerUI.media.type);

  return (
    <>
      <View style={style.questionHeading}>
        <Html style={style.questionOrigin}>{questionOrigin}</Html>
        <Html style={style.questionText}>{questionText}</Html>
        <Html style={style.questionHelp}>{get('help', answerUI)}</Html>
      </View>
      <ScrollView
        style={style.choicesScrollView}
        contentContainerStyle={style.choicesScrollContent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {!isKeyboardVisible && hasVideoOrImage ? (
          <MediaView media={answerUI.media} autoplay={autoplayMedia} />
        ) : null}
        <View
          style={{
            marginTop: hasVideoOrImage ? 30 : 0
          }}
        >
          <Answer {...answerUI} />
        </View>
      </ScrollView>
    </>
  );
};

type SlideStyle = {
  slide: ViewStyle;
  hiddenBackgroundToLockActions: ViewStyle;
};

const createSlideStyle = (
  num: number,
  screenWidth: number,
  isKeyboardVisible: boolean
): SlideStyle => {
  const slideWidth = screenWidth - 40 - num * 8;

  return StyleSheet.create({
    hiddenBackgroundToLockActions: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: '#00000000'
    },
    slide: {
      position: 'absolute',
      left: 20 + num * 4,
      bottom: (isKeyboardVisible ? 5 : 34) + num * 5,
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
  const {animatedStyle, slide, correctionPopinProps, validateButton, num, slideIndex = '0'} = props;
  const [isValidated, setValidated] = useState<boolean>(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });

    const hideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  const handleValidatePress = useCallback(() => {
    Keyboard.dismiss();
    setValidated(true);

    // calling the onclick later, after react has rerendered, to display the locking BG as soon as possible
    setTimeout(() => {
      validateButton.onClick();
    }, 20);

    // only to create on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {width} = useWindowDimensions();
  const slideStyle = useMemo(
    () => createSlideStyle(num, width, isKeyboardVisible),
    [num, width, isKeyboardVisible]
  );
  const isFirstSlide = num === 1;

  const {
    loading,
    parentContentTitle,
    questionText,
    answerUI,
    showCorrectionPopin,
    animateCorrectionPopin
  } = slide;

  if (loading) {
    return <View style={slideStyle.slide} />;
  }

  return (
    <Animated.View style={[slideStyle.slide, animatedStyle]}>
      <Question
        questionOrigin={parentContentTitle}
        questionText={questionText}
        answerUI={answerUI}
        autoplayMedia={isFirstSlide}
        isKeyboardVisible={isKeyboardVisible}
        key="question-container"
      />
      {isKeyboardVisible ? null : (
        <Button
          disabled={isValidated || validateButton.disabled}
          submitValue={validateButton.label}
          onPress={handleValidatePress}
          testID={`slide-validate-button-${slideIndex}`}
        />
      )}
      {isValidated ? <View style={slideStyle.hiddenBackgroundToLockActions} /> : null}
      {correctionPopinProps ? (
        <CorrectionPopin
          correctionPopinProps={correctionPopinProps}
          slideIndex={slideIndex}
          showCorrectionPopin={showCorrectionPopin}
          animateCorrectionPopin={animateCorrectionPopin}
          key="correction-popin"
        />
      ) : null}
    </Animated.View>
  );
};

export default Slide;
