import PropTypes from 'prop-types';
import Autocomplete from '../../atom/autocomplete';
import Title from '../../atom/title';
import SelectMultiple from '../../molecule/select-multiple';
import SelectOpponents from '../select-opponents';
import {SelectOpponentsProps} from '../select-opponents/types';
import InputText from '../../atom/input-text';
import InputTextarea from '../../atom/input-textarea';
import Select from '../../atom/select';
import IconEditor from '../icon-editor';

const validInputSize = ['default', 'medium', 'large'];

const propTypes = {
  title: PropTypes.shape(Title.propTypes).isRequired,
  field: PropTypes.oneOfType([
    PropTypes.shape(Autocomplete.propTypes),
    PropTypes.shape(IconEditor.propTypes),
    PropTypes.shape({
      ...InputText.propTypes,
      size: PropTypes.oneOf(validInputSize)
    }),
    PropTypes.shape({
      ...InputTextarea.propTypes,
      size: PropTypes.oneOf(validInputSize)
    }),
    PropTypes.shape({...Select.propTypes, size: PropTypes.oneOf(validInputSize)}),
    PropTypes.shape(SelectMultiple.propTypes),
    PropTypes.shape(SelectOpponents.propTypes)
  ]),
  childType: PropTypes.oneOf([
    'autoComplete',
    'iconEditor',
    'inputText',
    'inputTextArea',
    'select',
    'selectMultiple',
    'selectOpponents'
  ]).isRequired
};

export type ValidInputSize = 'default' | 'medium' | 'large';

export type TitleAndInputProps = {
  title: React.ComponentProps<typeof Title>;
  field:
    | React.ComponentProps<typeof Autocomplete>
    | React.ComponentProps<typeof IconEditor>
    | (React.ComponentProps<typeof InputText> & {size?: ValidInputSize})
    | (React.ComponentProps<typeof InputTextarea> & {size?: ValidInputSize})
    | (React.ComponentProps<typeof Select> & {size?: ValidInputSize})
    | React.ComponentProps<typeof SelectMultiple>
    | SelectOpponentsProps;
  childType: string;
};

export default propTypes;
