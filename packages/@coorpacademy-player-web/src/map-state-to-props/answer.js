import {
  pipe,
  includes,
  toInteger,
  head,
  map,
  get,
  divide,
  multiply,
  __,
  round,
  size,
  constant,
  times,
  set,
  isEmpty,
  isNil,
  rangeStep,
  toString as _toString,
  indexOf
} from 'lodash/fp';
import {getChoices, getQuestionType, getAnswerValues, editAnswer} from '@coorpacademy/player-store';

const editAnswerAction = (options, {dispatch}) =>
  constant(newValue => {
    return dispatch(editAnswer(newValue));
  });

const qcmProps = (options, store) => {
  const getChoices_ = getChoices();
  const editAnswerAction_ = editAnswerAction(options, store);

  return (state, slide) => {
    const answers = getAnswerValues(slide, state);
    const _editAnswerAction = editAnswerAction_(state, slide);

    const props = {
      type: 'qcm',
      answers: map(
        choice => ({
          title: choice.label,
          selected: includes(choice.label, answers),
          onClick: () => _editAnswerAction(choice)
        }),
        getChoices_(slide, state)
      )
    };

    return props;
  };
};

const qcmDragProps = (options, store) => {
  const getChoices_ = getChoices();
  const editAnswerAction_ = editAnswerAction(options, store);

  return (state, slide) => {
    const answers = getAnswerValues(slide, state);
    return {
      type: 'qcmDrag',
      answers: map(choice => {
        const indexInAnswer = indexOf(choice.label, answers);
        return {
          title: choice.label,
          selected: indexInAnswer !== -1,
          order: indexInAnswer,
          onClick: () => editAnswerAction_(state, slide)(choice)
        };
      }, getChoices_(slide, state))
    };
  };
};

const qcmGraphicProps = (options, store) => {
  const getChoices_ = getChoices();
  const editAnswerAction_ = editAnswerAction(options, store);

  return (state, slide) => {
    const answers = getAnswerValues(slide, state);
    return {
      type: 'qcmGraphic',
      answers: map(
        choice => ({
          title: choice.label,
          image: get('media.src.0.url', choice),
          selected: includes(choice.label, answers),
          onClick: () => editAnswerAction_(state, slide)(choice)
        }),
        getChoices_(slide, state)
      )
    };
  };
};

const updateTemplateAnswer = (_answers, index, max) => value => {
  const answers = !_answers ? times(constant(undefined), max) : _answers;
  return map(a => (isNil(a) ? '' : a), set(index, value, answers));
};

const templateTextProps = (options, store) => {
  const editAnswerAction_ = editAnswerAction(options, store);

  return (state, slide, choice, index) => {
    const {translate} = options;
    const answers = getAnswerValues(slide, state);
    return {
      type: choice.type,
      name: choice.name,
      placeholder: translate('Type here'),
      value: get(index, answers),
      onChange: pipe(updateTemplateAnswer(answers, index), editAnswerAction_(state, slide))
    };
  };
};

const templateSelectProps = (options, store) => {
  const editAnswerAction_ = editAnswerAction(options, store);

  return (state, slide, choice, index) => {
    const {translate} = options;
    const answers = getAnswerValues(slide, state);
    const answer = get(index, answers);
    const temporaryOption = {
      name: translate('Select an answer'),
      value: '',
      validOption: false,
      selected: true
    };
    const selectOptions = choice.items.map(item => {
      return {
        name: item.text,
        value: item.text,
        validOption: true,
        selected: item.text === answer
      };
    });
    const maxLength = get('question.content.choices.length', slide);

    return {
      type: choice.type,
      name: choice.name,
      onChange: pipe(
        updateTemplateAnswer(answers, index, maxLength),
        editAnswerAction_(state, slide)
      ),
      options: isEmpty(answer) ? [temporaryOption].concat(selectOptions) : selectOptions,
      'aria-label': translate('Select an answer')
    };
  };
};

const templateProps = (options, store) => {
  const getChoices_ = getChoices();
  const templateTextProps_ = templateTextProps(options, store);
  const templateSelectProps_ = templateSelectProps(options, store);

  return (state, slide) => {
    return {
      type: 'template',
      template: slide.question.content.template,
      answers: getChoices_(slide, state).map((choice, index) =>
        choice.type === 'text'
          ? templateTextProps_(state, slide, choice, index)
          : templateSelectProps_(state, slide, choice, index)
      )
    };
  };
};

const basicProps = (options, store) => {
  const editAnswerAction_ = editAnswerAction(options, store);

  return (state, slide) => {
    const {translate} = options;
    return {
      type: 'freeText',
      placeholder: translate('Type here'),
      value: pipe(getAnswerValues, head)(slide, state),
      onChange: editAnswerAction_(state, slide)
    };
  };
};

const toAnswer = values => {
  const maxValue = size(values) - 1;
  return position => {
    return pipe(multiply(maxValue), round, get(__, values), _toString)(position);
  };
};

const sliderProps = (options, store) => {
  const editAnswerAction_ = editAnswerAction(options, store);

  return (state, slide) => {
    const values = rangeStep(
      slide.question.content.step || 1,
      slide.question.content.min,
      slide.question.content.max + 1
    );

    const stateValue = pipe(getAnswerValues, head)(slide, state);
    const currentValue = toInteger(stateValue);

    const indexValue = indexOf(currentValue, values);
    const handleChange = editAnswerAction_(state, slide);
    const sliderPosition = divide(indexValue, size(values) - 1);

    return {
      type: 'slider',
      placeholder: slide.question.explanation,
      minLabel: `${slide.question.content.min} ${slide.question.content.unitLabel}`,
      maxLabel: `${slide.question.content.max} ${slide.question.content.unitLabel}`,
      title: `${currentValue} ${slide.question.content.unitLabel}`,
      value: sliderPosition,
      onChange: pipe(toAnswer(values), handleChange)
    };
  };
};

const createGetAnswerProps = (options, store) => {
  const qcmProps_ = qcmProps(options, store);
  const qcmGraphicProps_ = qcmGraphicProps(options, store);
  const qcmDragProps_ = qcmDragProps(options, store);
  const basicProps_ = basicProps(options, store);
  const templateProps_ = templateProps(options, store);
  const sliderProps_ = sliderProps(options, store);

  return (state, slide) => {
    if (!slide) {
      return;
    }
    const type = getQuestionType(slide);
    switch (type) {
      case 'qcm':
        return qcmProps_(state, slide);

      case 'qcmGraphic':
        return qcmGraphicProps_(state, slide);

      case 'qcmDrag':
        return qcmDragProps_(state, slide);

      case 'basic':
        return basicProps_(state, slide);

      case 'template':
        return templateProps_(state, slide);

      case 'slider':
        return sliderProps_(state, slide);

      default:
        throw new Error(`${type} is not an handled question.type`);
    }
  };
};

const createGetHelp = (options, store) => slide => {
  const {translate} = options;
  return get('question.explanation', slide) || translate('Select something below');
};

export {createGetAnswerProps, createGetHelp};
