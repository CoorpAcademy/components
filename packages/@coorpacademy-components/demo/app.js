import createTranslate from '@coorpacademy/translate';

import createHeader from './components/header';

import en from '../locales/en/global.json';
import fr from '../locales/fr/global.json';
const locales = {en, fr};

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
