import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Easing, StyleSheet, Text, TextInput, View} from 'react-native';
import {
  NovaCompositionNavigationLeftArrow as ArrowIcon,
  NovaCompositionCoorpacademyEmail as MailIcon,
  NovaCompositionCoorpacademySendEmail as SendIcon
} from '@coorpacademy/nova-icons';

import Touchable from '../../../hoc/touchable/index.native';
import useMobileKeyboardVisibility from '../../../util/use-mobile-keyboard-visibility';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
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
    width: '100%'
  },
  ctaButton: {
    borderRadius: 12,
    paddingHorizontal: 50,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  sendIcon: {
    fill: '#fff',
    width: 16,
    height: 16,
    marginRight: 8
  },
  ctaText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 24
  }
});

const enabledColor = '#0061ff';
const disabledColor = '#9999A8';
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

export type Props = {
  locales: {
    title: string;
    explanation: string;
    subtitle: string;
    cta: string;
  };
  onClose: () => void;
};

const ReceiveEmail = (props: Props) => {
  const {locales, onClose} = props;

  const [isValid, setValid] = useState<boolean>(false);
  const isKeyboardVisible = useMobileKeyboardVisibility();

  const handleChangeText = useCallback(value => {
    setValid(emailRegex.test(value));
  }, []);

  const animationRef = useRef<Animated.Value>(new Animated.Value(0)).current;
  const animatedOpacity = animationRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });

  useEffect(() => {
    const animation = Animated.timing(animationRef, {
      toValue: isValid ? 1 : 0,
      duration: 250,
      easing: Easing.out(Easing.sin),
      useNativeDriver: false
    });

    animation.start();
  }, [animationRef, isValid]);

  return (
    <View
      style={[
        styles.container,
        {justifyContent: isKeyboardVisible ? 'flex-start' : 'space-between'}
      ]}
      testID="receive-email"
    >
      <View style={styles.contentWrapper}>
        <Touchable style={styles.backButton} onPress={onClose}>
          <ArrowIcon style={styles.arrowIcon} />
        </Touchable>
        {isKeyboardVisible ? null : (
          <View style={styles.mailIconWrapper}>
            <MailIcon style={styles.mailIcon} />
          </View>
        )}
        <Text style={styles.title}>{locales.title}</Text>
        <Text style={styles.explanation}>{locales.explanation}</Text>
        <Text style={styles.subtitle}>{locales.subtitle}</Text>
        <TextInput
          style={styles.textInput}
          placeholder="john.doe@company.com"
          placeholderTextColor={disabledColor}
          onChangeText={handleChangeText}
        />
        <MailIcon style={styles.innerMailIcon} />
      </View>

      <Animated.View style={[styles.ctaWrapper, {opacity: animatedOpacity}]}>
        <Touchable
          disabled={!isValid}
          style={[styles.ctaButton, {backgroundColor: isValid ? enabledColor : disabledColor}]}
          onPress={onClose}
        >
          <SendIcon style={styles.sendIcon} />
          <Text style={styles.ctaText}>{locales.cta}</Text>
        </Touchable>
      </Animated.View>
    </View>
  );
};

export default ReceiveEmail;
