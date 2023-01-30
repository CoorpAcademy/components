import {useAnimateProp, useAnimationWaiter} from '@coorpacademy/react-native-animation';
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ViewStyle, TextStyle, Animated} from 'react-native';
import Loader from '../../../atom/loader/index.native';
import ReviewNoSkills from '../../../organism/review-no-skills/index.native';
import ReviewListSkills from '../../../organism/review-skills/index.native';
import {Theme} from '../../../variables/theme.native';
import {useTemplateContext} from '../template-context';
import {ReviewSkillsProps} from './prop-types';

type StyleSheetType = {
  container: ViewStyle;
  loaderContainer: ViewStyle;
  title: TextStyle;
};

const createStyleSheet = (theme: Theme): StyleSheetType =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      width: '100%',
      backgroundColor: theme.colors.white
    },
    loaderContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontSize: theme.fontSize.xlarge,
      fontWeight: theme.fontWeight.bold,
      lineHeight: 28,
      color: theme.colors.text.primary,
      marginBottom: theme.spacing.base,
      marginTop: theme.spacing.small
    }
  });

const ReviewSkills = (props: ReviewSkillsProps) => {
  const {
    'aria-label': ariaLabel,
    title,
    isLoading,
    listSkills,
    titleNoSkills,
    textNoSkills,
    iconSkillAriaLabel
  } = props;
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {theme} = templateContext;

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  const fadeResultsIn = useAnimateProp({
    property: 'opacity',
    fromValue: 0,
    toValue: 1
  });

  useAnimationWaiter(isLoading, fadeResultsIn);

  if (!styleSheet) {
    return null;
  }

  return (
    <View style={styleSheet.container} accessibilityLabel={ariaLabel}>
      <Text style={styleSheet.title}>{title}</Text>

      <Animated.View style={fadeResultsIn.animatedStyle}>
        {!listSkills || listSkills.length === 0 ? (
          <ReviewNoSkills
            titleNoSkills={titleNoSkills}
            textNoSkills={textNoSkills}
            iconSkillAriaLabel={iconSkillAriaLabel}
          />
        ) : (
          <ReviewListSkills listSkills={listSkills} />
        )}
      </Animated.View>
      <View style={styleSheet.loaderContainer} pointerEvents="none">
        <Loader readyToHide={!isLoading} />
      </View>
    </View>
  );
};

export default ReviewSkills;
