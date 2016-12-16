import Inferno from 'inferno';
import hyperscript from 'inferno-hyperscript';
import hyperx from 'hyperx';
import identity from 'lodash/fp/identity';
import {checker, createValidate} from '../../util/validation';
import StarRating from '../../molecule/star-rating';
import style from './style.css';
import {hoverFill} from '../../atom/button/hover-fill.css';

const hx = hyperx(hyperscript);

const conditions = checker.shape({
  props: checker.shape({
    rating: checker.number.optional,
    maxRating: checker.number.optional,
    linkTry: checker.string.optional,
    linkBuy: checker.string.optional
  }),
  children: checker.none
});

const CatalogCTA = ({children, ...props}, {translate}) => {
  const {
    rating,
    maxRating,
    linkBuy = '#',
    linkTry = '#'
  } = props;

  const startLearning = hx(`<span>${translate('Start <span>learning</span>')}</span>`);
  const premium = hx(`<span>${translate('Coorpacademy <span>subscription</span>')}</span>`);

  return (
    <div className={style.head}>
      <div className={style.starRating}>
        <StarRating
          rating={rating}
          total={maxRating}
        />
      </div>
        <a className={`${style.try} ${hoverFill}`} href={linkTry}>
          {startLearning}
        </a>
        <a className={`${style.buy} ${hoverFill}`} href={linkBuy}>
          {premium}
        </a>
    </div>
  );
};

CatalogCTA.validate = createValidate(conditions);
export default CatalogCTA;
