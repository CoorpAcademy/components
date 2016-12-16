import Inferno from 'inferno';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import identity from 'lodash/fp/identity';
import isEmpty from 'lodash/fp/isEmpty';
import isNil from 'lodash/fp/isNil';
import map from 'lodash/fp/map';
import CenteredText from '../../atom/centered-text';
import Spinner from '../../atom/spinner';
import CatalogCard from '../../molecule/catalog-card';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    products: checker.oneOfType([checker.arrayOf(checker.object), checker.null]).optional
  }),
  children: checker.none
});

const CatalogCards = ({children, ...props}, {translate}) => {
  const {products} = props;
  if (isNil(products))
    return (
      <CenteredText>
        <Spinner/>
      </CenteredText>
    );

  if (isEmpty(products))
    return (
      <CenteredText>
        {translate('Sorry there are no results for your search')}
      </CenteredText>
    );

  const productViews = map(product => (
    <CatalogCard
      rating={getOr(0, 'popularity', product)}
      maxRating={getOr(0, 'maxPopularity', product)}
      title={get('title', product)}
      image={get('image', product)}
      author={get('author', product)}
      href={get('href', product)}
    >
    </CatalogCard>
  ), products);

  return (
    <ul className={style['category-list']}>
      {productViews}
    </ul>
  );
};

CatalogCards.validate = createValidate(conditions);
export default CatalogCards;
