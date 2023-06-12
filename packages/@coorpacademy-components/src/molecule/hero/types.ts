import PropTypes from 'prop-types';
import CardContentInfo from '../card-content';
import Button from '../../atom/button';

export const propTypes = {
  image: PropTypes.string,
  mode: PropTypes.string,
  description: PropTypes.string,
  title: CardContentInfo.propTypes.title,
  author: CardContentInfo.propTypes.author,
  progress: CardContentInfo.propTypes.progress,
  onClick: Button.propTypes.onClick,
  submitValue: Button.propTypes.submitValue
};

export type Props = {
  image?: string;
  mode?: string;
  description?: string;
  title?: string;
  author?: string;
  progress?: number;
  onClick?: () => void;
  submitValue?: string;
};
