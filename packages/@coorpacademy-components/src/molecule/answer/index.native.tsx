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
  return answers.map(answer => ({
    ...answer
  }));
};

const Answer = (props: Props) => {
  const {
    model: {answers, onChange, type}
  } = props;

  console.log({props});
  const switchProps: SwitchProps = {
    type: convertType(type),
    items: convertToChoices(answers),
    onInputValueChange: onChange
  };
  return <Switch {...switchProps} />;
};

export default Answer;
