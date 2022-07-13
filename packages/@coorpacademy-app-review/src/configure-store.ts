import {AnyAction, applyMiddleware, compose, createStore, Store} from 'redux';
import thunk from 'redux-thunk';

import crossFetch from 'cross-fetch';
import rootReducer from './reducers';

import {SkillsState} from './reducers/data/skills';
import {SlidesState} from './reducers/data/slides';
import {TokenState} from './reducers/data/token';
import {NavigationState} from './reducers/ui/navigation';
import {ReviewStatusState} from './reducers/ui/review-status';
import {StepItemsState} from './reducers/ui/step-items';
import {FinishedSlidesState} from './reducers/ui/finished-slides';
import {ProgressionState} from './reducers/data/progression';
import createServices from './services';
import {AppOptions} from './types/common';

// -----------------------------------------------------------------------------

type DataState = {
  isFetching?: boolean;
  progression?: ProgressionState;
  skills: SkillsState;
  slides: SlidesState;
  token?: TokenState;
};

export type StoreState = {
  ui: {
    navigation: NavigationState;
    stepItems: StepItemsState;
    finishedSlides: FinishedSlidesState;
    reviewStatus: ReviewStatusState;
    // progression: UiProgression;
  };
  data: DataState;
};

// -----------------------------------------------------------------------------

export default function configureStore(options: AppOptions): Store<StoreState, AnyAction> {
  const _compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'app-review',
        trace: true,
        traceLimit: 25
      })
    : compose;

  const services = createServices(options.fetch || crossFetch);
  const thunkMiddleware = thunk.withExtraArgument({services});

  const enhancer = _compose(applyMiddleware(thunkMiddleware));
  const store = createStore(rootReducer, undefined, enhancer);

  return store;
}
