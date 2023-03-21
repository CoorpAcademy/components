import PropTypes from 'prop-types';
import {ButtonLinkProps} from '../../atom/button-link/types';
import Picture from '../../atom/picture';

export const propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  imageUrl: Picture.propTypes.src,
  progressionValue: PropTypes.number,
  leftButtonLink: PropTypes.shape({
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
  rightButtonLink: PropTypes.shape({
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

export type UploadingFileProgressProps = {
  mainText?: string;
  subText?: string;
  imageUrl?: PropTypes.InferProps<typeof Picture.propTypes.src>;
  progressionValue?: number;
  leftButtonLink?: ButtonLinkProps;
  rightButtonLink?: ButtonLinkProps;
};
