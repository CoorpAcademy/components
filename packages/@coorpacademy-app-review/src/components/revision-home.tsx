import * as React from 'react';
import {View, FlatList, Pressable, StyleSheet, Text, ImageBackground} from 'react-native';
import {NovaCompositionNavigationArrowRight as ArrowRight} from '@coorpacademy/nova-icons';

// import theme from '../../../modules/theme';
// import translations from '../../../translations';
// import {HEADER_HEIGHT} from '../../../app-shared/components/header-v2';
// import noSkillsImage from '../../../assets/images/revision-no-skills.png';
// import Touchable from '../../../app-shared/components/touchable';

type _Skill_ = {title?: string; info?: string; isExtraSpace?: boolean};
interface Props {
  skillsToRevise: {title?: string; info?: string}[];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
    // paddingTop: HEADER_HEIGHT + 20,
    // backgroundColor: theme.colors.white
  },
  title: {
    // fontSize: theme.fontSize.xlarge,
    // fontWeight: theme.fontWeight.bold,
    lineHeight: 28
    // color: theme.colors.text.primary,
    // marginBottom: theme.spacing.base,
    // marginTop: theme.spacing.small
  },
  subtitle: {
    // fontSize: theme.fontSize.xlarge,
    // color: theme.colors.text.primary,
    // marginBottom: theme.spacing.tiny
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    // color: theme.colors.text.primary,
    opacity: 0.7
    // marginBottom: theme.spacing.base
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
    borderRadius: 8
    // backgroundColor: theme.colors.gray.lighter,
    // marginTop: theme.spacing.micro,
    // marginBottom: theme.spacing.micro,
    // padding: theme.spacing.base
  },
  skillTexts: {
    flex: 1,
    flexDirection: 'column'
  },
  skillTitle: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22
    // color: theme.colors.text.primary,
    // marginBottom: theme.spacing.tiny
  },
  skillInfo: {
    fontSize: 12,
    lineHeight: 16
    // color: theme.colors.gray.medium
  },
  extraSpace: {
    height: 100
  }
});

const onSelectSkill = (title: string) => () => {
  console.log('pressed on', {title});
};

const ExtraSpace = () => <View style={styles.extraSpace}></View>;

const Skill = ({title, info}: _Skill_) => (
  <Pressable style={styles.skill} onPress={onSelectSkill(title)}>
    <View style={styles.skillTexts}>
      <Text style={styles.skillTitle}>{title}</Text>
      <Text style={styles.skillInfo}>{info}</Text>
    </View>
    <ArrowRight color="#ededed" height={20} width={20} />
  </Pressable>
);

const renderSkill = ({item: {title, info, isExtraSpace = false}}: {item: _Skill_}) =>
  isExtraSpace ? <ExtraSpace /> : <Skill title={title} info={info} />;

const Skills = (props: {skills: _Skill_[]}) => (
  <FlatList contentContainerStyle={styles.skills} data={props.skills} renderItem={renderSkill} />
);

const NoSkills = () => (
  <>
    {/* <Text style={styles.subtitle}>{translations.revision.home.noSkills}</Text>
    <Text style={styles.text}>{translations.revision.home.noSkillsDetails}</Text>
    <ImageBackground source={noSkillsImage} style={styles.noSkillsImage} /> */}
  </>
);

const RevisionHome = (props: Props) => (
  <View style={styles.container}>
    {/* <Text style={styles.title}>{translations.revision.home.title}</Text> */}
    {!props.skillsToRevise || props.skillsToRevise.length === 0 ? (
      <NoSkills />
    ) : (
      <Skills skills={[...props.skillsToRevise, {isExtraSpace: true}]} />
    )}
  </View>
);

export default RevisionHome;
