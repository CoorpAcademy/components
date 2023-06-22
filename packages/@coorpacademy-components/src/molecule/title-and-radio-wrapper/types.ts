import SelectMultiple from '../select-multiple';
import {RadioWithTitleProps} from '../../atom/radio-with-title/types';
import {DragAndDrop} from '../drag-and-drop';

export const SelectMultipleChildTypeProps = {
  ...SelectMultiple.propTypes,
  childType: 'select-multiple'
};

export const DragAndDropChildTypeProps = {
  ...DragAndDrop.propTypes,
  childType: 'drag-and-drop-wrapper'
};

export type TitleAndRadioWrapperProps = {
  radioWithTitle: RadioWithTitleProps;
  child: typeof SelectMultipleChildTypeProps | typeof DragAndDropChildTypeProps;
};
