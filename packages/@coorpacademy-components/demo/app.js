import Inferno from 'inferno';
import Header from './components/header';
import Provider from './components/provider';
import './style.css';


export default function App({components, fixtures, location, options} = {}) {
  const onNavigate = href => options.history.push(href);
  return (
    <Provider {...options}>
      <Header
        onSelectComponent={onNavigate}
        onSelectFixture={onNavigate}
        components={components}
        fixtures={fixtures}
        location={location}
      />
    </Provider>
  );
}
