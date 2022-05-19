import React, {useEffect, useState} from 'react';
import {connect, Provider} from 'react-redux';
import AppReviewRootView from '@coorpacademy/components/es/template/app-review/root-view/root-view';

import configureStore from './configure-store';
import {navigateTo, navigateBack} from './actions/navigation';
import {getCurrentViewName} from './reducers/navigation';

// -----------------------------------------------------------------------------

const mapStateToProps = (state, ownProps) => {
  return {...ownProps, viewName: getCurrentViewName(state)};
};

const mapDispatchToProps = {navigateTo, navigateBack};
const App = connect(mapStateToProps, mapDispatchToProps)(AppReviewRootView);

// -----------------------------------------------------------------------------

const AppRevision = ({services}) => {
  const [store, setStore] = useState(null);

  useEffect(() => {
    const store = configureStore(services);
    setStore(store);
  }, []);

  if (!store) return null;

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

// -----------------------------------------------------------------------------

export default AppRevision;
