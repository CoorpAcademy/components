import * as React from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, Pressable, StyleSheet, Text} from 'react-native';
import {NovaCompositionNavigationArrowRight as ArrowRight} from '@coorpacademy/nova-icons';
import SkillsWeb, {ListSkillsPropTypes, NoSkillsPropTypes} from '../../../organism/review-skills';

// import theme from '../../../modules/theme';
// import translations from '../../../translations';
// import {HEADER_HEIGHT} from '../../../app-shared/components/header-v2';
// import noSkillsImage from '../../../assets/images/revision-no-skills.png';
// import Touchable from '../../../app-shared/components/touchable';

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

// -----------------------------------------------------------------------------

const onSelectSkill = title => () => {
  // eslint-disable-next-line no-console
  console.log('pressed on', {title});
};

const ExtraSpace = () => <View style={styles.extraSpace} />;

const Skill = ({title, info}) => (
  <Pressable style={styles.skill} onPress={onSelectSkill(title)}>
    <View style={styles.skillTexts}>
      <Text style={styles.skillTitle}>{title}</Text>
      <Text style={styles.skillInfo}>{info}</Text>
    </View>
    <ArrowRight color="#ededed" height={20} width={20} />
  </Pressable>
);

Skill.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string
};

// -----------------------------------------------------------------------------

const Item = ({item: {title, info, isExtraSpace = false}}) =>
  isExtraSpace ? <ExtraSpace /> : <Skill title={title} info={info} />;

const List = ({skills}) => (
  <FlatList contentContainerStyle={styles.skills} data={skills} renderItem={Item} />
);

Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    info: PropTypes.string,
    isExtraSpace: PropTypes.bool
  })
};

List.propTypes = {
  skills: ListSkillsPropTypes.listSkills
};

// -----------------------------------------------------------------------------

/*
  title: translations.revision.home.noSkills
  text: translations.revision.home.noSkillsDetails
  image: use web svg
  <ImageBackground source={noSkillsImage} style={styles.noSkillsImage} />
*/
const NoSkills = ({titleNoSkills, textNoSkills}) => (
  <>
    <Text style={styles.subtitle}>{titleNoSkills}</Text>
    <Text style={styles.text}>{textNoSkills}</Text>
  </>
);

NoSkills.propTypes = NoSkillsPropTypes;

// -----------------------------------------------------------------------------

//  title --> translations.revision.home.title
const Skills = props => {
  const {title, listSkills} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {!listSkills || listSkills.length === 0 ? (
        <NoSkills />
      ) : (
        <List skills={[...listSkills, {isExtraSpace: true}]} />
      )}
    </View>
  );
};

Skills.propTypes = SkillsWeb.propTypes;

// -----------------------------------------------------------------------------

export default Skills;
