import React, {useCallback} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import QuestionChoice from '../../../../atom/choice/index.native';
import QuestionDraggable from '../draggable/index.native';
import QuestionTemplate from '../template/index.native';
import QuestionSlider from '../slider/index.native';
import FreeText from '../../free-text/index.native';

import {useTemplateContext} from '../../../../template/app-review/template-context';
import {ANALYTICS_EVENT_TYPE} from '../../../../variables/analytics';

import type {QuestionType, Choice} from '../../../../types/progression-engine';

export type Props = {
  type: QuestionType;
  isDisabled?: boolean;
  template?: string;
  items: Array<Choice>;
  min?: number;
  max?: number;
  unit?: string;
  step?: number;
  value?: number;
  onInputValueChange?: (value: string) => void;
  onSliderChange?: (value: number) => void;
  // --- mobile learner only
  onItemInputChange?: (item: Choice, value: string) => void;
  onItemPress?: (item: Choice) => void;
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
    // backgroundColor: '#967', // flex-debug
  },
  choice: {
    paddingVertical: 5
  }
});

const Switch = (props: Props) => {
  const templateContext = useTemplateContext();
  const {analytics, store} = templateContext;
  const {focusedSelectId, handleBlur, handleFocus} = store;

  const {
    type,
    template,
    isDisabled,
    items,
    min,
    max,
    unit,
    value,
    step,
    onSliderChange,
    onItemPress,
    onItemInputChange,
    onInputValueChange
  } = props;

  const handleItemPress = useCallback(
    (choice: Choice) => () => {
      if (choice.onPress) {
        // e.g. app-review
        choice.onPress();
      } else if (onItemPress) {
        // e.g. learner
        onItemPress(choice);
      }
    },
    [onItemPress]
  );

  const handleItemInputChange = useCallback(
    (choice: Choice, _value: string) => {
      if (choice.onPress) {
        // e.g. app-review
        choice.onPress(_value);
      } else if (onItemInputChange) {
        // e.g. learner
        onItemInputChange(choice, _value);
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
              isSelected={item.selected}
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
              isSelected={item.selected}
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
        // eslint-disable-next-line no-console
        console.warn('type template must implement handleFocus etc within Context.store');
        return <View />;
      }

      return (
        <View testID="question-choices">
          <QuestionTemplate
            isDisabled={isDisabled}
            template={template || ''}
            choices={items}
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
          <QuestionDraggable choices={items} onPress={handleItemPress} />
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
