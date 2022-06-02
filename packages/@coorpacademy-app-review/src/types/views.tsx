import {Slide} from './slide';

type SlidesViewProps = {
  slide: Slide;
  validate: {
    label: string;
  };
  congratsProps?: {
    ariaLabel: string;
    dataName: string;
    animationLottie: any;
    title: string;
    cardCongratsStar: any;
    cardCongratsRank: any;
    buttonRevising: {
      label: string;
      onClick: Function;
      type: string;
    };
    buttonRevisingSkill: {
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
};

export {SlidesViewProps};
