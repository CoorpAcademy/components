import React from 'react';
import map from 'lodash/fp/map';
import {checker, createValidate} from '../../util/validation';
import Select from '../../atom/select';
import InputText from '../../atom/input-text';
import InputColor from '../../atom/input-color';
import InputCheckbox from '../../atom/input-checkbox';
import InputReadonly from '../../atom/input-readonly';
import InputSwitch from '../../atom/input-switch';
import InputTextarea from '../../atom/input-textarea';
import InputDoublestep from '../../atom/input-doublestep';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    subtitle: checker.string.optional,
    disabled: checker.bool.optional,
    fields: checker.arrayOf(checker.shape({
      type: checker.string
    }))
  }),
  children: checker.none
});

const BrandFormGroup = ({children, ...props}) => {
  const {
    title,
    subtitle = '',
    fields
  } = props;

  const buildInput = field => {
    const {
      type
    } = field;
    switch (type) {
      case 'color':
        return (
          <InputColor {...field} />
        );
      case 'readonly':
        return (
          <InputReadonly {...field} />
        );
      case 'switch':
        return (
          <InputSwitch {...field} />
        );
      case 'textarea':
        return (
          <InputTextarea {...field} />
        );
      case 'doublestep':
        return (
          <InputDoublestep {...field} />
        );
      case 'select':
        return (
          <Select {...field} />
        );
      case 'checkbox':
        return (
          <InputCheckbox {...field} />
        );
      default:
        return (
          <InputText {...field} />
        );
    }
  };

  const buildField = field => {
    const input = buildInput(field);

    return (
      <div className={style.field}>
        {input}
      </div>
    );
  };

  const fieldsList = map(buildField, fields);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
      {fieldsList}
    </div>
  );
};

BrandFormGroup.validate = createValidate(conditions);
export default BrandFormGroup;
