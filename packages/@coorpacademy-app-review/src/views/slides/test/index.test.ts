import test from 'ava';
import identity from 'lodash/fp/identity';
import omit from 'lodash/fp/omit';
import {
  postProgressionResponse as createdProgression,
  postAnswerResponse as firstAnsweredProgression
} from '../../../test/util/services.mock';
import {mapStateToSlidesProps} from '..';
import {StoreState} from '../../../reducers';
import {freeTextSlide} from './fixtures/free-text';
import {qcmGraphicSlide} from './fixtures/qcm-graphic';

test('should create initial props when fetched slide is not still received', t => {
  const state: StoreState = {
    data: {
      progression: createdProgression,
      skills: [],
      slides: {
        sli_N1XACJobn: null
      },
      token: '1234'
    },
    ui: {
      currentSlideRef: '',
      navigation: ['loader', 'slides'],
      answers: []
    }
  };

  const props = mapStateToSlidesProps(state, identity);
  t.is(props.congratsProps, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    mode: '__revision_mode',
    skillName: '__agility',
    steps: [
      {
        current: true,
        icon: 'no-answer',
        value: '1'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '2'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '3'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '4'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '5'
      }
    ]
  });
  t.deepEqual(omit(['validateButton'], props.stack), {
    correctionPopinProps: undefined,
    endReview: false,
    slides: {
      '0': {
        hidden: false,
        position: 0,
        loading: true
      },
      '1': {
        hidden: false,
        position: 1,
        loading: true
      },
      '2': {
        hidden: false,
        position: 2,
        loading: true
      },
      '3': {
        hidden: false,
        position: 3,
        loading: true
      },
      '4': {
        hidden: false,
        position: 4,
        loading: true
      }
    }
  });
});

