import PropTypes from 'prop-types';
import DragAndDrop from '../../atom/drag-and-drop';
import RadioWithTitle from '../../atom/radio-with-title';
import {RadioWithTitleProps} from '../../atom/radio-with-title/types';
import SelectMultiple from '../select-multiple';

export const propTypes = {
  radioWithTitle: PropTypes.shape(RadioWithTitle.propTypes).isRequired,
  field: {
    item: PropTypes.oneOfType([
      PropTypes.shape(SelectMultiple.propTypes),
      PropTypes.shape(DragAndDrop.propTypes)
    ])
  }
};

export type TitleRadioWrapperProps = {
  radioWithTitle: RadioWithTitleProps;
  field: {
    item:
      | PropTypes.InferProps<typeof DragAndDrop.propTypes>
      | PropTypes.InferProps<typeof SelectMultiple.propTypes>;
    childType: 'select-multiple' | 'drag-and-drop';
  };
};
