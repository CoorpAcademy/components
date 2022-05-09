import moleculeReviewCardStar from '../../../../molecule/review-card-congrats/test/fixtures/star';
import moleculeReviewCardRank from '../../../../molecule/review-card-congrats/test/fixtures/rank';

export const defaultProps = {
  'aria-label': 'Review Congratulations',
  'data-name': 'review-congrats',
  title: 'Congratulations!',
  cardCongratsStar: moleculeReviewCardStar.props,
  cardCongratsRank: moleculeReviewCardRank.props,
  buttonRevising: {
    'aria-label': 'Continue revising button',
    label: 'Continue revising',
    onClick: () => console.log('Continue revising'),
    type: 'tertiary'
  },
  buttonRevisingSkill: {
    label: 'Revise another skill',
    'aria-label': 'Revise another skill button',
    onClick: () => console.log('Revise another skill'),
    type: 'primary'
  }
};

export default {props: defaultProps};
