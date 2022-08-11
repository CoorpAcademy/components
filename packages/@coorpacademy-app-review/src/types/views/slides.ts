/* eslint-disable @typescript-eslint/no-explicit-any */
import type {StoreState} from '../../reducers';
import {Dispatchers} from '../../actions';
import {StepItem} from '../../reducers/ui/step-items';

type CorrectionPopinProps = {
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

type SlidesViewStaticProps = {
  header: {
    mode: string;
    skillName: string;
    onQuitClick: Function;
    'aria-label'?: string;
    closeButtonAriaLabel: string;
    steps: StepItem[];
  };
  stack: {
    slides: StoreState['ui']['slides'];
    validateButton: {
      label: string;
      disabled: boolean;
      onClick: Function;
    };
    correctionPopinProps?: CorrectionPopinProps;
    endReview: boolean;
    finishedSlides: StoreState['ui']['finishedSlides'];
  };
  reviewBackgroundAriaLabel?: string;
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
  // props dont on connait pas l'utilisation
  apiSlides: StoreState['data']['slides'];
  progression: StoreState['data']['progression'];
};

type SlidesViewDispatcherProps = Omit<Dispatchers, 'navigateTo' | 'navigateBack'>;

type SlidesViewProps = SlidesViewStaticProps & SlidesViewDispatcherProps;

export {CorrectionPopinProps, SlidesViewStaticProps, SlidesViewDispatcherProps, SlidesViewProps};
