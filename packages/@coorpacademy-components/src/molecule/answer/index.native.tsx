import React from 'react';
import {Choice, QuestionType} from '../../types/progression-engine';
import Switch, {Props as SwitchProps} from '../questions/mobile/switch/index.native';
import {Props} from './prop-types';

const convertType = (modelType: Props['model']['type']): QuestionType => {
  switch (modelType) {
    case 'freeText':
      return 'basic';
    case 'dropDown':
      return 'template';
    default:
      return modelType;
  }
};

const convertToChoices = (answers: Props['model']['answers'] = []): Choice[] => {
  return answers.map((answer, index) => ({
    _id: `${index}`,
    label: answer.title,
    value: answer.title,
    onPress: answer.onClick,
    selected: answer.selected,
    media: {
      type: 'img',
      src: [{url: answer.image}]
    }
  }));
};

const Answer = (props: Props) => {
  const {
    model: {answers, onChange, type}
  } = props;

  const switchProps: SwitchProps = {
    type: convertType(type),
    items: convertToChoices(answers),
    onInputValueChange: onChange
  };

  console.log({items: switchProps.items});

  return <Switch {...switchProps} />;
};

export default Answer;
