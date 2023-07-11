import PropTypes from 'prop-types';
import Autocomplete from '../../atom/autocomplete';
import Title from '../../atom/title';
import SelectMultiple from '../../molecule/select-multiple';
import SelectOpponents from '../select-opponents';
import {SelectOpponentsProps} from '../select-opponents/types';

const propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.shape(Title.propTypes).isRequired,
  field: PropTypes.oneOfType([
    PropTypes.shape(Autocomplete.propTypes),
    PropTypes.shape(SelectMultiple.propTypes),
    PropTypes.shape(SelectOpponents.propTypes)
  ])
};
export type TitleAndInputProps = {
  type: string;
  title: {
    title: string;
    subtitle: string;
    type: string;
    'data-name': string;
  };
  field: typeof SelectMultiple.propTypes | typeof Autocomplete.propTypes | SelectOpponentsProps;
};

export default propTypes;
