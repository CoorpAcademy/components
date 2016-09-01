import identity from 'lodash/fp/identity';
import getOr from 'lodash/fp/getOr';
import {checker, createValidate} from '../../util/validation';
import createStarRating from '../star-rating';
import createLink from '../../atom/link';
import HoverFillBehaviour from '../../behaviour/effects/hover-fill';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    rating: checker.number,
    maxRating: checker.number,
    title: checker.string,
    image: checker.string,
    author: checker.string,
    href: checker.string
  }),
  children: checker.none
});

const getOrBlank = getOr('');

export default (treant, options = {}) => {
  const HoverFill = HoverFillBehaviour(treant, options);
  const StarRating = createStarRating(treant, options);
  const Link = createLink(treant, options);

  const {translate = identity} = options;

  const CatalogCard = (props, children) => {
    const {h} = treant;
    const {maxRating = 5, rating = 0} = props;

    const href = getOr('', 'href', props);
    const image = getOr(null, 'image', props);

    return (
      <li className={style.catalogListItem}>
        <div className={style.imageWrapper}>
          <img src={image} />
          <div className={style.overlay}>
            <HoverFill>
              <Link href={href}>En savoir <span>plus</span></Link>
            </HoverFill>
          </div>
        </div>
        <div className={style.infoWrapper}>
          <div className={style.title}>
            <Link href={href}>
              {getOrBlank('title', props)}
            </Link>
          </div>
          <div className={style.subtitle}>{translate('by {{author}}', props)}</div>
          <StarRating
            rating={rating}
            total={maxRating}
          />
        </div>
      </li>
    );
  };

  CatalogCard.validate = createValidate(conditions);
  return CatalogCard;
};
