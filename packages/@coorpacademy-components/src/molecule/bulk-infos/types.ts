import PropTypes from 'prop-types';
import {ButtonLinkProps} from '../../atom/button-link/types';
import Picture from '../../atom/picture';

export const propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  imageUrl: Picture.propTypes.src,
  progression: PropTypes.number,
  firstButtonLink: PropTypes.shape({
    type: PropTypes.string,
    label: PropTypes.string,
    ariaLabel: PropTypes.string,
    dataName: PropTypes.string,
    icon: PropTypes.shape({
      position: PropTypes.string,
      type: PropTypes.string
    }),
    onClick: PropTypes.func
  }),
  secondButtonLink: PropTypes.shape({
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

export type BulkInfosProps = {
  mainText: string;
  subText: string;
  imageUrl?: PropTypes.InferProps<typeof Picture.propTypes.src>;
  progression?: number;
  firstButtonLink?: ButtonLinkProps;
  secondButtonLink?: ButtonLinkProps;
};

export type Props = PropTypes.InferProps<typeof propTypes>;
