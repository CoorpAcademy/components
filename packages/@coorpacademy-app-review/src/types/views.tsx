/* eslint-disable @typescript-eslint/no-explicit-any */
import {FinishedSlides} from './finished-slides';
import {ReviewStatus} from './review-status';
import {SlideNumber, Slides} from './slides';
import {StepItems} from './step-items';

type SlidesPayload = {
  slideNumber: SlideNumber;
  newSlideContent: {
    hidden?: boolean;
    position: SlideNumber;
  };
  numberOfFinishedSlides: number;
};

type FinishedSlidesPayload = {
  slideNumber: SlideNumber;
  value: true;
};

type StepItemsPayload = {
  stepNumber: SlideNumber;
  finishedSlides: FinishedSlides;
};

type OnSlideValidation = ({
  slidesPayload,
  finishedSlidesPayload,
  stepItemsPayload
}: {
  slidesPayload: SlidesPayload;
  finishedSlidesPayload: FinishedSlidesPayload;
  stepItemsPayload: Omit<StepItemsPayload, 'finishedSlides'>;
}) => void;

type OnNextClick = ({
  slidesPayload,
  stepItemsPayload
}: {
  slidesPayload: SlidesPayload;
  stepItemsPayload: StepItemsPayload;
}) => void;

type SlidesViewProps = {
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
  validateSlide: OnSlideValidation;
  reviewBackgroundAriaLabel?: string;
  loadNextSlide: OnNextClick;
};

export {SlidesViewProps};
