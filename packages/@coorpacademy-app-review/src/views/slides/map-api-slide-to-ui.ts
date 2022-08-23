import {
  concat,
  divide,
  get,
  getOr,
  head,
  includes,
  indexOf,
  isEmpty,
  map,
  rangeStep,
  size,
  toInteger
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

const qcmDragProps = (question: QcmDragQuestion): QcmDrag => {
  // TODO: EDIT_CHOICES -> getAnswerValues
  const answers: string[] = [];
  return {
    type: 'qcmDrag',
    answers: map(choice => {
      const indexInAnswer = indexOf(choice.label, answers);
      return {
        title: choice.label,
        selected: includes(choice.label, answers),
        order: indexInAnswer,
        // TODO: EDIT_CHOICES
        // eslint-disable-next-line no-console
        onClick: () => console.log('TODO: on choice click')
      };
      // TODO: EDIT_CHOICES -> getChoices
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

const templateTextProps = (choice: ChoiceFromAPI, index: number): TextTemplate => {
  // TODO: EDIT_CHOICES -> getAnswerValues
  const answers: string[] = [];
  return {
    type: 'text',
    name: getOr('', 'name', choice), // TODO prendre valeur depuis les données de l'api
    placeholder: 'Type here',
    value: get(index, answers),
    // TODO: EDIT_CHOICES
    // eslint-disable-next-line no-console
    onChange: () => console.log('TODO: on choice change')
  };
};

const templateSelectProps = (choice: ChoiceFromAPI, index: number): SelectionTemplate => {
  // TODO: EDIT_CHOICES -> getAnswerValues
  const answers: string[] = [];
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
    // TODO: EDIT_CHOICES
    // eslint-disable-next-line no-console
    onChange: () => console.log('TODO: on choice change'),
    options: isEmpty(answer) ? concat([temporaryOption], selectOptions) : selectOptions
  };
};

const templateProps = (question: TemplateQuestion): Template => {
  // TODO: EDIT_CHOICES -> getChoices
  const choices = question.content.choices;
  return {
    type: 'template',
    template: get('content.template', question),
    answers: choices.map((choice, index) =>
      choice.type === 'text' ? templateTextProps(choice, index) : templateSelectProps(choice, index)
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
        // eslint-disable-next-line no-console
        console.log(text);
        dispatch(editAnswer(text));
      }
    };
  };

const sliderProps = (question: SliderQuestion): QuestionRange => {
  const values: number[] = rangeStep(
    getOr(1, 'content.step', question),
    get('content.min', question),
    get('content.max', question) + 1
    // Lodash doesn't infer the type very well here
  ) as unknown as number[];

  // TODO: EDIT_CHOICES -> getAnswerValues
  const answers: string[] = [];

  const stateValue = head(answers) || question.content.min;
  const currentValue = toInteger(stateValue);

  const indexValue = indexOf(currentValue, values);
  const sliderPosition = divide(indexValue, size(values) - 1);

  const unitLabel = get('content.unitLabel', question);

  return {
    type: 'slider',
    placeholder: question.explanation,
    minLabel: `${question.content.min} ${unitLabel}`,
    maxLabel: `${question.content.max} ${unitLabel}`,
    title: `${currentValue} ${question.content.unitLabel}`,
    value: sliderPosition,
    // TODO: EDIT_CHOICES
    // eslint-disable-next-line no-console
    onChange: () => console.log('TODO: on choice change')
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
      return qcmDragProps(question as QcmDragQuestion);

    case 'basic':
      return basicProps(dispatch)(answers, question as BasicQuestion);

    case 'template':
      return templateProps(question as TemplateQuestion);

    case 'slider':
      return sliderProps(question as SliderQuestion);

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
