import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {HEADER_HEIGHT} from '../../../organism/header-v2/index.native';
import ReviewNoSkills from '../../../organism/review-no-skills/index.native';
import ReviewListSkills from '../../../organism/review-skills/index.native';
import {Theme} from '../../../variables/theme.native';
import {useTemplateContext} from '../template-context';
import {ReviewSkillsProps} from './prop-types';

type StyleSheetType = {
  container: ViewStyle;
  title: TextStyle;
};

const createStyleSheet = (theme: Theme): StyleSheetType =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingTop: HEADER_HEIGHT + 20,
      backgroundColor: theme.colors.white
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
    isLoadingAriaLabel,
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

  if (!styleSheet) {
    return null;
  }

  return (
    <View style={styleSheet.container} accessibilityLabel={ariaLabel}>
      <Text style={styleSheet.title}>{title}</Text>
      {isLoading ? (
        <Text accessibilityLabel={isLoadingAriaLabel}>Loading</Text>
      ) : (
        <View>
          {!listSkills || listSkills.length === 0 ? (
            <ReviewNoSkills
              titleNoSkills={titleNoSkills}
              textNoSkills={textNoSkills}
              iconSkillAriaLabel={iconSkillAriaLabel}
            />
          ) : (
            <ReviewListSkills listSkills={listSkills} />
          )}
        </View>
      )}
    </View>
  );
};

export default ReviewSkills;
