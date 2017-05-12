import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import getOr from 'lodash/fp/getOr';
import Select from '../../atom/select';
import InputText from '../../atom/input-text';
import InputColor from '../../atom/input-color';
import InputCheckbox from '../../atom/input-checkbox';
import InputReadonly from '../../atom/input-readonly';
import InputSwitch from '../../atom/input-switch';
import BrandUploadBox from '../../molecule/brand-upload-box';
import BrandDownloadBox from '../../molecule/brand-download-box';
import Button from '../../atom/button';
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
    fields = [], 
    branddlbox, 
    branduploadbox, 
    ssoconnection
  } = props;

  const buildInput = field => {
    const {type} = field;
    switch (type) {
      case 'color':
        return <InputColor {...field} />;
      case 'readonly':
        return <InputReadonly {...field} />;
      case 'switch':
        return <InputSwitch {...field} />;
      case 'textarea':
        return <InputTextarea {...field} />;
      case 'doublestep':
        return <InputDoublestep {...field} />;
      case 'select':
        return <Select {...field} />;
      case 'checkbox':
        return <InputCheckbox {...field} />;
      case 'image':
        return <ImageUpload {...field} />;
      case 'slider':
        return <SetupSlider {...field} />;
      case 'sections':
        return <SetupSections {...field} />;
      case 'text':
        return <InputText {...field} />;
      case 'downloadbox':
        return <BrandDownloadBox {...branddlbox} />;
      case 'uploadbox':
        return <BrandUploadBox {...branduploadbox} />;
      case 'connectButton':
        return <Button {...ssoconnection} />;  
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
  branddlbox: PropTypes.object,
  branduploadbox: PropTypes.object,
  ssoconnection: PropTypes.object,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired
    })
  )
};
export default BrandFormGroup;
