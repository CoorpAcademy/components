import React, {useEffect, useState} from 'react';
import type {} from 'redux-thunk/extend-redux'; // https://github.com/reduxjs/redux-thunk/issues/333
import {AnyAction, Store} from 'redux';
import {connect, Provider} from 'react-redux';
import AppReviewTemplate from '@coorpacademy/components/es/template/app-review';
import {TemplateContext} from '@coorpacademy/components/es/template/app-review/template-context';

import isEmpty from 'lodash/fp/isEmpty';
import get from 'lodash/fp/get';
import configureStore from './configure-store';
import {congratsProps, correctionPopinProps} from './fixtures/temp-fixture';

import type {AppOptions} from './types/common';
import type {StoreState} from './reducers';
import {SkillsProps} from './types/views/skills';
import type {SlidesViewStaticProps} from './types/views/slides';

import {Dispatchers} from './actions';
import {updateSlidesOnNext, updateSlidesOnValidation, validateSlide} from './actions/data/slides';
import {navigateTo, navigateBack, ViewPath} from './actions/ui/navigation';
import {storeToken} from './actions/data/token';
import {updateFinishedSlides} from './actions/ui/finished-slides';
import {updateReviewStatus} from './actions/ui/review-status';
import {updateStepItemsOnValidation, updateStepItemsOnNext} from './actions/ui/step-items';
import {fetchSkills} from './actions/api/fetch-skills';
import {postProgression} from './actions/api/post-progression';
import {VIEWS} from './common';

type StaticProps = {
  viewName: 'skills' | 'onboarding' | 'slides' | 'loader';
  slides: SlidesViewStaticProps | null;
  skills: SkillsProps | null;
};

const mapDispatchToProps: Dispatchers = {
  navigateTo,
  navigateBack,
  validateSlide,
  updateSlidesOnValidation,
  updateSlidesOnNext,
  updateReviewStatus,
  updateStepItemsOnValidation,
  updateStepItemsOnNext,
  updateFinishedSlides
};

const getCurrentViewName = (storeState: StoreState): ViewPath =>
  storeState.ui.navigation[storeState.ui.navigation.length - 1];

const mapStateToSkillsProps = (state: StoreState): SkillsProps | null => {
  if (!state.data.skills) {
    return null;
  }

  return {
    title: '@todo title',
    titleNoSkills: '@todo titleNoSkills',
    textNoSkills: '@todo textNoSkills',
    iconSkillAriaLabel: '@todo iconSkillAriaLabel',
    isLoading: false,
    isLoadingAriaLabel: '@todo loading',
    listSkills: state.data.skills.map(skill => ({
      'aria-label': '',
      isCustom: skill.custom,
      skillTitle: skill.name,
      skillAriaLabel: '@todo skill aria label',
      buttonLabel: '@todo button',
      buttonAriaLabel: '@todo button aria label',
      reviseLabel: '@todo revise',
      reviseAriaLabel: '@todo revise aria label',
      // eslint-disable-next-line no-console
      onClick: () => console.log('@todo plug dispatcher select skill')
    }))
  };
};

const mapStateToSlidesProps = (state: StoreState): SlidesViewStaticProps | null => {
  if (!state.data.slides) {
    return null;
  }

  return {
    headerProps: {
      mode: '__revision_mode',
      skillName: '__agility',
      onQuitClick: (): void => {
        // eslint-disable-next-line no-console
        console.log('onQuitClick');
      },
      'aria-label': 'aria-header-wrapper',
      closeButtonAriaLabel: 'aria-close-button'
    },
    slides: state.data.slides,
    validate: {
      label: '__validate'
    },
    finishedSlides: state.ui.finishedSlides,
    stepItems: state.ui.stepItems,
    reviewStatus: state.ui.reviewStatus,
    correctionPopinProps,
    congratsProps,
    progression: state.data.progression
  };
};

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
  const [isSlideFetched, setIsSlideFetched] = useState(false);

  useEffect(() => {
    if (store) return;

    const newStore = configureStore(options);
    setStore(newStore);
  }, [options, store]);

  useEffect(() => {
    if (!store || isSlideFetched) return;

    return store.subscribe(() => {
      const isSlidePresent = !isEmpty(store.getState().data.slides[0].questionText);
      return isSlidePresent && setIsSlideFetched(isSlidePresent);
    }); // using the first slide questionText for now, should only check for a slide's presence
    // when the refactor is done (slides will be feed one by one on api's side)
  }, [isSlideFetched, options, store]);

  useEffect(() => {
    const token = get('token', options);
    if (store === null || isEmpty(token)) return;
    store.dispatch(storeToken(token));
  }, [options, store]);

  useEffect(() => {
    const token = get('token', options);
    if (store === null || isEmpty(token)) return;

    const skillRef = get('skillRef', options);

    // ThunkAction is not assignable to parameter of type 'AnyAction'
    // ts problem describre here = https://github.com/reduxjs/redux-thunk/issues/333
    skillRef
      ? store.dispatch(postProgression(skillRef, token))
      : store.dispatch(fetchSkills(token));
  }, [options, store]);

  useEffect(() => {
    if (store === null) return;

    const {skillRef} = options;

    if (skillRef && !isSlideFetched) {
      store.dispatch(navigateTo('loader')); // use loader while posting progression
      return;
    }

    // TODO: when slides state is refactored (data + mapping),
    // use loader in case a skillRef is found && no slides from the API
    // are found

    const initialView: ViewPath = skillRef ? VIEWS.slides : VIEWS.skills;
    store.dispatch(navigateTo(initialView));
  }, [isSlideFetched, options, store]);

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
