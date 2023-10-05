import PropTypes from 'prop-types';
import TitleAndCheckBoxWrapper from '../../molecule/title-and-checkbox-wrapper';

export const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(TitleAndCheckBoxWrapper.propTypes))
};

export type TitleAndCheckBoxWrapperProps = {
  child: {
    childType: 'select-multiple' | 'image-upload';
    [x: string]: unknown;
  };
  [x: string]: unknown;
};

export type SelectOpponentsProps = {
  items: TitleAndCheckBoxWrapperProps[];
};

export default propTypes;
