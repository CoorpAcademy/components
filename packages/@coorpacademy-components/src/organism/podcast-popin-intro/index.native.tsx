import React, {useState, useEffect} from 'react';
import {
  useWindowDimensions,
  StyleSheet,
  ViewStyle,
  Text,
  TextStyle,
  View,
  GestureResponderEvent
} from 'react-native';
import Modal from 'react-native-modal';
import {NovaSolidAudioHeadphone as Headphone} from '@coorpacademy/nova-icons';

import {useTemplateContext} from '../../template/app-review/template-context';
import Touchable from '../../hoc/touchable/index.native';
import {Theme} from '../../variables/theme.native';

export type Props = {
  isVisible: boolean;
  onValidate: (event: GestureResponderEvent) => void;
};

type StyleSheetType = {
  container: ViewStyle;
  headphones: ViewStyle;
  headphonesWrapper: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  title: TextStyle;
  message: TextStyle;
};

const createStyleSheet = (theme: Theme, windowHeight: number) => {
  const popinHeight = 368;
  return StyleSheet.create({
    container: {
      position: 'absolute',
      top: (windowHeight - popinHeight) / 2,
      height: popinHeight,
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      alignSelf: 'center',
      alignItems: 'center',
      borderRadius: 8,
      // width: '90%',
      padding: 24
    },
    headphonesWrapper: {
      width: 115,
      height: 115,
      backgroundColor: '#FFEFEB',
      justifyContent: 'center',
      borderRadius: 60
    },
    headphones: {
      alignSelf: 'center',
      width: 60,
      height: 60,
      fill: theme.colors.podcast.primary
    },
    button: {
      height: 44,
      backgroundColor: theme.colors.podcast.primary,
      borderRadius: 7,
      justifyContent: 'center',
      paddingHorizontal: 12
    },
    buttonText: {
      alignSelf: 'center',
      color: '#FFFFFF',
      fontWeight: theme.fontWeight.bold,
      fontFamily: 'System',
      fontSize: 14,
      lineHeight: 20
    },
    title: {
      textAlign: 'center',
      lineHeight: 24,
      fontWeight: '700',
      fontSize: 20,
      paddingHorizontal: 40
    },
    message: {
      textAlign: 'center',
      lineHeight: 19,
      fontWeight: '300',
      fontSize: 16,
      paddingHorizontal: 35
    }
  });
};

const PodcastPopinIntro = (props: Props) => {
  const {height: windowHeight} = useWindowDimensions();
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {theme, translations} = templateContext;
  const {isVisible, onValidate} = props;

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme, windowHeight);
    setStylesheet(_stylesheet);
  }, [theme, windowHeight]);

  if (!styleSheet) {
    return null;
  }

  return (
    <Modal isVisible={isVisible} style={styleSheet.container} testID="podcast-popin-intro">
      <View style={styleSheet.headphonesWrapper}>
        <Headphone style={styleSheet.headphones} />
      </View>
      <Text style={styleSheet.title}>{translations.appPodcast.infoNewFeature.title}</Text>
      <Text style={styleSheet.message}>{translations.appPodcast.infoNewFeature.message}</Text>
      <Touchable
        style={styleSheet.button}
        onPress={onValidate}
        testID="podcast-popin-intro-validate-button"
      >
        <Text style={styleSheet.buttonText}>{translations.appPodcast.infoNewFeature.cta}</Text>
      </Touchable>
    </Modal>
  );
};

export type PodcastPopinIntroProps = Props;
export default PodcastPopinIntro;
