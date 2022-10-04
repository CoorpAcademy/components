import React, {useState, useEffect} from 'react';
import {View, FlatList, Pressable, StyleSheet, Text, ViewStyle, TextStyle} from 'react-native';
import {
  NovaCompositionNavigationArrowRight as ArrowRight,
  NovaCompositionCoorpacademyEmptyStateHomeRevision as EmptyStateHomeRevision
} from '@coorpacademy/nova-icons';
import {useTemplateContext} from '../template-context';
import {Theme} from '../../../variables/theme.native';

import {HEADER_HEIGHT} from '../../../organism/header-v2/index.native';
import {ItemProps, ListSkillsProps, SkillProps, SkillsProps} from './prop-types';

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
  extraSpace: ViewStyle;
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
    skills: {},
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
    },
    extraSpace: {
      height: 100
    }
  });

// -----------------------------------------------------------------------------

const onSelectSkill = (title: string) => () => {
  // eslint-disable-next-line no-console
  console.log('pressed on', {title});
};

const ExtraSpace = () => {
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
  return <View style={styleSheet.extraSpace} />;
};

const Skill = ({title, info}: SkillProps) => {
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
    <Pressable style={styleSheet.skill} onPress={onSelectSkill(title)}>
      <View style={styleSheet.skillTexts}>
        <Text style={styleSheet.skillTitle}>{title}</Text>
        <Text style={styleSheet.skillInfo}>{info}</Text>
      </View>
      <ArrowRight color="#ededed" height={20} width={20} />
    </Pressable>
  );
};

// -----------------------------------------------------------------------------

const Item = ({item: {title, info, isExtraSpace = false}}: ItemProps) =>
  isExtraSpace ? <ExtraSpace /> : <Skill title={title} info={info} />;

const List = (props: ListSkillsProps) => {
  const {skills} = props;
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

  return <FlatList contentContainerStyle={styleSheet.skills} data={skills} renderItem={Item} />;
};

// -----------------------------------------------------------------------------

const NoSkills = () => {
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {theme, translations} = templateContext;

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }

  return (
    <>
      <Text style={styleSheet.subtitle}>{translations.appReview?.no_skills?.title}</Text>
      <Text style={styleSheet.text}>{translations.appReview?.no_skills?.text}</Text>
      <EmptyStateHomeRevision style={styleSheet.noSkillsImage} />
    </>
  );
};

// -----------------------------------------------------------------------------

//  title --> translations.revision.home.title
const Skills = (props: SkillsProps) => {
  const {title, listSkills} = props;
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
    <View style={styleSheet.container}>
      <Text style={styleSheet.title}>{title}</Text>
      {!listSkills || listSkills.skills.length === 0 ? (
        <NoSkills />
      ) : (
        <List skills={listSkills.skills} />
      )}
    </View>
  );
};

// -----------------------------------------------------------------------------

export default Skills;
