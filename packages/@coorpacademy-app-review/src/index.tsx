import React, {useEffect, useState} from 'react';
import {connect, Provider} from 'react-redux';
import AppReviewTemplate from '@coorpacademy/components/es/template/app-review';

import configureStore from './configure-store';
import {navigateTo, navigateBack, startApp} from './actions/navigation';
import {updateSlidesOnNext, updateSlidesOnValidation} from './actions/slides';
import {getCurrentViewName} from './reducers/navigation';
import type {SlidesViewStaticProps} from './types/views';
import type {AppOptions} from './types/common';
import type {StoreState} from './types/store-state';
import {congratsProps, correctionPopinProps} from './fixtures/temp-fixture';
import {updateFinishedSlides} from './actions/finished-slides';
import {updateReviewStatus} from './actions/review-status';
import {updateStepItemsOnValidation, updateStepItemsOnNext} from './actions/step-items';
import type {Dispatchers} from './types/dispatchers';
import {validateSlide} from './actions/data/validate-slide';
import {SkillsProps} from './types/views/skills';

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
    slides: state.ui.slides,
    validate: {
      label: '__validate'
    },
    finishedSlides: state.ui.finishedSlides,
    stepItems: state.ui.stepItems,
    reviewStatus: state.ui.reviewStatus,
    correctionPopinProps,
    congratsProps,
    slideValidationResult: state.data.slideValidationResult
  },
  skills: mapStateToSkillsProps(state)
});

// Props = StaticProps && Dispatchers

const App = connect(mapStateToProps, mapDispatchToProps)(AppReviewTemplate);

// -----------------------------------------------------------------------------

const AppReview = ({options}: {options: AppOptions}): JSX.Element => {
  const [store, setStore] = useState(null);
  const [appStarted, setAppStarted] = useState(false);

  useEffect(() => {
    if (store) {
      store.dispatch(startApp(options));
      setAppStarted(true);
    } else {
      const _configure = async (): Promise<void> => {
        const _store = await configureStore();
        setStore(_store);
      };
      _configure();
    }
  }, [options, store]);

  if (!store || !appStarted) return null;

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
