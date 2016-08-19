import createCatalogCards from '../../components/organism/catalogue-cards';

import products from '../assets/products';
import sandbox from './sandbox.css';

import createTranslate from '../../components/util/translate';
import * as locales from '../../components/locales';

const options = {
  translate: createTranslate(locales.fr)
};

export default treant => {
  const {h} = treant;
  const CatalogCards = createCatalogCards(treant, options);

  return (props, children) => (
    <CatalogCards
      products={products}
    />
  );
};
