import React from 'react';
import PropTypes from 'prop-types';
import {map, snakeCase} from 'lodash/fp';
import classNames from 'classnames';
import Autocomplete from '../../atom/autocomplete';
import Select from '../../atom/select';
import SelectMultiple from '../select-multiple';
import InputText from '../../atom/input-text';
import InputColor from '../../atom/input-color';
import InputCheckbox from '../../atom/input-checkbox';
import InputReadonly from '../../atom/input-readonly';
import InputSwitch from '../../atom/input-switch';
import BrandUploadBox from '../brand-upload-box';
import BrandDownloadBox from '../brand-download-box';
import Button from '../../atom/button';
import InputTextarea from '../../atom/input-textarea';
import InputHTML from '../../atom/input-html';
import InputDoublestep from '../../atom/input-doublestep';
import ImageUpload from '../../atom/image-upload';
import SetupSlider from '../setup-slider';
import SetupSections from '../setup-sections';
import Roles from '../coorp-manager-roles';
import style from './style.css';

const buildInput = field => {
  const {type} = field;

  switch (type) {
    case 'autoComplete':
      return <Autocomplete {...field} />;
    case 'color':
      return <InputColor {...field} />;
    case 'readonly':
      return <InputReadonly {...field} />;
    case 'switch':
      return <InputSwitch {...field} />;
    case 'textarea':
      return <InputTextarea {...field} />;
    case 'html':
      return <InputHTML {...field} />;
    case 'doublestep':
      return <InputDoublestep {...field} />;
    case 'select':
      return <Select {...field} />;
    case 'selectMultiple':
      return <SelectMultiple {...field} />;
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
      return <BrandDownloadBox {...field} />;
    case 'uploadbox':
      return <BrandUploadBox {...field} />;
    case 'button':
    case 'link':
      return <Button {...field} />;
    case 'roles':
      return <Roles {...field} />;
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

const BrandFormGroup = props => {
  const {title, subtitle = '', fieldsLayout = '', formLayout = '', fields = []} = props;
  const fieldsList = map.convert({cap: false})(buildField, fields);

  return (
    <div
      data-name={`brand_form_group_${snakeCase(title)}`}
      className={classNames(style.wrapper, formLayout === 'grid' && style.formGrid)}
    >
      <div className={style.title}>
        {title ? <h3>{title}</h3> : null}
        <h4>{subtitle}</h4>
      </div>
      <div className={fieldsLayout === 'grid' ? style.grid : null}>{fieldsList}</div>
    </div>
  );
};

BrandFormGroup.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  fieldsLayout: PropTypes.string,
  formLayout: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        ...Autocomplete.propTypes,
        type: PropTypes.oneOf(['autoComplete'])
      }),
      PropTypes.shape({
        ...InputColor.propTypes,
        type: PropTypes.oneOf(['color'])
      }),
      PropTypes.shape({
        ...InputReadonly.propTypes,
        type: PropTypes.oneOf(['readonly'])
      }),
      PropTypes.shape({
        ...InputSwitch.propTypes,
        type: PropTypes.oneOf(['switch'])
      }),
      PropTypes.shape({
        ...InputTextarea.propTypes,
        type: PropTypes.oneOf(['textarea'])
      }),
      PropTypes.shape({
        ...InputHTML.propTypes,
        type: PropTypes.oneOf(['html'])
      }),
      PropTypes.shape({
        ...InputDoublestep.propTypes,
        type: PropTypes.oneOf(['doublestep'])
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
        ...SetupSlider.propTypes,
        type: PropTypes.oneOf(['slider'])
      }),
      PropTypes.shape({
        ...SetupSections.propTypes,
        type: PropTypes.oneOf(['sections'])
      }),
      PropTypes.shape({
        ...InputText.propTypes,
        type: PropTypes.oneOf(['text'])
      }),
      PropTypes.shape({
        ...BrandDownloadBox.propTypes,
        type: PropTypes.oneOf(['downloadbox'])
      }),
      PropTypes.shape({
        ...BrandUploadBox.propTypes,
        type: PropTypes.oneOf(['uploadbox'])
      }),
      PropTypes.shape({
        ...Button.propTypes,
        type: PropTypes.oneOf(['button'])
      }),
      PropTypes.shape({
        ...SelectMultiple.propTypes,
        type: PropTypes.oneOf(['selectMultiple'])
      }),
      PropTypes.shape(InputText.propTypes)
    ])
  )
};
export default BrandFormGroup;
