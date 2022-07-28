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
  noop,
  pipe,
  rangeStep,
  size,
  toInteger
} from 'lodash/fp';
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
} from '../types/slides';
import {
  ChoiceFromAPI,
  QcmDragQuestion,
  QcmGraphicQuestion,
  QcmQuestion,
  SlideFromAPI,
  SliderQuestion,
  TemplateQuestion
} from '../types/common';

type UiUtils = {translate: (text: string) => string};

const qcmProps = (question: QcmQuestion): Qcm => {
  // TODO: EDIT_CHOICES -> getAnswerValues
  const answers: string[] = [];

  return {
    type: 'qcm',
    answers: map(
      choice => ({
        title: choice.label,
        selected: includes(choice.label, answers),
        // TODO: EDIT_CHOICES
        onClick: noop,
        ariaLabel: choice.label
      }),
      // TODO: EDIT_CHOICES -> getChoices
      question.content.choices
    )
  };
};

const qcmDragProps = (question: QcmDragQuestion): QcmDrag => {
  // mock the answers
  // TODO: EDIT_CHOICES -> getAnswerValues
  const answers: string[] = [];
  return {
    type: 'qcmDrag',
    answers: map(choice => {
      const indexInAnswer = indexOf(choice.label, answers);
      return {
        title: choice.label,
        selected: indexInAnswer !== -1,
        order: indexInAnswer,
        // TODO: EDIT_CHOICES
        onClick: noop
      };
      // TODO: EDIT_CHOICES -> getChoices
    }, question.content.choices)
  };
};

const qcmGraphicProps = (question: QcmGraphicQuestion): QcmGraphic => {
  // mock the answers
  // TODO: EDIT_CHOICES -> getAnswerValues
  const answers: string[] = [];
  return {
    type: 'qcmGraphic',
    answers: map(
      choice => ({
        title: choice.label,
        image: get('media.src.0.url', choice),
        selected: includes(choice.label, answers),
        // TODO: EDIT_CHOICES
        onClick: noop
      }),
      // TODO: EDIT_CHOICES -> getChoices
      question.content.choices
    )
  };
};

const templateTextProps =
  (uiUtils: UiUtils) =>
  (choice: ChoiceFromAPI, index: number): TextTemplate => {
    const {translate} = uiUtils;
    // TODO: EDIT_CHOICES -> getAnswerValues
    const answers: string[] = [];
    return {
      type: 'text',
      name: getOr('', 'name', choice),
      placeholder: translate('Type here'),
      value: get(index, answers),
      // TODO: EDIT_CHOICES
      onChange: noop
    };
  };

// const getItemText = (item: ChoiceFromAPI['items'][0]): item['text'] is string =>

const templateSelectProps = (uiUtils: UiUtils) => {
  return (choice: ChoiceFromAPI, index: number): SelectionTemplate => {
    const {translate} = uiUtils;
    // TODO: EDIT_CHOICES -> getAnswerValues
    const answers: string[] = [];
    const answer = get(index, answers);
    const temporaryOption = {
      name: translate('Select an answer'),
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
      onChange: noop,
      options: isEmpty(answer) ? concat([temporaryOption], selectOptions) : selectOptions
    };
  };
};

const templateProps = (uiUtils: UiUtils): ((question: TemplateQuestion) => Template) => {
  const templateTextProps_ = templateTextProps(uiUtils);
  const templateSelectProps_ = templateSelectProps(uiUtils);

  return question => {
    // TODO: EDIT_CHOICES -> getChoices
    const choices = question.content.choices;
    return {
      type: 'template',
      template: get('content.template', question),
      answers: choices.map((choice, index) =>
        choice.type === 'text'
          ? templateTextProps_(choice, index)
          : templateSelectProps_(choice, index)
      )
    };
  };
};

const basicProps = (uiUtils: UiUtils): (() => FreeText) => {
  const {translate} = uiUtils;
  // TODO: EDIT_CHOICES -> getAnswerValues
  const answers: string[] = [];

  return () => {
    return {
      type: 'freeText',
      placeholder: translate('Type here'),
      value: head(answers),
      // TODO: EDIT_CHOICES
      onChange: noop
    };
  };
};

const sliderProps = (question: SliderQuestion): QuestionRange => {
  const values: number[] = rangeStep(
    getOr(1, 'content.step', question),
    getOr(Number.NaN, 'content.min', question),
    getOr(Number.NaN, 'content.max', question) + 1
    // Lodash doesn't infere the type very well here
  ) as unknown as number[];

  // TODO: EDIT_CHOICES -> getAnswerValues
  const answers: string[] = [];

  const stateValue = head(answers);
  const currentValue = toInteger(stateValue);

  const indexValue = indexOf(currentValue, values);
  const sliderPosition = divide(indexValue, size(values) - 1);

  const unitLabel = get('question.content.unitLabel', question);

  return {
    type: 'slider',
    placeholder: question.explanation,
    minLabel: `${question.content.min} ${unitLabel}`,
    maxLabel: `${question.content.max} ${unitLabel}`,
    title: `${currentValue} ${question.content.unitLabel}`,
    value: sliderPosition,
    // TODO: EDIT_CHOICES
    onChange: noop
  };
};

export const getQuestionType = (slide: SlideFromAPI): SlideFromAPI['question']['type'] =>
  slide.question.type;

export const mapApiSlideToUi = (
  uiUtils: UiUtils
): ((slide: SlideFromAPI) => AnswerUI['model'] | void) => {
  const basicProps_ = basicProps(uiUtils);
  const templateProps_ = templateProps(uiUtils);

  return (slide: SlideFromAPI): AnswerUI['model'] | void => {
    if (!slide) {
      return;
    }
    const type = getQuestionType(slide);
    switch (type) {
      case 'qcm':
        return pipe(get('question'), qcmProps)(slide);

      case 'qcmGraphic':
        return pipe(get('question'), qcmGraphicProps)(slide);

      case 'qcmDrag':
        return pipe(get('question'), qcmDragProps)(slide);

      case 'basic':
        return basicProps_();

      case 'template':
        return pipe(get('question'), templateProps_)(slide);

      case 'slider':
        return pipe(get('question'), sliderProps)(slide);

      default:
        throw new Error(`${type} is not an handled question.type`);
    }
  };
};
