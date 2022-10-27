import React, {useState, useEffect} from 'react';
import {View, FlatList, Pressable, StyleSheet, Text, ViewStyle, TextStyle} from 'react-native';
import {
  NovaCompositionNavigationArrowRight as ArrowRight,
  NovaCompositionCoorpacademyEmptyStateHomeRevision as EmptyStateHomeRevision
} from '@coorpacademy/nova-icons';
import {useTemplateContext} from '../template-context';
import {Theme} from '../../../variables/theme.native';

import {HEADER_HEIGHT} from '../../../organism/header-v2/index.native';
import {NoSkillsProps, ReviewSkillsProps} from '../../../organism/review-skills/prop-types';
import {ItemProps, SkillProps} from './prop-types';

type StyleSheetType = {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  text: TextStyle;
  noSkillsImage: ViewStyle;
  skills: ViewStyle;
  skill: ViewStyle;
  skillTexts: TextStyle;
  skillTitle: TextStyle;
  skillInfo: TextStyle;
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
    },
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
    },
    skills: {paddingBottom: 100},
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

// -----------------------------------------------------------------------------

const Skill = ({
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

// -----------------------------------------------------------------------------

const Item = ({
  item: {skillTitle, skillAriaLabel, reviseLabel, reviseAriaLabel, onClick, buttonAriaLabel}
}: ItemProps) => (
  <Skill
    skillTitle={skillTitle}
    skillAriaLabel={skillAriaLabel}
    reviseLabel={reviseLabel}
    onClick={onClick}
    buttonAriaLabel={buttonAriaLabel}
    reviseAriaLabel={reviseAriaLabel}
  />
);

const List = (props: {listSkills: Array<SkillProps>}) => {
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {theme} = templateContext;
  const {listSkills} = props;

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }

  const formattedDataList: Array<SkillProps> = [];
  listSkills.map((skill: SkillProps) =>
    formattedDataList.push({
      skillTitle: skill.skillTitle,
      skillAriaLabel: skill.skillAriaLabel,
      reviseLabel: skill.reviseLabel,
      reviseAriaLabel: skill.reviseAriaLabel,
      onClick: skill.onClick,
      buttonAriaLabel: skill.buttonAriaLabel
    })
  );

  return (
    <FlatList
      contentContainerStyle={styleSheet.skills}
      data={formattedDataList}
      renderItem={Item}
    />
  );
};

// -----------------------------------------------------------------------------

const NoSkills = (props: NoSkillsProps) => {
  const {titleNoSkills, textNoSkills, iconSkillAriaLabel} = props;
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
    <>
      <Text style={styleSheet.subtitle}>{titleNoSkills}</Text>
      <Text style={styleSheet.text}>{textNoSkills}</Text>
      <EmptyStateHomeRevision
        style={styleSheet.noSkillsImage}
        iconSkillAriaLabel={iconSkillAriaLabel}
      />
    </>
  );
};

// -----------------------------------------------------------------------------

const Skills = (props: ReviewSkillsProps) => {
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

  // ------------------------------------

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
            <NoSkills
              titleNoSkills={titleNoSkills}
              textNoSkills={textNoSkills}
              iconSkillAriaLabel={iconSkillAriaLabel}
            />
          ) : (
            <List listSkills={listSkills} />
          )}
        </View>
      )}
    </View>
  );
};

// -----------------------------------------------------------------------------

export default Skills;
