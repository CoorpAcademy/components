import { checker, createValidate } from '../../util/validation';
import getOr from 'lodash/fp/getOr';
import hyperx from 'hyperx';
import style from './style.css';
import createStarRating from '../../molecule/star-rating';
import createLink from '../../atom/link';
import HoverFillBehaviour from '../../behaviour/effects/hover-fill';

const conditions = checker.shape({
  props: checker.shape({
    rating: checker.number,
    maxRating: checker.number,
    linkBuy: checker.string
  }),
  children: checker.none
});

const getOrBlank = getOr('');

export default (treant, options = {}) => {
  const {h} = treant;
  const hx = hyperx(h);
  const {translate} = options;

  const t = stuff => {
    return translate ? translate(stuff) : stuff;
  };

  const startLearning = hx(`<span>${t('Start <span>learning</span>')}</span>`);
  const premium = hx(`<span>${t('Coorpacademy <span>premium</span>')}</span>`);

  const StarRating = createStarRating(treant, options);
  const Link = createLink(treant, options);
  const HoverFill = HoverFillBehaviour(treant, options);

  const CatalogCTA = (props, children) => {
    const {rating, maxRating, linkBuy} = props;
    const linkTry = '#';

    return (
      <div className={style.head}>
        <div className={style.starRating}>
          <StarRating
            rating={rating}
            total={maxRating}
          />
        </div>
        <HoverFill>
          <Link className={style.try} href={linkTry}>
            {startLearning}
          </Link>
        </HoverFill>
        <HoverFill>
          <Link className={style.buy} href={linkBuy}>
            {premium}
          </Link>
        </HoverFill>
      </div>
    );
  };

  CatalogCTA.validate = createValidate(conditions);
  return CatalogCTA;
};
