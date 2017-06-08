import React from 'react';
import PropTypes from 'prop-types';
import Select from '../../atom/select';
import InputText from '../../atom/input-text';
import InputCheckbox from '../../atom/input-checkbox';
import InputSwitch from '../../atom/input-switch';
import ImageUpload from '../../atom/image-upload';
import style from './style.css';

const SetupSlide = props => {
  const {fields = []} = props;

  const buildInput = field => {
    const {type} = field;
    switch (type) {
      case 'switch':
        return <InputSwitch {...field} />;
      case 'select':
        return <Select {...field} />;
      case 'checkbox':
        return <InputCheckbox {...field} />;
      case 'image':
        return <ImageUpload {...field} />;
      default:
        return <InputText {...field} />;
    }
  };

  const buildField = (field, index) => {
    const input = buildInput(field);

    return (
      <div className={style.field} key={index}>
        {input}
      </div>
    );
  };

  const fieldsList = fields.map(buildField);

  return (
    <div className={style.wrapper}>
      {fieldsList}
    </div>
  );
};

SetupSlide.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired
    })
  )
};
export default SetupSlide;
