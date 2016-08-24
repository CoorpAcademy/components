import createProductCourse from '../../components/template/product-course';
import style from './sandbox.css';

import {navigate} from '../../redux-tools/redux-history';

import createTranslate from '../../components/util/translate';
import * as locales from '../../components/locales';

const translate = createTranslate(locales.fr);

export default (treant, {dispatch, history}) => {
  const {h} = treant;

  return (props, children) => (
    <div>
      {/* <Header
        onSelectComponent={value => dispatch(navigate(history.createLocation(value)))}
      /> */}
      <ProductCourse {...props} />
    </div>
  );
};