test('should create props when the next slide is on the state', t => {
  const state: StoreState = {
    data: {
      progression: {
        _id: '62b1d1087aa12f00253f40ee',
        content: {
          ref: '_skill-ref',
          type: 'skill'
        },
        engine: {
          ref: 'review'
        },
        state: {
          allAnswers: [
            {
              slideRef: 'sli_VJYjJnJhg',
              isCorrect: true,
              answer: ['Benchmark']
            }
          ],
          isCorrect: true,
          nextContent: {
            ref: 'sli_VkSQroQnx',
            type: 'slide'
          },
          content: {
            ref: 'sli_VJYjJnJhg',
            type: 'slide'
          },
          pendingSlides: [],
          slides: ['sli_VJYjJnJhg'],
          step: {
            current: 2
          },
          stars: 4
        }
      },
      skills: [],
      slides: {
        sli_VJYjJnJhg: {
          question: {
            content: {
              media: {
                src: [],
                posters: [],
                subtitles: []
              },
              label: '',
              placeholder: 'Type here',
              id: 'sli_VJYjJnJhg.choice_1'
            },
            type: 'basic',
            header:
              'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?',
            explanation: 'Type your answer.'
          },
          klf: 'To negotiate your salary when being hired, you have to establish a benchmark beforehand. In other words, you should assess the salary to which you aspire by enquiring about the remuneration paid in the same industry, the same region and the same position.',
          tips: 'According to Insee, Paris salaries are 20-25% higher compared with those of the provinces in 2015.',
          universalRef: 'sli_VJYjJnJhg',
          id: 'sli_VJYjJnJhg',
          parentContentTitle: {
            title: 'Developing the review app',
            type: 'course'
          }
        },
        sli_VkSQroQnx: {
          question: {
            content: {
              media: {
                src: [],
                posters: [],
                subtitles: []
              },
              choices: [
                {
                  media: {
                    src: [
                      {
                        _id: '624efd915948a7013083e986',
                        mimeType: 'image/jpeg',
                        url: '//static.coorpacademy.com/content/CoorpAcademy/content-partnerships/cockpit-partner-au-feminin/default/true-1512554153232.jpg',
                        id: '624efd915948a7013083e986'
                      }
                    ],
                    posters: [],
                    subtitles: [],
                    type: 'img'
                  },
                  items: [],
                  _id: '624efd915948a7013083e985',
                  label: 'Vrai',
                  value: 'sli_VkSQroQnx.choice_NJesyUo7nx',
                  id: '624efd915948a7013083e985'
                },
                {
                  media: {
                    src: [
                      {
                        _id: '624efd915948a7013083e988',
                        mimeType: 'image/jpeg',
                        url: '//static.coorpacademy.com/content/CoorpAcademy/content-partnerships/cockpit-partner-au-feminin/default/false-1512554160848.jpg',
                        id: '624efd915948a7013083e988'
                      }
                    ],
                    posters: [],
                    subtitles: [],
                    type: 'img'
                  },
                  items: [],
                  _id: '624efd915948a7013083e987',
                  label: 'Faux',
                  value: 'sli_VkSQroQnx.choice_VkgayLjX3e',
                  id: '624efd915948a7013083e987'
                }
              ]
            },
            type: 'qcmGraphic',
            header:
              'Pour mener une bonne négociation, il ne faut ressentir aucune émotion. Vrai ou faux ?',
            explanation: 'Sélectionnez la bonne réponse.'
          },
          klf: "Il ne faut pas prendre la négociation comme une affaire personnelle, afin de rester centré sur son sujet. Mais cela ne signifie pas être dépourvu de toute émotion, car celles-ci peuvent être de vrais atouts. À condition de réussir à les exprimer sans accuser l'autre d'en être à l'origine.",
          tips: "Pour gérer ses émotions, il faut d'abord les identifier, notamment en analysant ses ressentis physiques et en trouvant l'élément déclencheur.",
          universalRef: 'sli_VkSQroQnx',
          id: 'sli_VkSQroQnx',
          parentContentTitle: {
            title: 'Developing the review app',
            type: 'course'
          }
        }
      },
      token: 'undefined'
    },
    ui: {
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: ['My value'],
      slide: {
        validateButton: false
      }
    }
  };

  const props = mapStateToSlidesProps(state, identity);
  t.is(props.congratsProps, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    mode: '__revision_mode',
    skillName: '__agility',
    steps: [
      {
        current: true,
        icon: 'right',
        value: '1'
      },
      {
        // FIX ME: update on PR -> https://trello.com/c/qOSDa8Fm/2715-app-review-props-dynamiques-pour-les-step-items-du-header-bas%C3%A9-sur-le-state
        current: true,
        icon: 'no-answer',
        value: '2'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '3'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '4'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '5'
      }
    ]
  });
  t.deepEqual(omit(['validateButton', 'slides'], props.stack), {
    correctionPopinProps: undefined,
    endReview: false
  });
  t.true(props.stack.validateButton.disabled);
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    hidden: false,
    position: 0,
    loading: false,
    parentContentTitle: 'From "Developing the review app" course',
    questionText:
      'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?'
  });
  t.deepEqual(omit('model.onChange', props.stack.slides['0'].answerUI), {
    help: 'Type your answer.',
    model: {
      placeholder: 'Type here',
      type: 'freeText',
      value: 'My value'
    }
  });
  t.deepEqual(
    omit(
      ['0', '1.answerUI.model.answers.0.onClick', '1.answerUI.model.answers.1.onClick'],
      props.stack.slides
    ),
    {
      '1': {
        answerUI: {
          help: 'Sélectionnez la bonne réponse.',
          model: {
            answers: [
              {
                image:
                  '//static.coorpacademy.com/content/CoorpAcademy/content-partnerships/cockpit-partner-au-feminin/default/true-1512554153232.jpg',
                selected: false,
                title: 'Vrai'
              },
              {
                image:
                  '//static.coorpacademy.com/content/CoorpAcademy/content-partnerships/cockpit-partner-au-feminin/default/false-1512554160848.jpg',
                selected: false,
                title: 'Faux'
              }
            ],
            type: 'qcmGraphic'
          }
        },
        hidden: false,
        loading: false,
        position: 1,
        parentContentTitle: 'From "Developing the review app" course',
        questionText:
          'Pour mener une bonne négociation, il ne faut ressentir aucune émotion. Vrai ou faux ?'
      },
      '2': {
        hidden: false,
        position: 2,
        loading: true
      },
      '3': {
        hidden: false,
        position: 3,
        loading: true
      },
      '4': {
        hidden: false,
        position: 4,
        loading: true
      }
    }
  );
});

