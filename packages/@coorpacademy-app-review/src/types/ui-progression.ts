export type UiProgression = {
  _id?: string;
  // virtual field
  slideNumber?: number;
  isCorrect?: boolean;
  // pass down the successExitNode if all slides are finished, not before
  exitNode?: 'successExitNode' | 'failExitNode';
  // TODO: create another action, to retrieve the next slide
  // ex: nextContent: {ref: "sli_E1n2i2sBo", type: "slide"}
  // the middleware should trigger a nextContent request once the result is
  // received && update the state accordingly
  // nextContent?: {
  //   questionText?: string;
  //   answerUI?: AnswerUI;
  // };
  nextContent?: {
    ref: 'successExitNode' | string;
    type: 'success' | 'slide';
  };
  // unused for now / to decide whether to use it when the
  // validation-progression is plugged in
  // step: {
  //   current: number;
  // };
} | null;
