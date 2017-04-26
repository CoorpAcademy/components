import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import Select from '../../atom/select';
import InputText from '../../atom/input-text';
import InputColor from '../../atom/input-color';
import InputCheckbox from '../../atom/input-checkbox';
import InputReadonly from '../../atom/input-readonly';
import InputSwitch from '../../atom/input-switch';
import InputTextarea from '../../atom/input-textarea';
import InputDoublestep from '../../atom/input-doublestep';
import ImageUpload from '../../atom/image-upload';
import SetupSlider from '../setup-slider';
import SetupSections from '../setup-sections';
import style from './style.css';

const BrandFormGroup = props => {
  const {
    title,
    subtitle = '',
    fieldsLayout = '',
    fields = []
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
      case 'image':
        return (
          <ImageUpload {...field} />
        );
      case 'slider':
        return (
          <SetupSlider {...field} />
        );
      case 'sections':
        return (
          <SetupSections {...field} />
        );
      case 'text':
        return (
          <InputText {...field} />
        );
      default:
        return (
          <InputText {...field} />
        );
    }
  };

  const buildField = (field, index) => {
    const input = buildInput(field);

    return (
      <div
        className={style.field}
        key={index}
      >
        {input}
      </div>
    );
  };

  const fieldsList = fields.map(buildField);
  const fieldsLayoutStyle = getOr('', fieldsLayout, style);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
      <div className={fieldsLayoutStyle}>
        {fieldsList}
      </div>
    </div>
  );
};

BrandFormGroup.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  fieldsLayout: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired
  }))
};
export default BrandFormGroup;