test('should create props when slide is on the state', t => {
  const state: StoreState = {
    data: {
      progression: createdProgression,
      skills: [],
      slides: {
        sli_VJYjJnJhg: freeTextSlide
      },
      token: '1234'
    },
    ui: {
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: []
    }
  };

  const props = mapStateToSlidesProps(state, identity);
  t.is(props.congratsProps, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    mode: '__revision_mode',
    skillName: '__agility',
    steps: [
      {
        current: true,
        icon: 'no-answer',
        value: '1'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '2'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '3'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '4'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '5'
      }
    ]
  });
  t.deepEqual(omit(['validateButton', 'slides'], props.stack), {
    correctionPopinProps: undefined,
    endReview: false
  });
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    hidden: false,
    position: 0,
    loading: false,
    parentContentTitle: 'From "Developing the review app" course',
    questionText:
      'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?'
  });
  t.is(props.stack.validateButton.disabled, true);
  t.deepEqual(omit('model.onChange', props.stack.slides['0'].answerUI), {
    help: 'Type your answer.',
    model: {
      placeholder: 'Type here',
      type: 'freeText',
      value: ''
    }
  });
  t.deepEqual(omit(['0'], props.stack.slides), {
    '1': {
      hidden: false,
      position: 1,
      loading: true
    },
    '2': {
      hidden: false,
      position: 2,
      loading: true
    },
    '3': {
      hidden: false,
      position: 3,
      loading: true
    },
    '4': {
      hidden: false,
      position: 4,
      loading: true
    }
  });
});

test('should create props when slide is on the state and user has selected answers', t => {
  // This is the case after EDIT_ANSWER and before POST_ANSWER_REQUEST
  const state: StoreState = {
    data: {
      progression: createdProgression,
      skills: [],
      slides: {
        sli_VJYjJnJhg: freeTextSlide
      },
      token: '1234'
    },
    ui: {
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: ['My value']
    }
  };

  const props = mapStateToSlidesProps(state, identity);
  t.is(props.congratsProps, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    mode: '__revision_mode',
    skillName: '__agility',
    steps: [
      {
        current: true,
        icon: 'no-answer',
        value: '1'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '2'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '3'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '4'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '5'
      }
    ]
  });
  t.deepEqual(omit(['validateButton', 'slides'], props.stack), {
    correctionPopinProps: undefined,
    endReview: false
  });
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    hidden: false,
    position: 0,
    loading: false,
    parentContentTitle: 'From "Developing the review app" course',
    questionText:
      'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?'
  });
  // TODO: once fecthed Stefano PR
  // t.is(props.stack.validateButton.disabled, false);
  t.deepEqual(omit('model.onChange', props.stack.slides['0'].answerUI), {
    help: 'Type your answer.',
    model: {
      placeholder: 'Type here',
      type: 'freeText',
      value: 'My value'
    }
  });
  t.deepEqual(omit(['0'], props.stack.slides), {
    '1': {
      hidden: false,
      position: 1,
      loading: true
    },
    '2': {
      hidden: false,
      position: 2,
      loading: true
    },
    '3': {
      hidden: false,
      position: 3,
      loading: true
    },
    '4': {
      hidden: false,
      position: 4,
      loading: true
    }
  });
});

