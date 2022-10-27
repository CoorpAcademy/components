import React, {useState, useEffect} from 'react';
import {View, Pressable, StyleSheet, Text, ViewStyle, TextStyle} from 'react-native';
import {NovaCompositionNavigationArrowRight as ArrowRight} from '@coorpacademy/nova-icons';
import {useTemplateContext} from '../../template/app-review/template-context';
import {Theme} from '../../variables/theme.native';
import {SkillProps} from './prop-types';

type StyleSheetType = {
  skill: ViewStyle;
  skillTexts: TextStyle;
  skillTitle: TextStyle;
  skillInfo: TextStyle;
};

const createStyleSheet = (theme: Theme): StyleSheetType =>
  StyleSheet.create({
    skill: {
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden',
      alignItems: 'center',
      height: 118,
      borderRadius: 8,
      backgroundColor: theme.colors.gray.lighter,
      marginTop: theme.spacing.micro,
      marginBottom: theme.spacing.micro,
      padding: theme.spacing.base
    },
    skillTexts: {
      flex: 1,
      flexDirection: 'column'
    },
    skillTitle: {
      fontSize: 18,
      fontWeight: '600',
      lineHeight: 22,
      color: theme.colors.text.primary,
      marginBottom: theme.spacing.tiny
    },
    skillInfo: {
      fontSize: 12,
      lineHeight: 16,
      color: theme.colors.gray.medium
    }
  });

const SkillCard = ({
  skillTitle,
  skillAriaLabel,
  reviseLabel,
  reviseAriaLabel,
  onClick,
  buttonAriaLabel
}: SkillProps) => {
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
    <Pressable
      style={styleSheet.skill}
      onPress={onClick}
      accessibilityRole="button"
      accessibilityLabel={buttonAriaLabel}
    >
      <View style={styleSheet.skillTexts}>
        <Text style={styleSheet.skillTitle} accessibilityLabel={skillAriaLabel || skillTitle}>
          {skillTitle}
        </Text>
        <Text style={styleSheet.skillInfo} accessibilityLabel={reviseAriaLabel}>
          {reviseLabel}
        </Text>
      </View>
      <ArrowRight color="#ededed" height={20} width={20} />
    </Pressable>
  );
};

export default SkillCard;
