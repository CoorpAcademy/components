import { checker, createValidate } from '../../util/validation';
import getOr from 'lodash/fp/getOr';
import style from './catalog-cta.css';
import createStarRating from '../../molecule/star-rating';
import createLink from '../../atom/link';
import HoverFillBehaviour from '../../behaviour/effects/hover-fill';

const conditions = checker.shape({
  props: checker.shape({
    content: checker.shape({
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

  const CursusRightaside = (props, children) => {
    const {content} = props;

    const rating = getOr(0, 'popularity', content);
    const total = 5;
    const linkTry = '#';
    const linkBuy = `https://store-staging.coorpacademy.com/checkout/cart/${getOrBlank('sku', content)}`;

    return (
      <div className={style.head}>
        <div className={style.starRating}>
          <StarRating
            rating={rating}
            total={total}
          />
        </div>
        <HoverFill>
          <Link className={style.try} href={linkTry}>
            Commencer à <span>apprendre</span>
          </Link>
        </HoverFill>
        <HoverFill>
          <Link className={style.buy} href={linkBuy}>Coorpacademy <span>premium</span></Link>
        </HoverFill>
      </div>
    );
  };

  CursusRightaside.validate = createValidate(conditions);
  return CursusRightaside;
};
