import {View, StyleSheet, TextInput} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {useTemplateContext} from '../../../template/app-review/template-context';
import {ANALYTICS_EVENT_TYPE, Analytics} from '../../../variables/analytics';

type QuestionType = 'basic' | 'template';

interface Props {
  fullWitdh?: boolean;
  testID: string;
  questionType: QuestionType;
  analytics?: Analytics;
  onChange: (text: string) => void;
  isDisabled: boolean;
  value: string;
}

type StyleSheetType = {
  input: {
    padding: string;
    borderWidth: number;
    borderColor: string;
    borderRadius: number;
    backgroundColor: string;
    minWidth: number;
  };
  text: {
    color: string;
    fontWeight:
      | 'normal'
      | 'bold'
      | '100'
      | '200'
      | '300'
      | '400'
      | '500'
      | '600'
      | '700'
      | '800'
      | '900'
      | undefined;
    fontSize: number;
    textAlign: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  };
  spaced: {
    paddingVertical: number;
  };
  fullWitdh: {
    width: string;
  };
};

const createStyleSheet = (brandTheme, theme) =>
  StyleSheet.create({
    input: {
      padding: theme.spacing.tiny,
      borderWidth: 1,
      borderColor: theme.colors.gray.lightMedium,
      borderRadius: theme.radius.common,
      backgroundColor: theme.colors.white,
      minWidth: 175
    },
    text: {
      borderColor: brandTheme?.colors.primary,
      color: brandTheme?.colors.primary || theme.colors.gray.medium,
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

  const {analytics, questionType, fullWitdh = false, testID, onChange, isDisabled, value} = props;

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
    <View style={[styleSheet.input, styleSheet.spaced, fullWitdh && styleSheet.fullWitdh]}>
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
