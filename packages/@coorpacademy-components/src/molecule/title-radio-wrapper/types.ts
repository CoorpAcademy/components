import PropTypes from 'prop-types';
import ImageUpload from '../../atom/image-upload';
import RadioWithTitle from '../../atom/radio-with-title';
import {RadioWithTitleProps} from '../../atom/radio-with-title/types';
import SelectMultiple from '../select-multiple';

const propTypes = {
  radioWithTitle: PropTypes.shape(RadioWithTitle.propTypes),
  field: PropTypes.oneOfType([
    PropTypes.shape(SelectMultiple.propTypes),
    PropTypes.shape(ImageUpload.propTypes)
  ]),
  childType: PropTypes.oneOf(['select-multiple', 'massive-upload'])
};

export type TitleRadioWrapperProps = {
  radioWithTitle: RadioWithTitleProps;
  field: typeof SelectMultiple.propTypes | typeof ImageUpload.propTypes;
  childType: 'select-multiple' | 'massive-upload';
};

export default propTypes;
