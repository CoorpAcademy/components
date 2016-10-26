import createHeader from './components/header';
import style from './style.css';

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
