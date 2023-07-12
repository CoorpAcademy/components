import PropTypes from 'prop-types';
import Autocomplete from '../../atom/autocomplete';
import Title from '../../atom/title';
import SelectMultiple from '../../molecule/select-multiple';
import SelectOpponents from '../select-opponents';
import {SelectOpponentsProps} from '../select-opponents/types';

const propTypes = {
  title: PropTypes.shape(Title.propTypes).isRequired,
  field: PropTypes.oneOfType([
    PropTypes.shape(Autocomplete.propTypes),
    PropTypes.shape(SelectMultiple.propTypes),
    PropTypes.shape(SelectOpponents.propTypes)
  ]),
  childType: PropTypes.oneOf(['autoComplete', 'selectMultiple', 'selectOpponents']).isRequired
};
export type TitleAndInputProps = {
  title: {
    title: string;
    subtitle: string;
    type: string;
    'data-name': string;
  };
  field:
    | React.ComponentProps<typeof SelectMultiple>
    | React.ComponentProps<typeof Autocomplete>
    | SelectOpponentsProps;
  childType: string;
};

export default propTypes;
