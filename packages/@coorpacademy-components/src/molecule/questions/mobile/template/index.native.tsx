import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import trim from 'lodash/fp/trim';
import last from 'lodash/fp/last';

import Html from '../../../../atom/html/index.native';
import Select from '../../../../atom/select-modal/index.native';
import Space from '../../../../atom/space/index.native';
import {FocusedSelectId, HandleBlur, HandleFocus} from '../../../../types/app-review.d';
import type {Choice} from '../../../../types/progression-engine.d';
import FreeText from '../../free-text/index.native';
import {useTemplateContext} from '../../../../template/app-review/template-context';
import {Theme} from '../../../../variables/theme.native';
import parseTemplateString from '../../../../util/parse-template-string';

const createStyleSheet = (theme: Theme) => ({
  section: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  spaced: {
    paddingVertical: theme.spacing.tiny
  },
  input: {
    padding: theme.spacing.tiny,
    borderWidth: 1,
    borderColor: theme.colors.gray.lightMedium,
    borderRadius: theme.radius.common,
    backgroundColor: theme.colors.white,
    minWidth: 175
  },
  htmlText: {
    padding: theme.spacing.tiny,
    color: theme.colors.black,
    fontWeight: theme.fontWeight.bold,
    lineHeight: 30
  },
  text: {
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

type SectionProps = {
  isDisabled: boolean;
  userChoices: Array<string>;
  section: Array<TemplatePart>;
  items: Array<Choice>;
  index: number;
  onInputChange: (item: Choice, value: string) => void;
  focusedSelectId: FocusedSelectId;
  handleBlur: HandleBlur;
  handleFocus: HandleFocus;
  styles: any;
};

const Section = ({
  section,
  items,
  index,
  focusedSelectId,
  onInputChange,
  userChoices,
  handleBlur,
  handleFocus,
  isDisabled,
  styles
}: SectionProps) => {
  const prefix = `question-section-${index + 1}`;

  return (
    <View style={styles.section} key={`container-${prefix}`}>
      {section.map((part, id) => {
        return (
          <View key={`${prefix}-${id}`} style={{flexDirection: 'row'}}>
            <Item
              prefix={prefix}
              part={part}
              items={items}
              index={id}
              focusedSelectId={focusedSelectId}
              isDisabled={isDisabled}
              userChoices={userChoices}
              handleBlur={handleBlur}
              handleFocus={handleFocus}
              onInputChange={onInputChange}
              styles={styles}
            />
            <Space type="micro" />
          </View>
        );
      })}
    </View>
  );
};

type ItemProps = {
  part: TemplatePart;
  items: Array<Choice>;
  index: number;
  prefix: string;
  isDisabled?: boolean;
  userChoices: Array<string>;
  onInputChange: (item: Choice, value: string) => void;
  focusedSelectId: FocusedSelectId;
  handleBlur: HandleBlur;
  handleFocus: HandleFocus;
  styles: any;
};

const Item = (props: ItemProps) => {
  const {
    part,
    index,
    prefix,
    isDisabled = false,
    focusedSelectId,
    items,
    userChoices,
    onInputChange,
    handleBlur,
    handleFocus,
    styles
  } = props;

  const templateContext = useTemplateContext();
  const {theme, brandTheme, translations} = templateContext;

  const inputNames = items.map(item => item.name);
  const id = `${prefix}-part-${index + 1}`;
  const isFocused = focusedSelectId === id;

  const selectedStyle = brandTheme && {
    borderColor: brandTheme.colors.primary,
    color: brandTheme.colors.primary
  };

  if (part.type === 'answerField' && inputNames.includes(part.value)) {
    const itemIndex = items.findIndex(_item => _item.name === part.value);
    const item = items[itemIndex];
    const value = userChoices[itemIndex];

    if (!item || !item.type || !item.name) {
      return null;
    }

    const disabledSuffix = isDisabled ? '-disabled' : '';
    const selectedSuffix = value ? '-selected' : '';

    const handleInputChange = (_item: Choice) => (_value: string) => onInputChange(_item, _value);

    if (item.type === 'text') {
      return (
        <View style={styles.spaced} testID={id}>
          <FreeText
            key={id}
            isDisabled={isDisabled}
            onChange={handleInputChange(item)}
            value={value}
            testID={`${id}-text${selectedSuffix}${disabledSuffix}`}
            questionType="template"
          />
        </View>
      );
    }

    if (item.type === 'select') {
      return (
        <View style={styles.spaced} testID={id}>
          <Select
            isDisabled={isDisabled}
            questionType="template"
            values={item.items}
            value={value}
            placeholder={translations.selectAnAnswer}
            isFocused={isFocused}
            onBlur={handleBlur}
            onFocus={handleFocus(id)}
            onChange={handleInputChange(item)}
            textStyle={styles.text}
            style={[styles.input, value && selectedStyle]}
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
  items: Array<Choice>;
  userChoices: Array<string>;
  onInputChange: (item: Choice, value: string) => void;
  focusedSelectId: FocusedSelectId;
  handleBlur: HandleBlur;
  handleFocus: HandleFocus;
};

const QuestionTemplate = (props: Props) => {
  const {
    template,
    onInputChange,
    userChoices,
    items,
    handleBlur,
    handleFocus,
    focusedSelectId,
    isDisabled = false
  } = props;

  const templateContext = useTemplateContext();
  const {theme} = templateContext;

  const [styleSheet, setStylesheet] = useState<any | null>(null);

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!template || !styleSheet) {
    return null;
  }

  const parts = parseTemplateString(template);

  const sections: Array<Array<TemplatePart>> = parts.reduce((result, item) => {
    const section = last(result) || [];
    return result.slice(0, -1).concat([section.concat([item])]);
  }, []);

  return (
    <View style={{flex: 1}} testID="question-template">
      {sections.map((section, index) => (
        <Section
          key={index}
          section={section}
          items={items}
          index={index}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          focusedSelectId={focusedSelectId}
          onInputChange={onInputChange}
          userChoices={userChoices}
          isDisabled={isDisabled}
          styles={styleSheet}
        />
      ))}
    </View>
  );
};

export default QuestionTemplate;
