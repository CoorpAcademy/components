import React, {useEffect, useState} from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';

import trim from 'lodash/fp/trim';

import Html from '../../../../atom/html/index.native';
import Select from '../../../../atom/select-modal/index.native';
import Space from '../../../../atom/space/index.native';
import type {TemplateListOfChoices, TemplateTextChoice} from '../../types';
import FreeText from '../../free-text/index.native';
import {
  FocusedSelectId,
  HandleBlur,
  HandleFocus,
  useTemplateContext
} from '../../../../template/app-review/template-context';
import {Theme} from '../../../../variables/theme.native';
import parseTemplateString from '../../../../util/parse-template-string';
import {BOX_STYLE} from '../../../../variables/shadow';

type StyleSheetType = {
  container: ViewStyle;
  spaced: ViewStyle;
  htmlText: TextStyle;
  selectInput: ViewStyle;
  selectText: TextStyle;
};

const createStyleSheet = (theme: Theme): StyleSheetType => ({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  spaced: {
    paddingVertical: theme.spacing.tiny
  },
  htmlText: {
    color: theme.colors.black,
    fontWeight: theme.fontWeight.bold,
    lineHeight: 25
  },
  // eslint-disable-next-line @coorpacademy/coorpacademy/no-overwriting-spread
  selectInput: {
    padding: theme.spacing.tiny,
    borderRadius: theme.radius.regular,
    minWidth: 175,
    marginHorizontal: 12,
    paddingVertical: 16,
    ...BOX_STYLE,
    backgroundColor: theme.colors.white
  },
  selectText: {
    color: theme.colors.gray.medium,
    fontWeight: theme.fontWeight.bold,
    fontSize: theme.fontSize.regular,
    textAlign: 'center'
  }
});

type TemplatePart = {
  type: 'string' | 'answerField';
  value: string;
};

type ItemProps = {
  part: TemplatePart;
  choices: Array<TemplateTextChoice | TemplateListOfChoices>;
  index: number;
  isDisabled?: boolean;
  onInputChange: (item: TemplateTextChoice | TemplateListOfChoices, value: string) => void;
  focusedSelectId: FocusedSelectId;
  handleBlur: HandleBlur;
  handleFocus: HandleFocus;
  styles: StyleSheetType;
};

const Item = (props: ItemProps) => {
  const {
    part,
    index,
    isDisabled = false,
    focusedSelectId,
    choices,
    onInputChange,
    handleBlur,
    handleFocus,
    styles
  } = props;

  const templateContext = useTemplateContext();
  const {theme, brandTheme, translations} = templateContext;

  const inputNames = choices.map(choice => choice.name);
  const id = `question-part-${index + 1}`;
  const isFocused = focusedSelectId === id;

  const coloredText = brandTheme && {
    color: brandTheme.colors?.primary
  };

  if (part.type === 'answerField' && inputNames.includes(part.value)) {
    const choiceIndex = choices.findIndex(choice => choice.name === part.value);
    const choice = choices[choiceIndex];
    const {value} = choice;

    if (!choice || !choice.type || !choice.name) {
      return null;
    }

    const disabledSuffix = isDisabled ? '-disabled' : '';
    const selectedSuffix = value ? '-selected' : '';

    const handleInputChange =
      (_item: TemplateTextChoice | TemplateListOfChoices) => (_value: string) =>
        onInputChange(_item, _value);

    if (choice.type === 'text') {
      return (
        <View style={styles.spaced} testID={id}>
          <FreeText
            key={id}
            isDisabled={isDisabled}
            onChange={handleInputChange(choice)}
            value={value}
            testID={`${id}-text${selectedSuffix}${disabledSuffix}`}
            questionType="template"
          />
        </View>
      );
    }

    const selectInputStyle: TextStyle[] = [styles.selectInput];
    if (coloredText && value) {
      selectInputStyle.push(coloredText);
    }

    const selectTextStyle: TextStyle[] = [styles.selectText];
    if (coloredText && value) {
      selectTextStyle.push(coloredText);
    }

    if (choice.type === 'select') {
      return (
        <View style={styles.spaced} testID={id}>
          <Select
            isDisabled={isDisabled}
            questionType="template"
            values={choice.items}
            value={value}
            placeholder={translations.selectAnAnswer}
            isFocused={isFocused}
            onBlur={handleBlur}
            onFocus={handleFocus(id)}
            onChange={handleInputChange(choice)}
            textStyle={selectTextStyle}
            style={selectInputStyle}
            analyticsID={`${id}-select${selectedSuffix}${disabledSuffix}`}
            testID={`${id}-select${selectedSuffix}${disabledSuffix}`}
          />
        </View>
      );
    }
  }

  return (
    <Html key={id} fontSize={theme.fontSize.regular} testID={id} style={styles.htmlText}>
      {trim(part.value || '')}
    </Html>
  );
};

export type Props = {
  isDisabled?: boolean;
  template: string;
  choices: Array<TemplateTextChoice | TemplateListOfChoices>;
  onInputChange: (item: TemplateTextChoice | TemplateListOfChoices, value: string) => void;
  focusedSelectId: FocusedSelectId;
  handleBlur: HandleBlur;
  handleFocus: HandleFocus;
};

const QuestionTemplate = (props: Props) => {
  const {
    template,
    onInputChange,
    choices,
    handleBlur,
    handleFocus,
    focusedSelectId,
    isDisabled = false
  } = props;

  const templateContext = useTemplateContext();
  const {theme} = templateContext;

  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!template || !styleSheet) {
    return null;
  }

  const parts: TemplatePart[] = parseTemplateString(template);

  return (
    <View style={styleSheet.container} testID="question-template">
      {parts.map((part, id) => (
        <View key={`question-part-${id}`} style={{flexDirection: 'row'}}>
          <Item
            part={part}
            choices={choices}
            index={id}
            focusedSelectId={focusedSelectId}
            isDisabled={isDisabled}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            onInputChange={onInputChange}
            styles={styleSheet}
          />
          <Space type="micro" />
        </View>
      ))}
    </View>
  );
};

export default QuestionTemplate;
