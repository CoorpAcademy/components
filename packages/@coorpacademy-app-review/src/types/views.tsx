/* eslint-disable @typescript-eslint/no-explicit-any */
import {ApiState} from './api';
import {Dispatchers} from './dispatchers';
import {FinishedSlides} from './finished-slides';
import {ReviewStatus} from './review-status';
import {Slides} from './slides';
import {StepItems} from './step-items';

type SlidesViewStaticProps = {
  slides: Slides;
  finishedSlides: FinishedSlides;
  stepItems: StepItems;
  reviewStatus: ReviewStatus;
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
  slideValidationResult: ApiState['entities']['slideValidationResult'];
};

type SlidesViewDispatcherProps = Omit<Dispatchers, 'navigateTo' | 'navigateBack'>;

type SlidesViewProps = SlidesViewStaticProps & SlidesViewDispatcherProps;

export {SlidesViewStaticProps, SlidesViewDispatcherProps, SlidesViewProps};
