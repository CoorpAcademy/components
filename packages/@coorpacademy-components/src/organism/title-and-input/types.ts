import PropTypes from 'prop-types';
import Autocomplete from '../../atom/autocomplete';
import Title from '../../atom/title';
import SelectMultiple from '../../molecule/select-multiple';
import SelectOpponents from '../select-opponents';
import {SelectOpponentsProps} from '../select-opponents/types';
import InputText from '../../atom/input-text';
import InputTextarea from '../../atom/input-textarea';
import Select from '../../atom/select';
import {TitleProps} from '../../atom/title/types';

const validInputSize = ['default', 'medium', 'large'];

const propTypes = {
  title: PropTypes.shape(Title.propTypes).isRequired,
  field: PropTypes.oneOfType([
    PropTypes.shape(Autocomplete.propTypes),
    PropTypes.shape({...Select.propTypes, size: PropTypes.oneOf(validInputSize)}),
    PropTypes.shape(SelectMultiple.propTypes),
    PropTypes.shape(SelectOpponents.propTypes),
    PropTypes.shape({
      ...InputText.propTypes,
      size: PropTypes.oneOf(validInputSize)
    }),
    PropTypes.shape({
      ...InputTextarea.propTypes,
      size: PropTypes.oneOf(validInputSize)
    })
  ]),
  childType: PropTypes.oneOf([
    'autoComplete',
    'select',
    'selectMultiple',
    'selectOpponents',
    'inputText',
    'inputTextArea'
  ]).isRequired
};

export type ValidInputSize = typeof validInputSize[number];

export type TitleAndInputProps = {
  title: TitleProps;
  field:
    | (React.ComponentProps<typeof Select> & {size?: ValidInputSize})
    | React.ComponentProps<typeof SelectMultiple>
    | React.ComponentProps<typeof Autocomplete>
    | (SelectOpponentsProps & {size?: ValidInputSize})
    | (React.ComponentProps<typeof InputText> & {size?: ValidInputSize})
    | (React.ComponentProps<typeof InputTextarea> & {size?: ValidInputSize});
  childType: string;
};

export default propTypes;
