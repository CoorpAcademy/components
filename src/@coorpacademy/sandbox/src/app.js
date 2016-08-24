import createProductCourse from '../../components/template/product-course';
import style from './sandbox.css';

import {navigate} from '../../redux-tools/redux-history';

import createTranslate from '../../components/util/translate';
import * as locales from '../../components/locales';

import products from '../assets/products';
import contents from '../assets/contents';

const translate = createTranslate(locales.fr);

const selected = 2;
const _props = {
  selected,
  product: products[0],
  title: contents[0].title,
  content: contents[0].levels[selected],
  changeLevel: level => {
    console.log(level);
  }
};

export default (treant, {dispatch, history}) => {
  const {h} = treant;

  return (props, children) => (
    <div>
      {/* <Header
        onSelectComponent={value => dispatch(navigate(history.createLocation(value)))}
      /> */}
      <ProductCourse {..._props} />
    </div>
  );
};
