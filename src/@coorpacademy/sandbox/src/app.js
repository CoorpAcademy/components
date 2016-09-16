import createHeader from './components/header';
import createTranslate from '../../components/util/translate';
import * as locales from '../../components/locales';

const translate = createTranslate(locales.fr);
const options = {translate};

export default (treant, {history} = {}) => {
  const {h} = treant;
  const Header = createHeader(treant, options);

  const onNavigate = href => history.push(href);

  return ({components, location}, children) => (
    <Header
      onSelectComponent={onNavigate}
      onSelectFixture={onNavigate}
      components={components}
      location={location}
    />
  );
};
