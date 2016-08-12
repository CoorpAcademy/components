import { checker, createValidate } from '../../util/validation';
import createStar from '../../atom/star';
import style from './star-rating.css';

const conditions = checker.shape({
  props: checker.none,
  children: checker.none
});

export default (treant, options = {}) => {
  const StarRating = (props, children) => {
    const {h} = treant;
    const {stars} = props;

    const Star = createStar(treant, options);

    const Stars = stars.map(star => (
      <Star favorite = {star} />
    ));

    return (
      <div className={style.starRating}>
        {Stars}
      </div>
    );
  };

  StarRating.validate = createValidate(conditions);
  return StarRating;
};
