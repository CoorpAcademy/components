import hyperx from 'hyperx';
import identity from 'lodash/fp/identity';
import {checker, createValidate} from '../../util/validation';
import createStarRating from '../../molecule/star-rating';
import HoverFillBehaviour from '../../behaviour/effects/hover-fill';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    rating: checker.number.optional,
    maxRating: checker.number.optional,
    linkTry: checker.string.optional,
    linkBuy: checker.string.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const hx = hyperx(h);
  const {translate = identity} = options;

  const startLearning = hx(`<span>${translate('Start <span>learning</span>')}</span>`);
  const premium = hx(`<span>${translate('Coorpacademy <span>subscription</span>')}</span>`);

  const StarRating = createStarRating(treant, options);
  const HoverFill = HoverFillBehaviour(treant, options);

  const CatalogCTA = (props, children) => {
    const {
      rating,
      maxRating,
      linkBuy = '#',
      linkTry = '#'
    } = props;

    return (
      <div className={style.head}>
        <div className={style.starRating}>
          <StarRating
            rating={rating}
            total={maxRating}
          />
        </div>
        <HoverFill>
          <a className={style.try} href={linkTry}>
            {startLearning}
          </a>
        </HoverFill>
        <HoverFill>
          <a className={style.buy} href={linkBuy}>
            {premium}
          </a>
        </HoverFill>
      </div>
    );
  };

  CatalogCTA.validate = createValidate(conditions);
  return CatalogCTA;
};
