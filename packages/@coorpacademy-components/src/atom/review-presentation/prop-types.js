import PropTypes from 'prop-types';

const levelItem = PropTypes.shape({
  text: PropTypes.string,
  tooltipText: PropTypes.string
});

const propTypes = {
  'aria-label': PropTypes.string,
  reviewTitle: PropTypes.string,
  reviewText: PropTypes.string,
  labelsList: PropTypes.shape({
    skills: levelItem,
    questions: levelItem,
    lifes: levelItem,
    allright: levelItem
  })
};

export default propTypes;
