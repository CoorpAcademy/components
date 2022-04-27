import moleculeReviewCardStar from '../../../../molecule/review-card-congrats/test/fixtures/star';
import moleculeReviewCardRank from '../../../../molecule/review-card-congrats/test/fixtures/rank';

export const defaultProps = {
  'aria-label': 'Review Congratulations',
  title: 'Congratulations!',
  cardCongratsStar: moleculeReviewCardStar.props,
  cardCongratsRank: moleculeReviewCardRank.props,
  buttonLabelReviseSkill: 'Revise another skill',
  buttonLabelRevise: 'Continue revising',
  buttonAriaLabel: 'Continue revising',
  linkReviseSkill: '',
  linkRevise: ''
};

export default {props: defaultProps};
