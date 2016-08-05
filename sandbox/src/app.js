import {
  createCatalogueCards
} from '../../src/components';

import products from '../assets/products';
import sandbox from './sandbox.css';

export default engine => {
  const {h} = engine;
  const CatalogueCards = createCatalogueCards(engine);

  return (props, children) => (
    <CatalogueCards
      products={products}
    />
  );
};
