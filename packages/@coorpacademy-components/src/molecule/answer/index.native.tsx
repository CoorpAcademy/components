import React from 'react';
import {Choice, QuestionType} from '../questions/types';
import Switch, {Props as SwitchProps} from '../questions/mobile/switch/index.native';
import {AnswerProps} from './prop-types';

const convertType = (modelType: AnswerProps['model']['type']): QuestionType => {
  switch (modelType) {
    case 'freeText':
      return 'basic';
    case 'dropDown':
      return 'template';
    default:
      return modelType;
  }
};

const convertToChoices = (answers: AnswerProps['model']['answers'] = []): Choice[] =>
  answers.map((answer, index) => ({
    _id: `${index}`,
    label: answer.title,
    value: answer.title,
    onPress: answer.onClick || answer.onChange,
    selected: answer.selected,
    media: answer.image
      ? {
          type: 'img',
          src: [{url: answer.image}]
        }
      : undefined,
    // ---- custom properties for template choice
    type: answer.type,
    name: answer.name,
    items:
      answer.options &&
      answer.options.map(({name, selected, value}) => ({
        text: name,
        selected,
        value,
        _id: name
      }))
  }));

const Answer = (props: AnswerProps) => {
  const {
    model: {answers, onChange, template, type, onSliderChange, minLabel, maxLabel, title}
  } = props;

  const switchProps: SwitchProps = {
    type: convertType(type)
  };

  if (type === 'freeText') {
    switchProps.onInputValueChange = onChange;
  }

  if (type === 'qcm' || type === 'qcmDrag' || type === 'qcmGraphic' || type === 'template') {
    switchProps.choices = convertToChoices(answers);
  }

  if (type === 'template') {
    switchProps.template = template;
  }

  if (type === 'slider') {
    switchProps.onSliderChange = onSliderChange;
    switchProps.min = minLabel ? Number.parseInt(minLabel.split(' ')[0]) : 0;
    switchProps.max = maxLabel ? Number.parseInt(maxLabel.split(' ')[0]) : 1;
    switchProps.value = title ? Number.parseInt(title.split(' ')[0]) : 0;
    switchProps.unit = minLabel ? minLabel.split(' ')[1] : '';
  }

  return <Switch {...switchProps} />;
};

export default Answer;
