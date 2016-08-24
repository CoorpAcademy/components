import createProductCourse from '../../components/template/product-course';
import products from '../assets/products';
import style from './sandbox.css';

import {navigate} from '../../redux-tools/redux-history';

import createTranslate from '../../components/util/translate';
import * as locales from '../../components/locales';

const translate = createTranslate(locales.fr);

export default (treant, {dispatch, history}) => {
  const {h} = treant;
  const ProductCourse = createProductCourse(treant);

  return (props, children) => (
    <ProductCourse product = { products[1] } />
  );
};