test('should verify props when first slide was answered and next slide is not fetched yet', t => {
  // This is the case after POST_ANSWER_SUCCESS and during SLIDE_FETCH_REQUEST
  const state: StoreState = {
    data: {
      progression: firstAnsweredProgression,
      skills: [],
      slides: {
        sli_N1XACJobn: freeTextSlide,
        sli_VkSQroQnx: null
      },
      token: '1234'
    },
    ui: {
      currentSlideRef: 'sli_N1XACJobn',
      navigation: ['loader', 'slides'],
      answers: ['My value']
    }
  };

  const props = mapStateToSlidesProps(state, identity);
  t.is(props.congratsProps, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    mode: '__revision_mode',
    skillName: '__agility',
    steps: [
      {
        current: true,
        icon: 'right',
        value: '1'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '2'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '3'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '4'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '5'
      }
    ]
  });
  t.deepEqual(omit(['validateButton', 'slides'], props.stack), {
    correctionPopinProps: undefined,
    endReview: false
  });
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    hidden: false,
    position: 0,
    loading: false,
    parentContentTitle: 'From "Developing the review app" course',
    questionText:
      'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?'
  });
  t.deepEqual(omit('model.onChange', props.stack.slides['0'].answerUI), {
    help: 'Type your answer.',
    model: {
      placeholder: 'Type here',
      type: 'freeText',
      value: 'My value'
    }
  });
  t.is(props.stack.validateButton.disabled, true);
  t.deepEqual(omit(['0'], props.stack.slides), {
    '1': {
      hidden: false,
      position: 1,
      loading: true
    },
    '2': {
      hidden: false,
      position: 2,
      loading: true
    },
    '3': {
      hidden: false,
      position: 3,
      loading: true
    },
    '4': {
      hidden: false,
      position: 4,
      loading: true
    }
  });
});

test('should verify props when first slide was answered and next slide is fecthed', t => {
  // TODO ADD correction popin
  const state: StoreState = {
    data: {
      progression: firstAnsweredProgression,
      skills: [],
      slides: {
        sli_N1XACJobn: freeTextSlide,
        sli_VkSQroQnx: qcmGraphicSlide
      },
      token: '1234'
    },
    ui: {
      currentSlideRef: 'sli_N1XACJobn',
      navigation: ['loader', 'slides'],
      answers: ['My value']
    }
  };

  const props = mapStateToSlidesProps(state, identity);
  t.is(props.congratsProps, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    mode: '__revision_mode',
    skillName: '__agility',
    steps: [
      {
        current: true,
        icon: 'right',
        value: '1'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '2'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '3'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '4'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '5'
      }
    ]
  });
  t.deepEqual(omit(['validateButton', 'slides'], props.stack), {
    correctionPopinProps: undefined,
    endReview: false
  });
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    hidden: false,
    position: 0,
    loading: false,
    parentContentTitle: 'From "Developing the review app" course',
    questionText:
      'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?'
  });
  t.deepEqual(omit('model.onChange', props.stack.slides['0'].answerUI), {
    help: 'Type your answer.',
    model: {
      placeholder: 'Type here',
      type: 'freeText',
      value: 'My value'
    }
  });
  t.deepEqual(omit('answerUI', props.stack.slides['1']), {
    hidden: false,
    position: 1,
    loading: false,
    parentContentTitle: 'From "Developing the review app" course',
    questionText:
      'Pour mener une bonne négociation, il ne faut ressentir aucune émotion. Vrai ou faux ?'
  });
  t.is(props.stack.validateButton.disabled, true);
  t.deepEqual(omit(['0', '1'], props.stack.slides), {
    '2': {
      hidden: false,
      position: 2,
      loading: true
    },
    '3': {
      hidden: false,
      position: 3,
      loading: true
    },
    '4': {
      hidden: false,
      position: 4,
      loading: true
    }
  });
});

test('should verify props when currentSlideRef has changed to nextContent of progression after first asnwered question', t => {
  // state after click on NEXT_SLIDE
  const state: StoreState = {
    data: {
      progression: firstAnsweredProgression,
      skills: [],
      slides: {
        sli_N1XACJobn: freeTextSlide,
        sli_VkSQroQnx: qcmGraphicSlide
      },
      token: '1234'
    },
    ui: {
      currentSlideRef: 'sli_VkSQroQnx',
      navigation: ['loader', 'slides'],
      answers: []
    }
  };

  const props = mapStateToSlidesProps(state, identity);
  t.is(props.congratsProps, undefined);
  t.deepEqual(omit(['onQuitClick'], props.header), {
    'aria-label': 'aria-header-wrapper',
    closeButtonAriaLabel: 'aria-close-button',
    mode: '__revision_mode',
    skillName: '__agility',
    steps: [
      {
        current: false,
        icon: 'right',
        value: '1'
      },
      {
        current: true,
        icon: 'no-answer',
        value: '2'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '3'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '4'
      },
      {
        current: false,
        icon: 'no-answer',
        value: '5'
      }
    ]
  });

  // TODO update test with props.stack validations
});