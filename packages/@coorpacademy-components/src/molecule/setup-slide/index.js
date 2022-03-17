import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import Select from '../../atom/select';
import InputReadonly from '../../atom/input-readonly';
import InputText from '../../atom/input-text';
import InputCheckbox from '../../atom/input-checkbox';
import InputDoublestep from '../../atom/input-doublestep';
import InputSwitch from '../../atom/input-switch';
import ImageUpload from '../../atom/image-upload';
import SetupCohortItem from '../setup-cohort-item';
import MessagePopin from '../message-popin';
import style from './style.css';

const SetupSlide = props => {
  const {fields} = props;
  const buildInput = field => {
    const {type} = field;
    switch (type) {
      case 'switch':
        return <InputSwitch {...field} />;
      case 'select':
        return <Select {...field} theme={'coorpmanager'} />;
      case 'checkbox':
        return <InputCheckbox {...field} />;
      case 'image':
        return <div className={style.imageUploadContainer}><ImageUpload {...field} /></div>;
      case 'splitForm':
        return <SetupCohortItem field={field} />;
      case 'alert':
        return <MessagePopin header={field.title} content={field.subtitle} />;
      case 'readonly':
        return <InputReadonly {...field} />;
      case 'doublestep':
        return <InputDoublestep {...field} />;
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

  const fieldsList = map.convert({cap: false})(buildField, fields);

  return <div className={style.wrapper}>{fieldsList}</div>;
};

SetupSlide.defaultProps = {
  fields: []
};

SetupSlide.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        ...InputSwitch.propTypes,
        type: PropTypes.oneOf(['switch'])
      }),
      PropTypes.shape({
        ...Select.propTypes,
        type: PropTypes.oneOf(['select'])
      }),
      PropTypes.shape({
        ...InputCheckbox.propTypes,
        type: PropTypes.oneOf(['checkbox'])
      }),
      PropTypes.shape({
        ...ImageUpload.propTypes,
        type: PropTypes.oneOf(['image'])
      }),
      PropTypes.shape({
        ...InputReadonly.propTypes,
        type: PropTypes.oneOf(['readonly'])
      }),
      PropTypes.shape({
        ...InputDoublestep.propTypes,
        type: PropTypes.oneOf(['doublestep'])
      }),
      PropTypes.shape({
        ...SetupCohortItem.propTypes,
        type: PropTypes.oneOf(['splitForm'])
      }),
      PropTypes.shape({
        ...MessagePopin.propTypes,
        type: PropTypes.oneOf(['alert'])
      }),
      PropTypes.shape(InputText.propTypes)
    ])
  )
};
export default SetupSlide;
