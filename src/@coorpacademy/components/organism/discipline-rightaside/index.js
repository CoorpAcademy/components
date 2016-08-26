import { checker, createValidate } from '../../util/validation';
import getOr from 'lodash/fp/getOr';
import style from './discipline-rightaside.css';
import hyperx from 'hyperx';
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
  const hx = hyperx(h);
  const {translate} = options;
  const StarRating = createStarRating(treant, options);
  const Link = createLink(treant, options);
  const HoverFill = HoverFillBehaviour(treant, options);

  const DisciplineRightaside = (props, children) => {
    const {product} = props;

    const rating = getOr(0, 'popularity', product);
    const total = 5;
    const linkTry = '#';
    const linkBuy = `https://store-staging.coorpacademy.com/checkout/cart/${getOrBlank('sku', product)}`;

    const author = translate('author');
    const startLearning = hx(`<span>${translate('Start <span>learning</span>')}</span>`);
    const premium = hx(`<span>${translate('Coorpacademy <span>premium</span>')}</span>`);

    return (
      <div className={style.col}>
        <div className={style.head}>
          <div className={style.starRating}>
            <StarRating
              rating={rating}
              total={total}
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
        <div className={style.colAuthor}>
          <div className={style.author}>
            {author}
          </div>
          <div className={style.title}>
            {getOrBlank('author', product)}
          </div>
        </div>
      </div>
    );
  };

  DisciplineRightaside.validate = createValidate(conditions);
  return DisciplineRightaside;
};
