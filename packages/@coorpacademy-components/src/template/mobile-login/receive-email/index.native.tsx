import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {
  NovaCompositionNavigationLeftArrow as ArrowIcon,
  NovaCompositionCoorpacademyEmail as MailIcon
} from '@coorpacademy/nova-icons';

import Touchable from '../../../hoc/touchable/index.native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 50,
    paddingHorizontal: 24
  },
  contentWrapper: {
    width: '100%'
  },
  backButton: {
    paddingVertical: 20
  },
  arrowIcon: {
    fill: '#515161',
    width: 24,
    height: 15
  },
  mailIconWrapper: {
    backgroundColor: '#f1f6fe',
    width: 64,
    height: 64,
    padding: 23,
    marginVertical: 24,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mailIcon: {
    fill: '#0061ff',
    width: 24,
    height: 18
  },
  innerMailIcon: {
    fill: '#515161',
    width: 16,
    height: 12,
    marginTop: -30,
    marginLeft: 16
  },
  title: {
    color: '#1D1D2B',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    textAlign: 'left',
    marginBottom: 12
  },
  explanation: {
    color: '#515161',
    fontSize: 17,
    letterSpacing: 0.4,
    fontWeight: '500',
    lineHeight: 22,
    textAlign: 'left',
    marginBottom: 24
  },
  subtitle: {
    color: '#1D1D2B',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'left',
    marginBottom: 8
  },
  textInput: {
    height: 48,
    width: '100%',
    backgroundColor: '#F4F4F5',
    fontSize: 15,
    lineHeight: 16,
    alignContent: 'center',
    color: '#515161',
    borderRadius: 7,
    paddingHorizontal: 40
  },
  ctaWrapper: {
    width: '100%',
    paddingHorizontal: 50
  },
  ctaButton: {
    backgroundColor: '#0061ff',
    borderRadius: 16,
    paddingHorizontal: 50,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ctaText: {
    color: '#e3e3e3'
  }
});

const ReceiveEmail = props => {
  const {locales, onClose} = props;

  return (
    <View style={styles.container} testID="receive-email">
      <View style={styles.contentWrapper}>
        <Touchable style={styles.backButton} onPress={onClose}>
          <ArrowIcon style={styles.arrowIcon} />
        </Touchable>
        <View style={styles.mailIconWrapper}>
          <MailIcon style={styles.mailIcon} />
        </View>
        <Text style={styles.title}>{locales.title}</Text>
        <Text style={styles.explanation}>{locales.explanation}</Text>
        <Text style={styles.subtitle}>{locales.subtitle}</Text>
        <TextInput style={styles.textInput} placeholder="john.doe@company.com" />
        <MailIcon style={styles.innerMailIcon} />
      </View>

      <View style={styles.ctaWrapper}>
        <Touchable style={styles.ctaButton} onPress={onClose}>
          <Text style={styles.ctaText}>{locales.cta}</Text>
        </Touchable>
      </View>
    </View>
  );
};

export default ReceiveEmail;
