import React, {useEffect, useState} from 'react';
import type {} from 'redux-thunk/extend-redux'; // https://github.com/reduxjs/redux-thunk/issues/333
import {AnyAction, Store} from 'redux';
import {useSelector, useDispatch, Provider} from 'react-redux';
import AppReviewTemplate from '@coorpacademy/components/es/template/app-review';
import type {AppReviewProps} from '@coorpacademy/components/es/template/app-review/prop-types';

import isEmpty from 'lodash/fp/isEmpty';
import get from 'lodash/fp/get';
import type {AppOptions, ConnectedOptions} from './types/common';
import configureStore from './configure-store';

import type {StoreState} from './reducers';

import {navigateBack, navigateTo} from './actions/ui/navigation';
import {storeToken} from './actions/data/token';
import {postProgression} from './actions/api/post-progression';
import {mapStateToSlidesProps} from './views/slides';

const ConnectedApp = (options: ConnectedOptions): JSX.Element => {
  const dispatch = useDispatch();
  const props: AppReviewProps = {
    viewName: useSelector(
      (state: StoreState) => state.ui.navigation[state.ui.navigation.length - 1]
    ),
    slides: useSelector((state: StoreState) => mapStateToSlidesProps(state, dispatch, options)),
    navigateBack: () => dispatch(navigateBack)
  };

  return <AppReviewTemplate {...props} />;
};

const storeTokenAndCreateProgression = async (
  store: Store<StoreState>,
  options: AppOptions
): Promise<void> => {
  const token = get('token', options);
  if (store === null || isEmpty(token)) return;
  store.dispatch(storeToken(token));

  const skillRef = get('skillRef', options);
  const testingSlideRef = get('testingSlideRef', options);

  if (skillRef) {
    store.dispatch(navigateTo('loader'));
    await store.dispatch(postProgression(skillRef, testingSlideRef));
    store.dispatch(navigateTo('slides'));
  }
};

const AppReview = ({options}: {options: AppOptions}): JSX.Element | null => {
  const [store, setStore] = useState<Store<StoreState, AnyAction> | null>(null);
  const {translate, onQuitClick, skin, backgroundImage} = options;

  useEffect(() => {
    const newStore = configureStore(options);
    setStore(newStore);
    storeTokenAndCreateProgression(newStore, options);

    // should create store, store token and create progression only once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!store) return null;

  return (
    <Provider store={store}>
      <ConnectedApp
        onQuitClick={onQuitClick}
        translate={translate}
        skin={skin}
        backgroundImage={backgroundImage}
      />
    </Provider>
  );
};

declare global {
  // eslint-disable-next-line no-shadow
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Function;
  }
}

export default AppReview;
