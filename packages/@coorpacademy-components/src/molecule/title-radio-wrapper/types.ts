import PropTypes from 'prop-types';
import DragAndDrop from '../../atom/drag-and-drop';
import RadioWithTitle from '../../atom/radio-with-title';
import SelectMultiple from '../select-multiple';

export type TitleRadioWrapperProps = {
  radioWithTitle: PropTypes.InferProps<typeof RadioWithTitle.propTypes>;
  field: {
    item:
      | PropTypes.InferProps<typeof DragAndDrop.propTypes>
      | PropTypes.InferProps<typeof SelectMultiple.propTypes>;
    childType: 'select-multiple' | 'drag-and-drop';
  };
};
