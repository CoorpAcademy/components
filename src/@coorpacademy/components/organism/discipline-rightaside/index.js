import { checker, createValidate } from '../../util/validation';
import getOr from 'lodash/fp/getOr';
import style from './discipline-rightaside.css';
import hyperx from 'hyperx';
import createStarRating from '../../molecule/star-rating';
import createCatalogCTA from '../../molecule/catalog-cta';
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
  const {translate} = options;
  const CatalogCTA = createCatalogCTA(treant, options);

  const t = stuff => {
    return translate ? translate(stuff) : stuff;
  };

  const author = t('author');

  const DisciplineRightaside = (props, children) => {
    const {product} = props;

    return (
      <div className={style.col}>
        <CatalogCTA
          content={product}
        >
        </CatalogCTA>
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
