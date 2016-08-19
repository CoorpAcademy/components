import { checker, createValidate } from '../../util/validation';
import getOr from 'lodash/fp/getOr';
import style from './discipline-rightaside.css';
import createStarRating from '../../molecule/star-rating';
import createLink from '../../atom/link';
import HoverFillBehaviour from '../../behaviour/effects/hover-fill';

const conditions = checker.shape({
  props: checker.shape({
    product: checker.shape({
      author: checker.string
    })
  }),
  children: checker.none
});

const getOrBlank = getOr('');

export default (treant, options = {}) => {
  const {h} = treant;
  const StarRating = createStarRating(treant, options);
  const Link = createLink(treant, options);
  const HoverFill = HoverFillBehaviour(treant, options);

  const DisciplineRightaside = (props, children) => {
    const {product} = props;

    const rating = getOr(0, 'popularity', product);
    const total = 5;
    const linkTry = '#';
    const linkBuy = `https://store-staging.coorpacademy.com/checkout/cart/${getOrBlank('sku', product)}`;

    return (
        <div className={style.col}>
          <div className={style.head}>
            <div className={style.starRating}>
              <StarRating
                rating={rating}
                total={total}
              />
            </div>
          </div>
          <HoverFill>
            <Link className={style.try} href={linkTry}>
              Commencer à <span>apprendre</span>
            </Link>
          </HoverFill>
          <HoverFill>
            <Link className={style.buy} href={linkBuy}>Coorpacademy <span>premium</span></Link>
          </HoverFill>
          <div className={style.author}>
            auteur
          </div>
          <div className={style.title}>
            {getOrBlank('author', product)}
          </div>
        </div>
      );
  };

  DisciplineRightaside.validate = createValidate(conditions);
  return DisciplineRightaside;
};
