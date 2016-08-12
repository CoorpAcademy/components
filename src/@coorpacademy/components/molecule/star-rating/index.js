import { checker, createValidate } from '../../util/validation';
import createStar from '../../atom/star';
import style from './star-rating.css';

const conditions = checker.shape({
  props: checker.shape({
    popularity: checker.array
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const StarRating = (props, children) => {
    const {h} = treant;
    const {popularity} = props;

    const Star = createStar(treant, options);

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
