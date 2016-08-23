import createProductCourse from '../../components/template/product-course';
import products from '../assets/products';
import style from './sandbox.css';

import createTranslate from '../../components/util/translate';
import * as locales from '../../components/locales';

const options = {
  translate: createTranslate(locales.fr)
};

export default treant => {
  const {h} = treant;
  const ProductCourse = createProductCourse(treant);

  return (props, children) => (
    <ProductCourse product = { products[1] } />
  );
};
