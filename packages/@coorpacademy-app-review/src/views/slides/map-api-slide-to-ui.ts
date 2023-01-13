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
import type {
  BasicQuestion,
  ChoiceFromAPI,
  QcmDragQuestion,
  QcmGraphicQuestion,
  QcmQuestion,
  Question,
  SlideFromAPI,
  SliderQuestion,
  TemplateQuestion,
  ChoiceItem,
  SlideMedia
} from '@coorpacademy/review-services';
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
import {editAnswer} from '../../actions/ui/answers';
import {Translate} from '../../types/common';

const qcmProps =
  (dispatch: Dispatch) =>
  (answers: string[], question: QcmQuestion): Qcm => {
    return {
      type: 'qcm',
      answers: map(choice => {
        const label = getOr('', 'label', choice);
        return {
          title: label,
          selected: includes(label, answers),
          onClick: (): void => {
            dispatch(editAnswer([label]));
          },
          'aria-label': label
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
        const label = getOr('', 'label', choice);
        const indexInAnswer = indexOf(label, answers);
        return {
          title: label,
          selected: includes(label, answers),
          order: indexInAnswer,
          onClick: (): void => {
            dispatch(editAnswer([label]));
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
        const label = getOr('', 'label', choice);
        return {
          title: label,
          image: get('media.src.0.url', choice),
          selected: includes(label, answers),
          onClick: (): void => {
            dispatch(editAnswer([label]));
          },
          ariaLabel: label
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
  translate: Translate,
  answers: string[],
  choice: ChoiceFromAPI,
  index: number,
  maxLength: number
): TextTemplate => {
  return {
    type: 'text',
    name: getOr('', 'name', choice),
    placeholder: translate('Type here'),
    value: get(index, answers),
    onChange: (text: string): void => {
      const newAnswers = updateTemplateAnswer(text, answers, index, maxLength);
      dispatch(editAnswer(newAnswers));
    }
  };
};

const templateSelectProps = (
  dispatch: Dispatch,
  translate: Translate,
  answers: string[],
  choice: ChoiceFromAPI,
  index: number,
  maxLength: number
): SelectionTemplate => {
  const answer = get(index, answers);
  const temporaryOption = {
    name: translate('Select an answer'),
    value: '',
    validOption: false,
    selected: true
  };
  const selectOptions = choice.items.map((item: ChoiceItem) => {
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
  (dispatch: Dispatch, translate: Translate) =>
  (answers: string[], question: TemplateQuestion): Template => {
    const choices = question.content.choices;
    const maxLength = size(choices);
    return {
      type: 'template',
      template: get('content.template', question),
      answers: choices.map((choice: ChoiceFromAPI, index: number) =>
        choice.type === 'text'
          ? templateTextProps(dispatch, translate, answers, choice, index, maxLength)
          : templateSelectProps(dispatch, translate, answers, choice, index, maxLength)
      )
    };
  };

const basicProps =
  (dispatch: Dispatch) =>
  (answers: string[], question: BasicQuestion): FreeText => {
    return {
      type: 'freeText',
      placeholder: getOr('', 'content.placeholder', question),
      value: getOr('', '0', answers),
      onChange: (text: string): void => {
        dispatch(editAnswer([text]));
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
        // atom/range handler
        const newValue: string = pipe(
          multiply(maxValue),
          round,
          get(__, values),
          _toString
        )(position);
        dispatch(editAnswer([newValue]));
      },
      onSliderChange: (newValue: number): void => {
        // mobile/slider handler
        dispatch(editAnswer([`${newValue}`]));
      }
    };
  };

export const getQuestionType = (question: Question): Question['type'] => question.type;

const getHelp = (slide: SlideFromAPI): string => get('question.explanation', slide);

const getAnswerUIModel = (
  question: Question,
  answers: string[],
  dispatch: Dispatch,
  translate: Translate
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
      return templateProps(dispatch, translate)(answers, question as TemplateQuestion);

    case 'slider':
      return sliderProps(dispatch)(answers, question as SliderQuestion);

    default:
      throw new Error(`${type} is not an handled question.type`);
  }
};

const getMedia = (media: SlideMedia): unknown | void => {
  if (!media) return;
  const {type} = media;
  const resource = get('src.0', media);
  switch (type) {
    case 'img':
    case 'audio':
      return {
        ...resource,
        type,
        url: get('url', resource)
      };
    case 'video':
      return {
        ...resource,
        type
      };
  }
};

export const mapApiSlideToUi =
  (dispatch: Dispatch, translate: Translate) =>
  (slide: SlideFromAPI, answers: string[]): {questionText: string; answerUI: AnswerUI} => {
    const questionText = getOr('', 'question.header', slide);
    const media = get('question.medias.0', slide);

    return {
      questionText,
      answerUI: {
        model: getAnswerUIModel(slide.question, answers, dispatch, translate),
        help: getHelp(slide),
        media: getMedia(media)
      }
    };
  };
