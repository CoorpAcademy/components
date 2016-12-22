import React, {PropTypes} from 'react';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import identity from 'lodash/fp/identity';
import isEmpty from 'lodash/fp/isEmpty';
import isNil from 'lodash/fp/isNil';
import map from 'lodash/fp/map';
import CenteredText from '../../atom/centered-text';
import Spinner from '../../atom/spinner';
import CatalogCard from '../../molecule/catalog-card';
import style from './style.css';

const CatalogCards = (props, context) => {
  const {translate = identity} = context;
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

  const productViews = products.map((product, index) => (
    <CatalogCard
      key={index}
      rating={getOr(0, 'popularity', product)}
      maxRating={getOr(0, 'maxPopularity', product)}
      title={get('title', product)}
      image={get('image', product)}
      author={get('author', product)}
      href={get('href', product)}
    >
    </CatalogCard>
  ));

  return (
    <ul className={style['category-list']}>
      {productViews}
    </ul>
  );
};

CatalogCards.contextTypes = {
  translate: React.PropTypes.func
};

CatalogCards.propTypes = {
  products: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.null
  ])
};
export default CatalogCards;
