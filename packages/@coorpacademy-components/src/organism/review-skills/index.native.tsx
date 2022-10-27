import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, Text, ViewStyle, TextStyle} from 'react-native';
import {NovaCompositionCoorpacademyEmptyStateHomeRevision as EmptyStateHomeRevision} from '@coorpacademy/nova-icons';
import {useTemplateContext} from '../../template/app-review/template-context';
import {Theme} from '../../variables/theme.native';
import SkillCard from '../../molecule/skill-card';
import {SkillCardProps, SkillProps} from '../../molecule/skill-card/prop-types';
import {HEADER_HEIGHT} from '../header-v2/index.native';
import {ItemProps, NoSkillsProps, SkillsProps} from './prop-types';

type StyleSheetType = {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  text: TextStyle;
  noSkillsImage: ViewStyle;
  skills: ViewStyle;
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
    skills: {paddingBottom: 100}
  });

const Item = ({
  item: {skillTitle, skillAriaLabel, reviseLabel, reviseAriaLabel, onClick, buttonAriaLabel}
}: ItemProps) => (
  <SkillCard
    skillTitle={skillTitle}
    skillAriaLabel={skillAriaLabel}
    reviseLabel={reviseLabel}
    reviseAriaLabel={reviseAriaLabel}
    onClick={onClick}
    buttonAriaLabel={buttonAriaLabel}
  />
);

const ReviewListSkills = (props: {listSkills: Array<SkillCardProps>}) => {
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

const ReviewNoSkills = (props: NoSkillsProps) => {
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

const ReviewSkills = (props: SkillsProps) => {
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
