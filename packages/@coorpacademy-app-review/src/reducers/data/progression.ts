import {getOr, noop} from 'lodash/fp';
import {ValidateSlide, VALIDATE_SLIDE} from '../../actions/data/slides';
import {AnswerUI} from '../../types/slides';

// -----------------------------------------------------------------------------

export type ProgressionState = {
  // virtual field
  slideNumber: number;
  isCorrect?: boolean;
  // pass down the successExitNode if all slides are finished, not before
  exitNode?: 'successExitNode' | 'failExitNode';
  // TODO: create another action, to retrieve the next slide
  // nextSlide should be renamed as nextContent when this new action is created
  // ex: nextContent: {ref: "sli_E1n2i2sBo", type: "slide"}
  // the middleware should trigger a nextSlide request once the result is
  // received && update the state accordingly
  nextSlide?: {
    questionText?: string;
    answerUI?: AnswerUI;
  };
} | null;

// -----------------------------------------------------------------------------

export const initialState: ProgressionState = null;

// -----------------------------------------------------------------------------

const reducer = (
  // eslint-disable-next-line default-param-last
  state: ProgressionState = initialState,
  action: ValidateSlide
): ProgressionState => {
  switch (action.type) {
    case VALIDATE_SLIDE: {
      const previousSlideNumber: number = getOr(-1, 'slideNumber', state);
      // hard coded for now
      return {
        // virtual field
        slideNumber: previousSlideNumber + 1,
        isCorrect: true,
        // exitNode
        // TODO: create another action, to retrieve the next slide
        // nextSlide should be corrected to nextContent, when this new action is created
        // ex: nextContent: {ref: "sli_E1n2i2sBo", type: "slide"}
        // the middleware should trigger a next content request once the result is
        // received && update the state accordingly,
        //
        nextSlide: {
          questionText: 'Test',
          answerUI: {
            model: {
              answers: [
                {
                  title: 'There is no need for a password',
                  // TODO: onClick of each answer should use a dispatcher to
                  // update selected answers (in order to use them on validation)
                  // in each retrieval, the answers of answerUI need to be augmented
                  // for the onClick prop to achieve this.
                  onClick: noop,
                  selected: false,
                  help: 'help'
                },
                {
                  title: 'Lorem ipsum',
                  onClick: noop,
                  selected: false,
                  help: 'help'
                },
                {
                  title: 'Lorem',
                  onClick: noop,
                  selected: true,
                  order: 1,
                  help: 'help'
                },
                {
                  title: 'You need to have a password',
                  onClick: noop,
                  selected: false,
                  help: 'help'
                },
                {
                  title: 'Pouet',
                  onClick: noop,
                  selected: true,
                  order: 0,
                  help: 'help'
                }
              ],
              type: 'qcmDrag'
            },
            help: 'Help text will appear here'
          }
        }
      };
    }
    default:
      return state;
  }
};

// -----------------------------------------------------------------------------

export default reducer;
