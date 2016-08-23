import createCatalog from '../../components/template/catalog';
import products from '../assets/products';
import categories from '../assets/categories';
import style from './sandbox.css';

import createTranslate from '../../components/util/translate';
import * as locales from '../../components/locales';

const options = {
  translate: createTranslate(locales.fr)
};

export default treant => {
  const {h} = treant;
  const Catalog = createCatalog(treant);

  return (props, children) => (
    <Catalog
      products = { products }
      categories = { categories }
    />
  );
};
