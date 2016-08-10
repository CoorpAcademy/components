import {
  createCatalogCards
} from '../../components';

import products from '../assets/products';
import sandbox from './sandbox.css';

export default treant => {
  const {h} = treant;
  const CatalogCards = createCatalogCards(treant);

  return (props, children) => (
    <CatalogCards
      products={products}
    />
  );
};
