import React, {useEffect, useState} from 'react';
import {AnyAction, Store} from 'redux';
import {connect, Provider} from 'react-redux';
import AppReviewTemplate from '@coorpacademy/components/es/template/app-review';

import configureStore, {StoreState} from './configure-store';
import {congratsProps, correctionPopinProps} from './fixtures/temp-fixture';

import type {AppOptions} from './types/common';
import {SkillsProps} from './types/views/skills';
import type {SlidesViewStaticProps} from './types/views/slides';

import {Dispatchers} from './actions';
import {updateSlidesOnNext, updateSlidesOnValidation, validateSlide} from './actions/data/slides';
import {navigateTo, navigateBack, startApp, ViewPath} from './actions/ui/navigation';
import {updateFinishedSlides} from './actions/ui/finished-slides';
import {updateReviewStatus} from './actions/ui/review-status';
import {updateStepItemsOnValidation, updateStepItemsOnNext} from './actions/ui/step-items';

// -----------------------------------------------------------------------------

type StaticProps = {
  viewName: 'skills' | 'onboarding' | 'slides';
  slides: SlidesViewStaticProps;
  skills: SkillsProps;
};

// -----------------------------------------------------------------------------

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

const mapStateToSkillsProps = (state: StoreState): SkillsProps => ({
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
});

const mapStateToProps = (state: StoreState): StaticProps => ({
  viewName: getCurrentViewName(state),
  slides: {
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
  },
  skills: mapStateToSkillsProps(state)
});

// Props = StaticProps && Dispatchers

const App = connect(mapStateToProps, mapDispatchToProps)(AppReviewTemplate);

// -----------------------------------------------------------------------------

const AppReview = ({options}: {options: AppOptions}): JSX.Element => {
  const [store, setStore] = useState<Store<StoreState, AnyAction> | null>(null);
  const [appStarted, setAppStarted] = useState<boolean>(false);

  useEffect(() => {
    if (store) {
      store.dispatch(startApp(options));
      setAppStarted(true);
    } else {
      const _configure = async (): Promise<void> => {
        const newStore = await configureStore();
        setStore(newStore);
      };
      _configure();
    }
  }, [options, store]);

  if (!store || !appStarted) return <div />;

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

// -----------------------------------------------------------------------------

export default AppReview;
