import PropTypes from 'prop-types';
import AtomLottieWrapperPropTypes, {
  LottieAnimationProps
} from '../../atom/lottie-wrapper/prop-types';
import MoleculeReviewCardCongratsPropTypes, {
  CongratsCardProps
} from '../../molecule/review-card-congrats/prop-types';

const propTypes = {
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

export default propTypes;

export type ReviewCongratsProps = {
  'aria-label': string;
  'data-name': 'review-congrats';
  animationLottie: LottieAnimationProps;
  title: string;
  cardCongratsStar: CongratsCardProps;
  cardCongratsRank?: CongratsCardProps;
  buttonRevising?: {
    'aria-label': string;
    label: string;
    onClick: () => void;
    type: string;
  };
  buttonRevisingSkill?: {
    label: string;
    'aria-label': string;
    onClick: () => void;
    type: string;
  };
};
