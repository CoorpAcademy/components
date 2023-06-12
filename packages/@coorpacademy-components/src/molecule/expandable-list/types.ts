import PropTypes from 'prop-types';
import {Props as ItemProps, propTypes as ItemPropTypes} from '../expandable-item/types';

export const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(ItemPropTypes))
};

export type Props = {
  items: ItemProps[];
};
