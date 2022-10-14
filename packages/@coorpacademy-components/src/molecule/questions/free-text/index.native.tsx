import {View, StyleSheet, TextInput, ViewStyle} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {useTemplateContext} from '../../../template/app-review/template-context';
import {ANALYTICS_EVENT_TYPE, Analytics} from '../../../variables/analytics';
import {Theme} from '../../../variables/theme.native';
import {BOX_STYLE} from '../../../variables/shadow';
import {Brand} from '../../../variables/brand.native';

type QuestionType = 'basic' | 'template';

interface Props {
  fullWidth?: boolean;
  testID: string;
  questionType: QuestionType;
  analytics?: Analytics;
  onChange: (text: string) => void;
  isDisabled?: boolean;
  value?: string; // when value is undefined, TextInput acts as not controlled
}

type StyleSheetType = {
  input: ViewStyle;
  text: ViewStyle;
  spaced: ViewStyle;
  fullWitdh: ViewStyle;
};

const createStyleSheet = (brandTheme: Brand, theme: Theme): StyleSheetType =>
  StyleSheet.create({
    // eslint-disable-next-line @coorpacademy/coorpacademy/no-overwriting-spread
    input: {
      padding: theme.spacing.tiny,
      borderColor: theme.colors.gray.lightMedium,
      borderRadius: theme.radius.regular,
      minWidth: 175,
      marginHorizontal: 12,
      paddingVertical: 16,
      ...BOX_STYLE,
      backgroundColor: theme.colors.white
    },
    text: {
      borderColor: brandTheme?.colors?.primary,
      color: brandTheme?.colors?.primary || theme.colors.gray.medium,
      fontWeight: theme.fontWeight.bold,
      fontSize: theme.fontSize.regular,
      textAlign: 'center'
    },
    spaced: {
      paddingVertical: theme.spacing.tiny
    },
    fullWitdh: {
      width: '100%'
    }
  });

const logEvent = (eventName: string, analytics: Analytics, questionType: QuestionType) => {
  analytics &&
    analytics.logEvent(eventName, {
      id: `question-input-text`,
      questionType
    });
};

const FreeText = (props: Props) => {
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {brandTheme, theme, translations} = templateContext;
  const PLACEHOLDER_COLOR = theme.colors.gray.medium;

  // ------------------------------------

  const {
    analytics,
    questionType,
    fullWidth = false,
    testID,
    onChange,
    isDisabled = false,
    value
  } = props;

  // ------------------------------------

  const handleFocus = useCallback(
    () => analytics && logEvent(ANALYTICS_EVENT_TYPE.INPUT_FOCUS, analytics, questionType),
    [analytics, questionType]
  );

  const handleBlur = useCallback(
    () => analytics && logEvent(ANALYTICS_EVENT_TYPE.INPUT_BLUR, analytics, questionType),
    [analytics, questionType]
  );

  // ------------------------------------

  useEffect(() => {
    const _stylesheet = createStyleSheet(brandTheme, theme);
    setStylesheet(_stylesheet);
  }, [brandTheme, theme]);

  // ------------------------------------

  if (!styleSheet) {
    return null;
  }

  return (
    <View style={[styleSheet.spaced, fullWidth && styleSheet.fullWitdh]}>
      <TextInput
        style={[styleSheet.input, styleSheet.text]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={onChange}
        placeholder={translations.typeHere}
        placeholderTextColor={PLACEHOLDER_COLOR}
        value={value}
        testID={testID}
        editable={!isDisabled}
        selectTextOnFocus={!isDisabled}
      />
    </View>
  );
};

export default FreeText;
