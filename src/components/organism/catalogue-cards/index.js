import createCatalogueCard from '../../molecule/catalogue-card';
import style from './catalogue-cards.css';

export default (engine, options) => {
  const {h} = engine;
  const CatalogueCard = createCatalogueCard(engine, options);

  const CatalogueCards = (props, children) => {
    const products = props.products.map(product => (
      <CatalogueCard
        product = {product}
      >
      </CatalogueCard>
    ));

    return (
      <ul className={style['category-list']}>
        {products}
      </ul>
    );
  };

  return CatalogueCards;
};
