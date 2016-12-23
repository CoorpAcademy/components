import React from 'react';
import Header from './components/header';
import Provider from './components/provider';
import './style.css';

export default function App({components, fixtures, location, options} = {}) {
  const onNavigate = href => options.history.push(href);
  const {store, history, skin, translate} = options;
  return (
    <Provider {...{store, history, skin, translate}}>
      <Header
        components={components}
        fixtures={fixtures}
        location={location}
        onSelectComponent={onNavigate}
        onSelectFixture={onNavigate}
      />
    </Provider>
  );
}
