import {
  concat,
  constant,
  divide,
  get,
  getOr,
  head,
  includes,
  indexOf,
  isEmpty,
  isNil,
  map,
  multiply,
  pipe,
  rangeStep,
  round,
  set,
  size,
  times,
  toInteger,
  toString as _toString,
  __
} from 'lodash/fp';
import {Dispatch} from 'redux';
import {
  AnswerUI,
  FreeText,
  Qcm,
  QcmDrag,
  QcmGraphic,
  QuestionRange,
  SelectionTemplate,
  Template,
  TextTemplate
} from '../../types/slides';
import {
  BasicQuestion,
  ChoiceFromAPI,
  QcmDragQuestion,
  QcmGraphicQuestion,
  QcmQuestion,
  Question,
  SlideFromAPI,
  SliderQuestion,
  TemplateQuestion
} from '../../types/common';
import {editAnswer} from '../../actions/ui/answers';

const qcmProps =
  (dispatch: Dispatch) =>
  (answers: string[], question: QcmQuestion): Qcm => {
    return {
      type: 'qcm',
      answers: map(choice => {
        const label = choice.label || '';
        return {
          title: label,
          selected: includes(label, answers),
          onClick: (): void => {
            dispatch(editAnswer(label));
          },
          ariaLabel: choice.label
        };
      }, question.content.choices)
    };
  };

const qcmDragProps =
  (dispatch: Dispatch) =>
  (answers: string[], question: QcmDragQuestion): QcmDrag => {
    return {
      type: 'qcmDrag',
      answers: map(choice => {
        const label = choice.label || '';
        const indexInAnswer = indexOf(label, answers);
        return {
          title: label,
          selected: includes(label, answers),
          order: indexInAnswer,
          onClick: (): void => {
            dispatch(editAnswer(label));
          }
        };
      }, question.content.choices)
    };
  };

const qcmGraphicProps =
  (dispatch: Dispatch) =>
  (answers: string[], question: QcmGraphicQuestion): QcmGraphic => {
    return {
      type: 'qcmGraphic',
      answers: map(choice => {
        const label = choice.label || '';
        return {
          title: label,
          image: get('media.src.0.url', choice),
          selected: includes(label, answers),
          onClick: (): void => {
            dispatch(editAnswer(label));
          }
        };
      }, question.content.choices)
    };
  };

const updateTemplateAnswer = (
  text: string,
  _answers: string[],
  index: number,
  max: number
): string[] => {
  const answers = isEmpty(_answers) ? times(constant(undefined), max) : _answers;
  return map(a => (isNil(a) ? '' : a), set(index, text, answers)) as string[];
};

const templateTextProps = (
  dispatch: Dispatch,
  answers: string[],
  choice: ChoiceFromAPI,
  index: number,
  maxLength: number
): TextTemplate => {
  return {
    type: 'text',
    name: getOr('', 'name', choice),
    placeholder: 'Type here',
    value: get(index, answers),
    onChange: (text: string): void => {
      const newAnswers = updateTemplateAnswer(text, answers, index, maxLength);
      dispatch(editAnswer(newAnswers));
    }
  };
};

const templateSelectProps = (
  dispatch: Dispatch,
  answers: string[],
  choice: ChoiceFromAPI,
  index: number,
  maxLength: number
): SelectionTemplate => {
  const answer = get(index, answers);
  const temporaryOption = {
    name: 'Select an answer', // TODO translate
    value: '',
    validOption: false,
    selected: true
  };
  const selectOptions = choice.items.map(item => {
    const itemText = getOr('', 'text', item);
    return {
      name: itemText,
      value: itemText,
      validOption: true,
      selected: itemText === answer
    };
  });

  return {
    type: 'select',
    name: getOr('', 'name', choice),
    onChange: (text: string): void => {
      const newAnswers = updateTemplateAnswer(text, answers, index, maxLength);
      dispatch(editAnswer(newAnswers));
    },
    options: isEmpty(answer) ? concat([temporaryOption], selectOptions) : selectOptions
  };
};

const templateProps =
  (dispatch: Dispatch) =>
  (answers: string[], question: TemplateQuestion): Template => {
    const choices = question.content.choices;
    const maxLength = size(choices);
    return {
      type: 'template',
      template: get('content.template', question),
      answers: choices.map((choice, index) =>
        choice.type === 'text'
          ? templateTextProps(dispatch, answers, choice, index, maxLength)
          : templateSelectProps(dispatch, answers, choice, index, maxLength)
      )
    };
  };

const basicProps =
  (dispatch: Dispatch) =>
  (answers: string[], question: BasicQuestion): FreeText => {
    return {
      type: 'freeText',
      placeholder: question.content.placeholder || '',
      value: answers[0] || '',
      onChange: (text: string): void => {
        dispatch(editAnswer(text));
      }
    };
  };

const sliderProps =
  (dispatch: Dispatch) =>
  (answers: string[], question: SliderQuestion): QuestionRange => {
    const values: number[] = rangeStep(
      getOr(1, 'content.step', question),
      get('content.min', question),
      get('content.max', question) + 1
      // Lodash doesn't infer the type very well here
    ) as unknown as number[];

    const stateValue = head(answers) || question.content.min;
    const currentValue = toInteger(stateValue);

    const indexValue = indexOf(currentValue, values);
    const maxValue = size(values) - 1;
    const sliderPosition = divide(indexValue, maxValue);

    const unitLabel = get('content.unitLabel', question);

    return {
      type: 'slider',
      placeholder: question.explanation,
      minLabel: `${question.content.min} ${unitLabel}`,
      maxLabel: `${question.content.max} ${unitLabel}`,
      title: `${currentValue} ${question.content.unitLabel}`,
      value: sliderPosition,
      onChange: (position: number): void => {
        const newValue = pipe(multiply(maxValue), round, get(__, values), _toString)(position);
        dispatch(editAnswer(newValue));
      }
    };
  };

export const getQuestionType = (question: Question): Question['type'] => question.type;

const getHelp = (slide: SlideFromAPI): string => get('question.explanation', slide);

const getAnswerUIModel = (
  question: Question,
  answers: string[],
  dispatch: Dispatch
): AnswerUI['model'] => {
  const type = getQuestionType(question);
  switch (type) {
    case 'qcm':
      return qcmProps(dispatch)(answers, question as QcmQuestion);

    case 'qcmGraphic':
      return qcmGraphicProps(dispatch)(answers, question as QcmGraphicQuestion);

    case 'qcmDrag':
      return qcmDragProps(dispatch)(answers, question as QcmDragQuestion);

    case 'basic':
      return basicProps(dispatch)(answers, question as BasicQuestion);

    case 'template':
      return templateProps(dispatch)(answers, question as TemplateQuestion);

    case 'slider':
      return sliderProps(dispatch)(answers, question as SliderQuestion);

    default:
      throw new Error(`${type} is not an handled question.type`);
  }
};

export const mapApiSlideToUi =
  (dispatch: Dispatch) =>
  (slide: SlideFromAPI, answers: string[]): {questionText: string; answerUI: AnswerUI} => {
    if (!slide) {
      throw new Error('no slide was found');
    }
    const questionText = getOr('', 'question.header', slide);

    return {
      questionText,
      answerUI: {model: getAnswerUIModel(slide.question, answers, dispatch), help: getHelp(slide)}
    };
  };
