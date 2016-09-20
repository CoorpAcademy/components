import identity from 'lodash/fp/identity';
import getOr from 'lodash/fp/getOr';
import {checker, createValidate} from '../../util/validation';
import createStarRating from '../star-rating';
import createLink from '../../atom/link';
import HoverFillBehaviour from '../../behaviour/effects/hover-fill';
import createImage from '../../atom/image';
import style from './style.css';
import hyperx from 'hyperx';

const conditions = checker.shape({
  props: checker.shape({
    rating: checker.number.optional,
    maxRating: checker.number.optional,
    title: checker.string.optional,
    image: checker.string.optional,
    author: checker.string.optional,
    href: checker.string.optional
  }),
  children: checker.none
});

const getOrBlank = getOr('');

export default (treant, options = {}) => {
  const HoverFill = HoverFillBehaviour(treant, options);
  const StarRating = createStarRating(treant, options);
  const Link = createLink(treant, options);
  const Image = createImage(treant, options);

  const {translate = identity} = options;

  const CatalogCard = (props, children) => {
    const {h} = treant;
    const hx = hyperx(h);

    const learnMore = hx(`<span>${translate('Learn <span>more</span>')}</span>`);

    const {
      maxRating = 5,
      rating = 0,
      href = '',
      image
    } = props;

    return (
      <li className={style.catalogListItem}>
        <div className={style.imageWrapper}>
          <Image src={image} />
          <div className={style.overlay}>
            <HoverFill>
              <Link href={href}>
                {learnMore}
              </Link>
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
