import React from 'react';
import {map, noop} from 'lodash/fp';
import RadioWithTitle from '../../atom/radio-with-title';
import {TypeFieldModel} from './types';
import style from './type-field.css';

// Selection, available choices and editability are provided by App.
const TypeField = ({model, disabled}: {model: TypeFieldModel; disabled: boolean}) => (
  <fieldset className={style.typeField} disabled={disabled || model.disabled}>
    <legend>{model.label}</legend>
    {map(
      choice => (
        <div key={choice.id} className={style.typeChoice}>
          <RadioWithTitle
            name={model.id}
            checked={choice.checked}
            disabled={disabled || model.disabled || choice.disabled}
            onChange={disabled || model.disabled || choice.disabled ? noop : choice.onChange}
            aria-label={choice.title}
            title={{
              type: 'form-group',
              title: choice.title,
              subtitle: choice.description,
              subtitleSize: 'extra-small',
              'data-name': choice.id
            }}
          />
        </div>
      ),
      model.choices
    )}
  </fieldset>
);

export default TypeField;
