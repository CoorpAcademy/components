import createCatalogCard from '../../molecule/catalog-card';
import { checker, createValidate } from '../../util/validation';
import style from './catalog-cards.css';

const conditions = checker.shape({
  props: checker.shape({
    products: checker.arrayOf(checker.object)
  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;
  const CatalogCard = createCatalogCard(treant, options);

  const CatalogCards = ({_products = []}, children) => {
    const products = _products.map(product => (
      <CatalogCard
        product = {product}
      >
      </CatalogCard>
    ));

    return (
      <ul className={style['category-list']}>
        {products}
      </ul>
    );
  };

  CatalogCards.validate = createValidate(conditions);
  return CatalogCards;
};
