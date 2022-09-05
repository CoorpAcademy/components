import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useTemplateContext} from '../template-context';
import {Theme} from '../../../variables/theme.native';
import {
  FlexDirection,
  JustifyContent,
  Overflow,
  AlignItem,
  FontWeight
} from '../../../types/styles';

// import {NovaLineSelectionCursorsCursorArrowTarget as TargetIcon} from '@coorpacademy/nova-icons';

// import theme from '../../../modules/theme';
// import translations from '../../../translations';
// import Button from '../../../app-shared/components/button';
// import {HEADER_HEIGHT} from '../../../app-shared/components/header-v2';

type StyleSheetType = {
  container: {
    justifyContent: JustifyContent;
    flex: number;
    padding: number;
    paddingTop: number;
  };
  title: {
    height: number | undefined;
    width: number | undefined;
    fontSize: number | undefined;
    fontWeight: FontWeight;
    lineHeight: number | undefined;
    color: string;
    marginBottom: number;
  };
  text: {
    fontSize: number | undefined;
    color: string;
    opacity: number;
    marginBottom: number;
  };
  tip: {
    flexDirection: FlexDirection;
    overflow: Overflow;
    alignItems: AlignItem;
    height: number;
    borderRadius: number;
    backgroundColor: string;
    marginTop: number;
    marginBottom: number;
  };
  tipText: {
    fontSize: number | undefined;
    color: string;
  };
  icon: {
    margin: number;
  };
  button: {
    height: number;
    borderRadius: number;
    marginBottom: number;
    marginTop: number;
  };
};

const createStyleSheet = (theme: Theme): StyleSheetType =>
  StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      flex: 1,
      padding: 20,
      paddingTop: 200 // HEADER_HEIGHT + 20
    },
    title: {
      height: 72,
      width: 268,
      fontSize: theme.fontSize.xxlarge,
      fontWeight: theme.fontWeight.bold,
      lineHeight: 36,
      color: theme.colors.text.primary,
      marginBottom: theme.spacing.small
    },
    text: {
      fontSize: theme.fontSize.large,
      color: theme.colors.text.primary,
      opacity: 0.7,
      marginBottom: theme.spacing.small
    },
    tip: {
      flexDirection: 'row',
      overflow: 'hidden',
      alignItems: 'center',
      height: 54,
      borderRadius: 8,
      backgroundColor: theme.colors.gray.extra,
      marginTop: theme.spacing.micro,
      marginBottom: theme.spacing.micro
    },
    tipText: {
      fontSize: theme.fontSize.large,
      color: theme.colors.text.primary
    },
    icon: {
      margin: 10
    },
    button: {
      height: 52,
      borderRadius: 7,
      marginBottom: theme.spacing.large,
      marginTop: theme.spacing.large
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
const Onboarding = (reviewTitle: string) => {
  const templateContext = useTemplateContext();
  const {theme} = templateContext;
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }

  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.title}>test</Text>
    </View>
  );
};

export default Onboarding;
