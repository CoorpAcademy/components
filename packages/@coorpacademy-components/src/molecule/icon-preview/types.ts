import PropTypes from 'prop-types';

const IconPropTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string
};

const IconPreviewPropTypes = {
  title: PropTypes.string,
  icon: PropTypes.shape(IconPropTypes).isRequired
};

export default IconPreviewPropTypes;

type IconProps = {
  name: string;
  color?: string;
};

export type IconPreviewProps = {
  title?: string;
  icon: IconProps;
};
