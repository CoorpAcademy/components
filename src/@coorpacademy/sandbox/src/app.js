import {
  createCatalogueCards
} from '../../components';

import products from '../assets/products';
import sandbox from './sandbox.css';

export default treant => {
  const {h} = treant;
  const CatalogueCards = createCatalogueCards(treant);

  return (props, children) => (
    <CatalogueCards
      products={products}
    />
  );
};
