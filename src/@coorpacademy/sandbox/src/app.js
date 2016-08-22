import createProductCourse from '../../components/template/product-course';

import products from '../assets/products';
import style from './sandbox.css';

export default treant => {
  const {h} = treant;
  const ProductCourse = createProductCourse(treant);

  return (props, children) => (
    <ProductCourse products = { products } />
  );
};
