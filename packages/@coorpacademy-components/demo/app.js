import createTranslate from '@coorpacademy/translate';
import createHeader from './components/header';
import en from '../locales/en/global.json';
import fr from '../locales/fr/global.json';
import style from './style.css';

const locales = {en, fr};

const translate = createTranslate(locales.fr);
const options = {translate};

export default (treant, options = {}) => {
  const {h} = treant;
  const {history, skin} = options;
  const Header = createHeader(treant, options);

  const onNavigate = href => history.push(href);

  return ({components, fixtures, location}, children) => (
    <Header
      onSelectComponent={onNavigate}
      onSelectFixture={onNavigate}
      components={components}
      fixtures={fixtures}
      location={location}
    />
  );
};
