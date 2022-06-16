import React, {useEffect, useState} from 'react';
import {connect, Provider} from 'react-redux';
import AppReviewTemplate from '@coorpacademy/components/es/template/app-review';

import configureStore from './configure-store';
import {navigateTo, navigateBack, startApp} from './actions/navigation';
import {validateSlide} from './actions/slides';
import {getCurrentViewName} from './reducers/navigation';
import {SlidesViewProps} from './types/views';
import {AppOptions} from './types/common';
import {StoreState} from './types/store-state';

// -----------------------------------------------------------------------------

type Dispatchers = {
  navigateTo: typeof navigateTo;
  navigateBack: typeof navigateBack;
  validateSlide: typeof validateSlide;
};

type Props = {
  viewName: 'home' | 'onboarding' | 'slides';
  slides: SlidesViewProps;
};

// type RootProps = Props & Dispatchers;

// -----------------------------------------------------------------------------

const mapDispatchToProps: Dispatchers = {navigateTo, navigateBack, validateSlide};

const mapStateToProps = (state: StoreState): Props => ({
  viewName: getCurrentViewName(state),
  slides: {
    slides: state.slides,
    validate: {
      label: '__validate'
    }
  }
});

const App = connect(mapStateToProps, mapDispatchToProps)(AppReviewTemplate);

// -----------------------------------------------------------------------------

const AppReview = ({options}: {options: AppOptions}): JSX.Element => {
  const [store, setStore] = useState(null);

  useEffect(() => {
    const _configure = async (): Promise<void> => {
      const _store = await configureStore();
      _store.dispatch(startApp(options));
      setStore(_store);
    };

    _configure();
  }, [options]);

  if (!store) return null;

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

// -----------------------------------------------------------------------------

declare global {
  // eslint-disable-next-line no-shadow
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: boolean;
  }
}

// type Props = {options: AppOptions};

// -----------------------------------------------------------------------------

export default AppReview;
