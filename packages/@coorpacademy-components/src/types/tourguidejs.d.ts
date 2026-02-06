declare module '@sjmc11/tourguidejs' {
  export interface TourGuideStep {
    target?: string | HTMLElement | Element | HTMLInputElement | null;
    title?: string;
    content: string | HTMLElement | Element;
    order?: number;
    group?: string;
    position?: string;
    fixed?: boolean;
    dialogTarget?: string | HTMLElement | Element | HTMLInputElement | null;
    propagateEvents?: boolean;
    beforeEnter?: (currentStep: TourGuideStep, nextStep: TourGuideStep) => void | Promise<unknown>;
    afterEnter?: (currentStep: TourGuideStep, nextStep: TourGuideStep) => void | Promise<unknown>;
    beforeLeave?: (currentStep: TourGuideStep, nextStep: TourGuideStep) => void | Promise<unknown>;
    afterLeave?: (currentStep: TourGuideStep, nextStep: TourGuideStep) => void | Promise<unknown>;
    buttons?: Array<{
      text?: string;
      type?: string;
    }>;
  }

  export interface TourGuideOptions {
    autoScroll?: boolean;
    autoScrollSmooth?: boolean;
    autoScrollOffset?: number;
    backdropClass?: string;
    backdropAnimate?: boolean;
    backdropColor?: string;
    targetPadding?: number;
    dialogClass?: string;
    allowDialogOverlap?: boolean;
    dialogZ?: number;
    dialogWidth?: number;
    dialogMaxWidth?: number;
    dialogAnimate?: boolean;
    dialogPlacement?: string;
    nextLabel?: string;
    prevLabel?: string;
    finishLabel?: string;
    hideNext?: boolean;
    hidePrev?: boolean;
    completeOnFinish?: boolean;
    keyboardControls?: boolean;
    exitOnEscape?: boolean;
    exitOnClickOutside?: boolean;
    showStepDots?: boolean;
    stepDotsPlacement?: 'footer' | 'body';
    showButtons?: boolean;
    showStepProgress?: boolean;
    progressBar?: string;
    closeButton?: boolean;
    rememberStep?: boolean;
    debug?: boolean;
    steps?: TourGuideStep[];
    activeStepInteraction?: boolean;
  }

  export interface TourGuideConfig extends TourGuideOptions {
    steps: TourGuideStep[];
  }

  export class TourGuideClient {
    constructor(config?: TourGuideConfig);

    start(group?: string): Promise<void>;

    exit(): Promise<void>;
  }
}
