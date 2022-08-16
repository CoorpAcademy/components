import React, {useEffect, useState} from 'react';
import type {} from 'redux-thunk/extend-redux'; // https://github.com/reduxjs/redux-thunk/issues/333
import {AnyAction, Store} from 'redux';
import {connect, Provider} from 'react-redux';
import AppReviewTemplate from '@coorpacademy/components/es/template/app-review';
import {TemplateContext} from '@coorpacademy/components/es/template/app-review/template-context';

import isEmpty from 'lodash/fp/isEmpty';
import get from 'lodash/fp/get';
import configureStore from './configure-store';

import type {AppOptions} from './types/common';
import type {StoreState} from './reducers';
import type {SlidesViewStaticProps} from './types/views/slides';

import {Dispatchers} from './actions';
import {validateSlide} from './actions/data/slides';
import {updateSlidesOnNext} from './actions/ui/slides';

import {navigateTo, navigateBack, ViewPath} from './actions/ui/navigation';
import {storeToken} from './actions/data/token';
import {updateFinishedSlides} from './actions/ui/finished-slides';
import {updateReviewStatus} from './actions/ui/review-status';
import {fetchSkills} from './actions/api/fetch-skills';
import {postProgression} from './actions/api/post-progression';
import {VIEWS} from './common';
import {mapStateToSlidesProps} from './views/slides';
import {mapStateToSkillsProps, SkillsProps} from './views/skills';

type StaticProps = {
  viewName: 'skills' | 'onboarding' | 'slides' | 'loader';
  slides: SlidesViewStaticProps | null;
  skills: SkillsProps | null;
};

const mapDispatchToProps: Dispatchers = {
  navigateTo,
  navigateBack,
  validateSlide,
  updateSlidesOnNext,
  updateReviewStatus,
  updateFinishedSlides
};

const getCurrentViewName = (storeState: StoreState): ViewPath =>
  storeState.ui.navigation[storeState.ui.navigation.length - 1];

const mapStateToProps = (state: StoreState): StaticProps => {
  return {
    viewName: getCurrentViewName(state),
    slides: mapStateToSlidesProps(state),
    skills: mapStateToSkillsProps(state)
  };
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppReviewTemplate);

const AppReview = ({options}: {options: AppOptions}): JSX.Element | null => {
  const [store, setStore] = useState<Store<StoreState, AnyAction> | null>(null);
  const [isProgressionCreated, setIsProgressionCreated] = useState(false);

  useEffect(() => {
    if (store) return;

    const newStore = configureStore(options);
    setStore(newStore);
  }, [options, store]);

  useEffect(() => {
    if (!store || isProgressionCreated) return;

    return store.subscribe(() => {
      const isProgressionPresent = !isEmpty(store.getState().data.progression);
      return isProgressionPresent && setIsProgressionCreated(isProgressionPresent);
    });
  }, [isProgressionCreated, options, store]);

  useEffect(() => {
    const token = get('token', options);
    if (store === null || isEmpty(token)) return;
    store.dispatch(storeToken(token));
  }, [options, store]);

  useEffect(() => {
    const token = get('token', options);
    if (store === null || isEmpty(token)) return;

    const skillRef = get('skillRef', options);

    /* ThunkAction is not assignable to parameter of type 'AnyAction'
      ts problem is described here = https://github.com/reduxjs/redux-thunk/issues/333 */
    skillRef
      ? store.dispatch(postProgression(skillRef, token))
      : store.dispatch(fetchSkills(token));
  }, [options, store]);

  useEffect(() => {
    if (store === null) return;

    const {skillRef} = options;

    if (skillRef && !isProgressionCreated) {
      store.dispatch(navigateTo('loader')); // use loader while posting progression
      return;
    }

    const initialView: ViewPath = skillRef ? VIEWS.slides : VIEWS.skills;
    store.dispatch(navigateTo(initialView));
  }, [isProgressionCreated, options, store]);

  if (!store) return null;

  const {templateContext: values} = options;

  return (
    <Provider store={store}>
      <TemplateContext values={values}>
        <App />
      </TemplateContext>
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
