/* eslint-disable @typescript-eslint/no-explicit-any */
import type {StoreState} from '../../reducers';
import {Dispatchers} from '../../actions';

type SlidesViewStaticProps = {
  apiSlides: StoreState['data']['slides'];
  uiSlides: StoreState['ui']['slides'];
  headerProps: {
    mode: string;
    skillName: string;
    onQuitClick: Function;
    'aria-label'?: string;
    closeButtonAriaLabel: string;
  };
  finishedSlides: StoreState['ui']['finishedSlides'];
  stepItems: StoreState['ui']['stepItems'];
  reviewStatus: StoreState['ui']['reviewStatus'];
  validate: {
    label: string;
  };
  congratsProps?: {
    'aria-label'?: string;
    'data-name'?: string;
    animationLottie: any;
    title: string;
    cardCongratsStar: any;
    cardCongratsRank: any;
    buttonRevising: {
      'aria-label'?: string;
      label: string;
      onClick: Function;
      type: string;
    };
    buttonRevisingSkill: {
      'aria-label'?: string;
      label: string;
      onClick: Function;
      type: string;
    };
  };
  correctionPopinProps?: {
    klf: {
      label: string;
      onClick: Function;
      tooltip: string;
    };
    information: {
      label: string;
      message: string;
    };
    next: {
      label: string;
      ariaLabel: string;
    };
    successLabel: string;
    failureLabel: string;
  };
  reviewBackgroundAriaLabel?: string;
  progression: StoreState['data']['progression'];
};

type SlidesViewDispatcherProps = Omit<Dispatchers, 'navigateTo' | 'navigateBack'>;

type SlidesViewProps = SlidesViewStaticProps & SlidesViewDispatcherProps;

export {SlidesViewStaticProps, SlidesViewDispatcherProps, SlidesViewProps};
