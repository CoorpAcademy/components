import React, {useEffect, useState} from 'react';
import {connect, Provider} from 'react-redux';
import AppReviewRootView from '@coorpacademy/components/es/template/app-review/root-view/root-view';

import configureStore from './configure-store';
import {navigateTo, navigateBack, startApp} from './actions/navigation';
import {getCurrentViewName} from './reducers/navigation';

// -----------------------------------------------------------------------------

const mapStateToProps = (state, ownProps) => {
  return {...ownProps, viewName: getCurrentViewName(state)};
};

const mapDispatchToProps = {navigateTo, navigateBack};
const App = connect(mapStateToProps, mapDispatchToProps)(AppReviewRootView);

// -----------------------------------------------------------------------------

const AppRevision = ({options}: Props) => {
  const [store, setStore] = useState(null);

  useEffect(() => {
    const _configure = async () => {
      const store = await configureStore();
      store.dispatch(startApp(options));
      setStore(store);
    };

    _configure();
  }, []);

  if (!store) return null;

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

// -----------------------------------------------------------------------------

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: boolean;
  }
}

type Props = {options: AppOptions};

export type AppOptions = {
  token: string;
  theme?: any;
  translations?: any;
};

export default AppRevision;
