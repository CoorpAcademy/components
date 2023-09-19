import PropTypes from 'prop-types';
import InputFileDraggable from '../../atom/input-file-draggable';
import RadioWithTitle from '../../atom/radio-with-title';
import {RadioWithTitleProps} from '../../atom/radio-with-title/types';
import SelectMultiple from '../select-multiple';

const propTypes = {
  radioWithTitle: PropTypes.shape(RadioWithTitle.propTypes),
  field: PropTypes.oneOfType([
    PropTypes.shape(SelectMultiple.propTypes),
    PropTypes.shape(InputFileDraggable.propTypes)
  ]),
  childType: PropTypes.oneOf(['select-multiple', 'massive-upload'])
};

export type TitleRadioWrapperProps = {
  radioWithTitle: RadioWithTitleProps;
  field: typeof SelectMultiple.propTypes | typeof InputFileDraggable.propTypes;
  childType: 'select-multiple' | 'massive-upload';
};

export default propTypes;
