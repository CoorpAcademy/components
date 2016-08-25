import createProductCourse from '../../components/template/product-course';
import style from './sandbox.css';

import {navigate} from '../../redux-tools/redux-history';

import createTranslate from '../../components/util/translate';
import * as locales from '../../components/locales';

import fixture from '../../components/template/product-course/test/fixtures/default';

const translate = createTranslate(locales.fr);

const selected = 1;

const _props = {
  ...fixture.props,
  selected,
  changeLevel: level => {
  }
};

export default (treant, {dispatch, history}) => {
  const {h} = treant;
  const ProductCourse = createProductCourse(treant);

  return (props, children) => (
    <div>
      {/* <Header
        onSelectComponent={value => dispatch(navigate(history.createLocation(value)))}
      /> */}
      <ProductCourse {..._props} />
    </div>
  );
};
