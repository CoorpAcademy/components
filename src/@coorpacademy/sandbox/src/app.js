import createCatalog from '../../components/template/catalog';
import categories from '../assets/categories';

import products from '../assets/products';
import style from './sandbox.css';

import {navigate} from '../../redux-tools/redux-history';

import createTranslate from '../../components/util/translate';
import * as locales from '../../components/locales';

const translate = createTranslate(locales.fr);

export default (treant, {dispatch, history}) => {
  const {h} = treant;
  const Catalog = createCatalog(treant);

  return (props, children) => (
    <div>
      {/* <Header
        onSelectComponent={value => dispatch(navigate(history.createLocation(value)))}
      /> */}
      <Catalog
        title='__Catalog'
        products={products}
        categories={categories}
      />
    </div>
  );
};
