import React, {useState, useEffect} from 'react';
import {View, FlatList, Pressable, StyleSheet, Text, ViewStyle} from 'react-native';
import {NovaCompositionNavigationArrowRight as ArrowRight} from '@coorpacademy/nova-icons';
import {useTemplateContext} from '../template-context';
import {Theme} from '../../../variables/theme.native';

import propTypes, {NoSkillsPropTypes} from '../../../organism/review-skills/prop-types';
import {HEADER_HEIGHT} from '../../../organism/header-v2/index.native';
import {ItemProps, ListProps, NoSkillsProps, SkillProps, SkillsProps} from './prop-types';
// import translations from '../../../translations';
// import noSkillsImage from '../../../assets/images/revision-no-skills.png';
// import Touchable from '../../../app-shared/components/touchable';

type StyleSheetType = {
  container: ViewStyle;
  title: ViewStyle;
  subtitle: ViewStyle;
  text: ViewStyle;
  noSkillsImage: ViewStyle;
  skills: ViewStyle;
  skill: ViewStyle;
  skillTexts: ViewStyle;
  skillTitle: ViewStyle;
  skillInfo: ViewStyle;
  extraSpace: ViewStyle;
};

const createStyleSheet = (theme: Theme) =>
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

const onSelectSkill = title => () => {
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

const List = ({skills}: ListProps) => {
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

/*
  title: translations.revision.home.noSkills
  text: translations.revision.home.noSkillsDetails
  image: use web svg
  <ImageBackground source={noSkillsImage} style={styles.noSkillsImage} />
*/

const NoSkills = ({titleNoSkills, textNoSkills}: NoSkillsProps) => {
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
    </>
  );
};

NoSkills.propTypes = NoSkillsPropTypes;

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
      {!listSkills || listSkills.length === 0 ? (
        <NoSkills />
      ) : (
        <List skills={[...listSkills, {isExtraSpace: true}]} />
      )}
    </View>
  );
};

Skills.propTypes = propTypes;

// -----------------------------------------------------------------------------

export default Skills;
