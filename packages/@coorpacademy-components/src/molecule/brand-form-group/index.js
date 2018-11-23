import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import snakeCase from 'lodash/fp/snakeCase';
import Select from '../../atom/select';
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
import SetupSliderCohort from '../setup-cohort';
import SetupSections from '../setup-sections';
import style from './style.css';

const BrandFormGroup = props => {
  const {title, subtitle = '', fieldsLayout = '', fields = []} = props;

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
      case 'html':
        return <InputHTML {...field} />;
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
      case 'sliderCohort':
        return <SetupSliderCohort {...field} />;
      case 'sections':
        return <SetupSections {...field} />;
      case 'text':
        return <InputText {...field} />;
      case 'downloadbox':
        return <BrandDownloadBox {...field} />;
      case 'uploadbox':
        return <BrandUploadBox {...field} />;
      case 'button':
        return <Button {...field} />;
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
  return (
    <div data-name={`brand_form_group_${snakeCase(title)}`} className={style.wrapper}>
      <div className={style.title}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
      <div className={fieldsLayout === 'grid' ? style.grid : null}>{fieldsList}</div>
    </div>
  );
};

BrandFormGroup.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  fieldsLayout: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        type: PropTypes.oneOf(['color']),
        ...InputColor.propTypes
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['readonly']),
        ...InputReadonly.propTypes
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['switch']),
        ...InputSwitch.propTypes
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['textarea']),
        ...InputTextarea.propTypes
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['html']),
        ...InputHTML.propTypes
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['doublestep']),
        ...InputDoublestep.propTypes
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['select']),
        ...Select.propTypes
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['checkbox']),
        ...InputCheckbox.propTypes
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['image']),
        ...ImageUpload.propTypes
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['slider']),
        ...SetupSlider.propTypes
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['sliderCohort']),
        ...SetupSliderCohort.propTypes
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['sections']),
        ...SetupSections.propTypes
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['text']),
        ...InputText.propTypes
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['downloadbox']),
        ...BrandDownloadBox.propTypes
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['uploadbox']),
        ...BrandUploadBox.propTypes
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['button']),
        ...Button.propTypes
      }),
      PropTypes.shape(InputText.propTypes)
    ])
  )
};
export default BrandFormGroup;
