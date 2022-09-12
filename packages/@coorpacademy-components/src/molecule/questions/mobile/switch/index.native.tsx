import React, {useCallback} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import QuestionChoice from '../../../../atom/choice/index.native';
import Space from '../../../../atom/space/index.native';
import QuestionDraggable from '../draggable/index.native';
import QuestionTemplate from '../template/index.native';
import QuestionSlider from '../slider/index.native';
import FreeText from '../../free-text/index.native';

import {useTemplateContext} from '../../../../template/app-review/template-context';
import {ANALYTICS_EVENT_TYPE} from '../../../../variables/analytics';

import {FocusedSelectId, HandleBlur, HandleFocus} from '../../../../types/app-review';
import type {QuestionType, Choice} from '../../../../types/progression-engine';

export type Props = {
  type: QuestionType;
  isDisabled?: boolean;
  template?: string;
  items: Array<Choice>;
  userChoices?: Array<string>;
  onItemPress?: (item: Choice) => void;
  onSliderChange?: (value: number) => void;
  min?: number;
  max?: number;
  unit?: string;
  step?: number;
  value?: number;
  onItemInputChange?: (item: Choice, value: string) => void;
  onInputValueChange?: (value: string) => void;
  focusedSelectId?: FocusedSelectId;
  handleFocus?: HandleFocus;
  handleBlur?: HandleBlur;
};

const styleSheet = StyleSheet.create({
  cards: {
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  card: {
    flex: 1
  },
  choices: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center'
  },
  choice: {
    paddingVertical: 5
  }
});

const Switch = (props: Props) => {
  const templateContext = useTemplateContext();
  const {analytics} = templateContext;

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

  // for mobile learner TODO uniform redux logic
  const isSelected = (choice: Choice): boolean => userChoices && userChoices.includes(choice.label);

  const handleItemPress = (item: Choice) => () => {
    if (onItemPress) {
      // e.g. mobile learner TODO uniform redux logic
      onItemPress(item);
    }

    if (item.onPress) {
      // e.g. app-review
      item.onPress();
    }
  };

  const handleItemInputChange = useCallback(
    (item: Choice, _value: string) => {
      if (onItemInputChange) {
        onItemInputChange(item, _value);
      }
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

      if (onSliderChange) {
        onSliderChange(_value);
      }
    },
    [analytics, onSliderChange]
  );

  switch (type) {
    case 'qcm':
      return (
        <View testID="question-choices" style={styleSheet.choices}>
          {items.map((item, index) => (
            <QuestionChoice
              key={`question-choice-${item._id}`}
              onPress={handleItemPress(item)}
              isDisabled={isDisabled}
              isSelected={item.selected || isSelected(item)}
              testID={`question-choice-${item._id}`}
              style={styleSheet.choice}
              questionType={type}
            >
              {item.label}
            </QuestionChoice>
          ))}
        </View>
      );
    case 'qcmGraphic':
      return (
        <View testID="question-choices" style={styleSheet.choices}>
          {items.map((item, index) => (
            <QuestionChoice
              key={`question-choice-${item._id}`}
              onPress={handleItemPress(item)}
              media={item.media}
              isDisabled={isDisabled}
              isSelected={item.selected || isSelected(item)}
              testID={`question-choice-${item._id}`}
              style={styleSheet.choice}
              questionType={type}
            >
              {item.label}
            </QuestionChoice>
          ))}
        </View>
      );
    case 'slider': {
      if (min === undefined || max === undefined) {
        return <View />;
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
      if (handleBlur === undefined || handleFocus === undefined || focusedSelectId === undefined) {
        return <View />;
      }

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
      if (!onItemPress) {
        return <View />;
      }

      return (
        <View testID="question-draggable">
          <QuestionDraggable choices={items} userChoices={userChoices} onPress={onItemPress} />
        </View>
      );
    case 'basic':
      if (!onInputValueChange) {
        return <View />;
      }

      return (
        <FreeText
          fullWidth
          onChange={onInputValueChange}
          testID="question-input-text"
          questionType="basic"
          isDisabled={isDisabled}
        />
      );
    default:
      return (
        <View>
          <Text>Unhandled type: {type}</Text>
        </View>
      );
  }
};

export default Switch;
