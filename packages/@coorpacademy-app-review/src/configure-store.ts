import {AnyAction, applyMiddleware, compose, createStore, Store} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import onStartApp from './middlewares/on-start-app';

import {SkillsState} from './reducers/data/skills';
import {SlidesState} from './reducers/data/slides';
import {TokenState} from './reducers/data/token';
import {NavigationState} from './reducers/ui/navigation';
import {ReviewStatusState} from './reducers/ui/review-status';
import {StepItemsState} from './reducers/ui/step-items';
import {FinishedSlidesState} from './reducers/ui/finished-slides';

import {AnswerUI} from './types/slides';

// -----------------------------------------------------------------------------

type DataState = {
  isFetching?: boolean;
  progression?: {
    slideNumber: number;
    isCorrect?: boolean;
    // pass down the successExitNode if all slides are finished, not before
    exitNode?: 'successExitNode' | 'failExitNode';
    nextSlide?: {
      questionText?: string;
      answerUI?: AnswerUI;
    };
  } | null;
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
  };
  data: DataState;
};

// -----------------------------------------------------------------------------

export default function configureStore(): Store<StoreState, AnyAction> {
  const _compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'app-review',
        trace: true,
        traceLimit: 25
      })
    : compose;

  const enhancer = _compose(applyMiddleware(thunk, onStartApp));
  const store = createStore(rootReducer, undefined, enhancer);

  return store;
}
