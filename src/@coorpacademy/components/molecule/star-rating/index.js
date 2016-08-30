import {checker, createValidate} from '../../util/validation';
import fill from 'lodash/fp/fill';
import pipe from 'lodash/fp/pipe';
import createStar from '../../atom/star';
import style from './star-rating.css';

const conditions = checker.shape({
  props: checker.shape({
    rating: checker.number,
    total: checker.number
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const StarRating = (props, children) => {
    const {h} = treant;
    const {rating, total} = props;

    const Star = createStar(treant, options);

    const popularity = pipe(
      fill(0, total, false),
      fill(0, rating, true)
    )(new Array(total));

    const Stars = popularity.map(popular => (
      <Star popular = {popular} />
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
