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

  const CatalogCards = ({products = []}, children) => {
    const productViews = products.map(product => (
      <CatalogCard
        product = {product}
      >
      </CatalogCard>
    ));

    return (
      <ul className={style['category-list']}>
        {productViews}
      </ul>
    );
  };

  CatalogCards.validate = createValidate(conditions);
  return CatalogCards;
};
