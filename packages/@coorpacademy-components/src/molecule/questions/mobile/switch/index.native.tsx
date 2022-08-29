import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import QuestionChoice from '../../../../atom/choice/index.native';
import Space from '../../../../atom/space/index.native';
import QuestionDraggable from '../draggable/index.native';
import QuestionTemplate from '../template/index.native';
import FreeText from '../../free-text/index.native';

import type {QuestionType, Choice} from '../../../../types/progression-engine';

import QuestionSlider from '../slider/index.native';

// import useAppContext from '../../app-shared/contexts/use-app-context';
import {useTemplateContext} from '../../../../template/app-review/template-context';
import {Theme} from '../../../../variables/theme.native';
import {ANALYTICS_EVENT_TYPE} from '../../../../variables/analytics';
import {FocusedSelectId, HandleBlur, HandleFocus} from '../../../../types/app-review';

export interface Props {
  type: QuestionType;
  isDisabled?: boolean;
  template?: string;
  items: Array<Choice>;
  userChoices: Array<string>;
  onItemPress: (item: Choice) => void;
  onSliderChange: (value: number) => void;
  min?: number;
  max?: number;
  unit?: string;
  step?: number;
  value?: number;
  onItemInputChange: (item: Choice, value: string) => void;
  onInputValueChange: (value: string) => void;
  focusedSelectId: FocusedSelectId;
  handleFocus: HandleFocus;
  handleBlur: HandleBlur;
}

const createStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    cards: {
      flexDirection: 'row',
      alignItems: 'stretch'
    },
    card: {
      flex: 1
    }
  });

const Switch = (props: Props) => {
  const templateContext = useTemplateContext();
  const {analytics, theme} = templateContext;
  const [styleSheet, setStylesheet] = useState<any | null>(null);

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  const {
    type,
    template,
    isDisabled,
    items,
    userChoices,
    min,
    max,
    unit,
    value,
    step,
    onSliderChange,
    onItemPress,
    onItemInputChange,
    onInputValueChange,
    focusedSelectId,
    handleFocus,
    handleBlur
  } = props;

  const isSelected = (choice: Choice): boolean => userChoices && userChoices.includes(choice.label);
  const handleItemPress = (item: Choice) => () => onItemPress(item);
  const handleItemInputChange = useCallback(
    (item: Choice, _value: string) => {
      onItemInputChange(item, _value);
    },
    [onItemInputChange]
  );

  const handleSlidingComplete = useCallback(
    _value => {
      analytics &&
        analytics.logEvent(ANALYTICS_EVENT_TYPE.SLIDE, {
          id: 'slider',
          questionType: 'slider'
        });

      onSliderChange(_value);
    },
    [analytics, onSliderChange]
  );

  switch (type) {
    case 'qcm':
      return (
        <View testID="question-choices">
          {items.map((item, index) => (
            <View key={`question-choice-${item._id}`}>
              {index > 0 ? <Space /> : null}
              <QuestionChoice
                onPress={handleItemPress(item)}
                isDisabled={isDisabled}
                isSelected={isSelected(item)}
                testID={`question-choice-${item._id}`}
                questionType={type}
              >
                {item.label}
              </QuestionChoice>
            </View>
          ))}
        </View>
      );
    case 'qcmGraphic':
      return (
        <View testID="question-choices">
          {items.map((item, index) => {
            return (
              <View key={`question-choice-row-${item._id}`}>
                {index > 0 ? <Space /> : null}
                <View style={styleSheet.cards}>
                  <QuestionChoice
                    onPress={handleItemPress(item)}
                    media={item.media}
                    isDisabled={isDisabled}
                    isSelected={isSelected(item)}
                    testID={`question-choice-${item._id}`}
                    style={styleSheet.card}
                    questionType={type}
                  >
                    {item.label}
                  </QuestionChoice>
                  <Space />
                </View>
              </View>
            );
          })}
        </View>
      );
    case 'slider': {
      if (min === undefined || max === undefined) {
        return null;
      }

      return (
        <QuestionSlider
          min={min}
          max={max}
          unit={unit}
          value={value}
          step={step}
          onSlidingComplete={handleSlidingComplete}
          testID="question-slider"
        />
      );
    }
    case 'template':
      return (
        <View testID="question-choices">
          <QuestionTemplate
            isDisabled={isDisabled}
            template={template || ''}
            items={items}
            userChoices={userChoices}
            onInputChange={handleItemInputChange}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            focusedSelectId={focusedSelectId}
          />
        </View>
      );
    case 'qcmDrag':
      return (
        <View testID="question-draggable">
          <QuestionDraggable choices={items} userChoices={userChoices} onPress={onItemPress} />
        </View>
      );
    case 'basic':
      return (
        <FreeText
          fullWidth
          onChange={onInputValueChange}
          testID="question-input-text"
          questionType="basic"
          isDisabled={isDisabled}
          value=""
        />
      );
    default:
      return null;
  }
};

export default Switch;
