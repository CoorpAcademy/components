import PropTypes from 'prop-types';
import DragAndDrop from '../../atom/drag-and-drop';
import RadioWithTitle from '../../atom/radio-with-title';
import {RadioWithTitleProps} from '../../atom/radio-with-title/types';
import SelectMultiple from '../select-multiple';

export const propTypes = {
  radioWithTitle: PropTypes.shape(RadioWithTitle.propTypes).isRequired,
  field: PropTypes.oneOfType([
    PropTypes.shape(SelectMultiple.propTypes),
    PropTypes.shape(DragAndDrop.propTypes)
  ]),
  childType: PropTypes.oneOf(['selectMultiple', 'drag-and-drop'])
};
export type TitleRadioWrapperProps = {
  radioWithTitle: RadioWithTitleProps;
  field: typeof DragAndDrop.propTypes | typeof SelectMultiple.propTypes;
  childType: 'selectMultiple' | 'drag-and-drop';
};
