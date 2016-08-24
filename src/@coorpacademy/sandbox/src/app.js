import createCatalog from '../../components/template/catalog';
import createHeader from './components/header';

import products from '../assets/products';
import categories from '../assets/categories';
import style from './sandbox.css';

import {navigate} from '../../redux-tools/redux-history';

import createTranslate from '../../components/util/translate';
import * as locales from '../../components/locales';

const translate = createTranslate(locales.fr);

export default (treant, {dispatch, history}) => {
  const {h} = treant;
  const options = {
    translate
  };
  const Catalog = createCatalog(treant, options);
  const Header = createHeader(treant, options);

  return (props, children) => (
    <div>
      {/* <Header
        onSelectComponent={value => dispatch(navigate(history.createLocation(value)))}
      /> */}
      <Catalog
        products={products}
        categories={categories}
      />
    </div>
  );
};
