import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import propTypes from '../../../atom/review-presentation/prop-types';

// import {NovaLineSelectionCursorsCursorArrowTarget as TargetIcon} from '@coorpacademy/nova-icons';

// import theme from '../../../modules/theme';
// import translations from '../../../translations';
// import Button from '../../../app-shared/components/button';
// import {HEADER_HEIGHT} from '../../../app-shared/components/header-v2';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    padding: 20
    // paddingTop: HEADER_HEIGHT + 20
  },
  title: {
    height: 72,
    width: 268,
    // fontSize: theme.fontSize.xxlarge,
    // fontWeight: theme.fontWeight.bold,
    lineHeight: 36
    // color: theme.colors.text.primary,
    // marginBottom: theme.spacing.small
  },
  text: {
    // fontSize: theme.fontSize.large,
    // color: theme.colors.text.primary,
    opacity: 0.7
    // marginBottom: theme.spacing.small
  },
  tip: {
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    height: 54,
    borderRadius: 8
    // backgroundColor: theme.colors.gray.extra,
    // marginTop: theme.spacing.micro,
    // marginBottom: theme.spacing.micro
  },
  tipText: {
    // fontSize: theme.fontSize.large,
    // color: theme.colors.text.primary
  },
  icon: {
    margin: 10
  },
  button: {
    height: 52,
    borderRadius: 7
    // marginBottom: theme.spacing.large,
    // marginTop: theme.spacing.large
  }
});

// const Tip = ({Icon, text}) => (
//   <View style={styles.tip}>
//     {/* <Icon height={16} width={16} style={styles.icon} color={theme.colors.text.primary} /> */}
//     <Text style={styles.tipText}>{text}</Text>
//   </View>
// );

/*
reviewTitle --> translations.revision.onboarding.title
*/
// {/* <Text style={styles.title}>{translations.revision.onboarding.title}</Text>
// <Text style={styles.text}>{translations.revision.onboarding.intro1}</Text>
// <Text style={styles.text}>{translations.revision.onboarding.intro2}</Text>

// <Tip Icon={TargetIcon} text={translations.revision.onboarding.tip1} />
// <Tip Icon={TargetIcon} text={translations.revision.onboarding.tip2} />
// <Tip Icon={TargetIcon} text={translations.revision.onboarding.tip3} />
// <Tip Icon={TargetIcon} text={translations.revision.onboarding.tip4} /> */}

// {/* <Button style={styles.button} onPress={onButtonPress} testID={`button-quit-revision-onboarding`}>
//   {translations.revision.onboarding.validate}
// </Button> */}
const Onboarding = ({reviewTitle}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{reviewTitle}</Text>
  </View>
);

Onboarding.propTypes = propTypes;

export default Onboarding;
