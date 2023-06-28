import PropTypes from 'prop-types';
import DragAndDrop from '../../atom/drag-and-drop';
import RadioWithTitle from '../../atom/radio-with-title';
import SelectMultiple from '../select-multiple';

export const TitleRadioWrapperProps = {
  title: PropTypes.shape(RadioWithTitle.propTypes),
  child: {
    item: PropTypes.oneOf([SelectMultiple.propTypes, DragAndDrop.propTypes]),
    childType: PropTypes.oneOf(['drag-and-drop', 'select-multipe'])
  }
};
