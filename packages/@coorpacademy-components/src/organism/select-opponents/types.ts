import PropTypes from 'prop-types';
import {TitleRadioWrapperProps} from '../../molecule/title-radio-wrapper/types';
import TitleRadioWrapper from '../../molecule/title-radio-wrapper';

export const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(TitleRadioWrapper.propTypes))
};

export type SelectOpponentsProps = {
  items: TitleRadioWrapperProps[];
};

export default propTypes;
