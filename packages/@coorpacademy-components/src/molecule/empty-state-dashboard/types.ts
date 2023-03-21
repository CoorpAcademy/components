import PropTypes from 'prop-types';
import {ButtonLinkProps} from '../../atom/button-link/types';
import Picture from '../../atom/picture';

export const propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  imageUrl: Picture.propTypes.src,
  buttonLink: PropTypes.shape({
    type: PropTypes.string,
    label: PropTypes.string,
    ariaLabel: PropTypes.string,
    dataName: PropTypes.string,
    icon: PropTypes.shape({
      position: PropTypes.string,
      type: PropTypes.string
    }),
    onClick: PropTypes.func
  })
};

export type EmptyStateDashboardProps = {
  mainText: string;
  subText: string;
  imageUrl: PropTypes.InferProps<typeof Picture.propTypes.src>;
  buttonLink: ButtonLinkProps;
};

export type Props = PropTypes.InferProps<typeof propTypes>;
