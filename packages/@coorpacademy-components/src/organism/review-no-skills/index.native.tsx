import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ViewStyle, TextStyle} from 'react-native';
import {NovaCompositionCoorpacademyEmptyStateHomeRevision as EmptyStateHomeRevision} from '@coorpacademy/nova-icons';
import {Theme} from '../../variables/theme.native';
import {useTemplateContext} from '../../template/app-review/template-context';
import {NoSkillsProps} from './prop-types';

type StyleSheetType = {
  subtitle: TextStyle;
  text: TextStyle;
  noSkillsImage: ViewStyle;
};

const createStyleSheet = (theme: Theme): StyleSheetType =>
  StyleSheet.create({
    subtitle: {
      fontSize: theme.fontSize.xlarge,
      color: theme.colors.text.primary,
      marginBottom: theme.spacing.tiny
    },
    text: {
      fontSize: 16,
      lineHeight: 22,
      color: theme.colors.text.primary,
      opacity: 0.7,
      marginBottom: theme.spacing.base
    },
    noSkillsImage: {
      flex: 1,
      alignSelf: 'center',
      width: 320,
      height: 300
    }
  });

const ReviewNoSkills = (props: NoSkillsProps) => {
  const {titleNoSkills, textNoSkills, iconSkillAriaLabel, directionReverse = false} = props;
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
    <View>
      {directionReverse ? (
        <EmptyStateHomeRevision
          style={styleSheet.noSkillsImage}
          iconSkillAriaLabel={iconSkillAriaLabel}
        />
      ) : null}
      <Text style={styleSheet.subtitle}>{titleNoSkills}</Text>
      <Text style={styleSheet.text}>{textNoSkills}</Text>
      {!directionReverse ? (
        <EmptyStateHomeRevision
          style={styleSheet.noSkillsImage}
          iconSkillAriaLabel={iconSkillAriaLabel}
        />
      ) : null}
    </View>
  );
};

export default ReviewNoSkills;
