import createHeader from './components/header';
import style from './style.css';

import {navigate} from '../../redux-tools/redux-history';

import createTranslate from '../../components/util/translate';
import * as locales from '../../components/locales';

const translate = createTranslate(locales.fr);
const options = {translate};

export default (treant, {history}) => {
  const {h} = treant;
  const Header = createHeader(treant, options);

  const onNavigate = href => history.push(href);

  return (props, children) => (
    <div>
      <Header
        onSelectComponent={onNavigate}
        onSelectFixture={onNavigate}
        state={props}
      />
    </div>
  );
};
