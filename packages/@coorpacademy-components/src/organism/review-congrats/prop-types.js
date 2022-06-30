import PropTypes from 'prop-types';
import AtomLottieWrapperPropTypes from '../../atom/lottie-wrapper/prop-types';
import MoleculeReviewCardCongratsPropTypes from '../../molecule/review-card-congrats/prop-types';

export default {
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string,
  animationLottie: PropTypes.shape(AtomLottieWrapperPropTypes),
  title: PropTypes.string,
  cardCongratsStar: PropTypes.shape(MoleculeReviewCardCongratsPropTypes),
  cardCongratsRank: PropTypes.shape(MoleculeReviewCardCongratsPropTypes),
  buttonRevising: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string
  }),
  buttonRevisingSkill: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string
  })
};
