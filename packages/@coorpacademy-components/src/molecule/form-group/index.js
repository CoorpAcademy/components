import React, {PropTypes} from 'react';
import map from 'lodash/fp/map';
import InputText from '../../atom/input-text';
import InputColor from '../../atom/input-color';
import Select from '../../atom/select';
import style from './style.css';

const buildField = (field, index) => {
  switch (field.type) {
    case 'color':
      return (
        <InputColor
          key={index}
          {...field}
        />
      );
    case 'select':
      return (
        <Select
          key={index}
          {...field}
        />
      );
    default:
      return (
        <InputText
          key={index}
          {...field}
        />
      );
  }
};

const FormGroup = props => {
  const {title, fields = []} = props;

  return (
    <fieldset className={style.set}>
      <legend>{title}</legend>
      <div>
        {fields.map(buildField)}
      </div>
    </fieldset>
  );
};

FormGroup.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired
};

export default FormGroup;
