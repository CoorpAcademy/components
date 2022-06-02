import React, {useEffect, useState} from 'react';
import {connect, Provider} from 'react-redux';
import AppReviewTemplate from '@coorpacademy/components/es/template/app-review';

import configureStore, {StoreState} from './configure-store';
import {navigateTo, navigateBack, startApp} from './actions/navigation';
import {validateSlide} from './actions/slide';
import {getCurrentViewName} from './reducers/navigation';
import {Slide} from './types/slide';
import {SlidesViewProps} from './types/views';

// -----------------------------------------------------------------------------

const VIEWS = {
  home: 'home',
  onboarding: 'onboarding',
  slides: 'slides'
};

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

type RootProps = Props & Dispatchers;

// -----------------------------------------------------------------------------

const mapDispatchToProps: Dispatchers = {navigateTo, navigateBack, validateSlide};

const mapStateToProps = (state: StoreState): Props => ({
  viewName: getCurrentViewName(state),
  slides: {
    slide: state.slide,
    validate: {
      label: '__validate'
    }
  }
});

const App = connect(mapStateToProps, mapDispatchToProps)(AppReviewTemplate);

// -----------------------------------------------------------------------------

const AppRevision = ({options}: {options: AppOptions}) => {
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

// type Props = {options: AppOptions};

type AppOptions = {
  token: string;
  theme?: any;
  translations?: any;
  slide?: Slide;
};

// -----------------------------------------------------------------------------

export {AppOptions, VIEWS};
export default AppRevision;
