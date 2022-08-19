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
import type {SlidesViewProps} from './views/slides';

import {navigateTo, ViewPath} from './actions/ui/navigation';
import {storeToken} from './actions/data/token';
import {fetchSkills} from './actions/api/fetch-skills';
import {postProgression} from './actions/api/post-progression';
import {VIEWS} from './common';
import {mapStateToSlidesProps} from './views/slides';
import {mapStateToSkillsProps, SkillsProps} from './views/skills';
import {fetchSlide} from './actions/api/fetch-slide';
import {setCurrentSlide} from './actions/ui/slides';

type StaticProps = {
  viewName: 'skills' | 'onboarding' | 'slides' | 'loader';
  slides: SlidesViewProps | null;
  skills: SkillsProps | null;
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

const App = connect(mapStateToProps)(AppReviewTemplate);

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

    const start = async () => {
      const skillRef = get('skillRef', options);

      if (skillRef) {
        const responseProgression = await store.dispatch(postProgression(skillRef, token));
        if (!responseProgression.error) {
          const progression = responseProgression.payload;
          const responseSlide = await store.dispatch(fetchSlide(progression, token));

          const slideFromAPI = responseSlide.payload;

          if (!slideFromAPI) throw new Error('Slide not found');
          const state = store.getState();
          const slides = get('data.progression.state.slides', state);
          if (isEmpty(slides)) {
            store.dispatch(setCurrentSlide(slideFromAPI));
          }
        }
      } else {
        store.dispatch(fetchSkills(token));
      }
    };

    start();
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
