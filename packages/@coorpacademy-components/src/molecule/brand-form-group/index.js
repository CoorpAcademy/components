import React from 'react';
import PropTypes from 'prop-types';
import {keys, map, snakeCase} from 'lodash/fp';
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
import Title from '../../atom/title';
import Roles from '../coorp-manager-roles';
import TitleAndCheckBoxWrapper from '../title-and-checkbox-wrapper';
import ButtonLink from '../../atom/button-link';
import style from './style.css';

const inputContainerStyle = {
  default: style.defaultWidth,
  medium: style.mediumWidth,
  large: style.largeWidth
};

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
      return <Select {...field} theme={'coorpmanager'} />;
    case 'selectMultiple':
      return <SelectMultiple {...field} />;
    case 'checkbox':
      return <InputCheckbox {...field} />;
    case 'image':
      return (
        <div className={style.imageUploadContainer}>
          <ImageUpload {...field} />
        </div>
      );
    case 'bulkUpload':
      return (
        <div className={style.bulkUploadContainer}>
          <ImageUpload {...field} />
        </div>
      );
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
    case 'buttonLink':
      return <ButtonLink {...field} type={field.buttonType} />;
    case 'roles':
      return <Roles {...field} />;
    case 'titleAndCheckBoxWrapper':
      return <TitleAndCheckBoxWrapper {...field} />;
    default:
      return <InputText {...field} />;
  }
};

const buildField = (field, index) => {
  const input = buildInput(field);
  const {theme, size = 'default'} = field;
  const styleInput = theme === 'coorpmanager' ? inputContainerStyle[size] : style.field;

  return (
    <div className={styleInput} key={index}>
      {input}
    </div>
  );
};

const defineLayoutClass = layout => {
  if (layout === 'grid') return classNames(style.grid);
  else if (layout === 'bulkLayout') return classNames(style.layoutBulk);
  else return classNames(null);
};

const BrandFormGroup = props => {
  const {
    title,
    subtitle = '',
    fieldsLayout = '',
    groupLayout = '',
    fields = [],
    subtitleSize = 'standard'
  } = props;
  const fieldsList = map.convert({cap: false})(buildField, fields);
  const layout = defineLayoutClass(fieldsLayout);

  return (
    <div
      data-name={`brand_form_group_${snakeCase(title)}`}
      className={classNames(style.wrapper, groupLayout === 'grid' && style.groupGrid)}
    >
      <div className={style.titleWrapper}>
        <Title title={title} subtitle={subtitle} subtitleSize={subtitleSize} type={'form-group'} />
      </div>
      <div className={layout}>{fieldsList}</div>
    </div>
  );
};

BrandFormGroup.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleSize: PropTypes.string,
  fieldsLayout: PropTypes.string,
  groupLayout: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        ...Autocomplete.propTypes,
        type: PropTypes.oneOf(['autoComplete']),
        size: PropTypes.oneOf(keys(inputContainerStyle))
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
        type: PropTypes.oneOf(['textarea']),
        size: PropTypes.oneOf(keys(inputContainerStyle))
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
        type: PropTypes.oneOf(['select']),
        size: PropTypes.oneOf(keys(inputContainerStyle))
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
        ...ImageUpload.propTypes,
        type: PropTypes.oneOf(['bulkImage'])
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
        type: PropTypes.oneOf(['text']),
        size: PropTypes.oneOf(keys(inputContainerStyle))
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
        ...ButtonLink.propTypes,
        buttonType: ButtonLink.propTypes.type,
        type: PropTypes.oneOf(['buttonLink'])
      }),
      PropTypes.shape({
        ...SelectMultiple.propTypes,
        type: PropTypes.oneOf(['selectMultiple'])
      }),
      PropTypes.shape({
        ...Roles.propTypes,
        type: PropTypes.oneOf(['roles'])
      }),
      PropTypes.shape(InputText.propTypes)
    ])
  )
};
export default BrandFormGroup;
