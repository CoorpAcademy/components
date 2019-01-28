// @flow strict

import type {Progression} from '@coorpacademy/progression-engine';

const progressions: Array<Progression> = [
  {
    _id: '0',
    engine: {
      ref: 'microlearning',
      version: '1'
    },
    engineOptions: {
      version: '1'
    },
    content: {
      ref: '5.C7',
      type: 'chapter'
    },
    actions: [
      {
        type: 'move',
        payload: {
          nextContent: {
            type: 'slide',
            ref: '1.B2.4'
          }
        }
      }
    ]
  },
  {
    _id: '1',
    engine: {
      ref: 'microlearning',
      version: '1'
    },
    engineOptions: {
      version: '1'
    },
    content: {
      ref: '5.C7',
      type: 'chapter'
    },
    actions: [
      {
        type: 'move',
        payload: {
          nextContent: {
            type: 'slide',
            ref: 'sli_VkcAWR-ZQ'
          }
        }
      },
      {
        type: 'answer',
        payload: {
          content: {
            type: 'slide',
            ref: 'sli_VkcAWR-ZQ'
          },
          answer: [],
          isCorrect: true,
          godMode: false,
          instructions: null,
          nextContent: {
            type: 'slide',
            ref: 'sli_E1iEQRuZm'
          }
        }
      }
    ]
  },
  {
    _id: 'slider',
    engine: {
      ref: 'microlearning',
      version: '1'
    },
    engineOptions: {
      version: '1'
    },
    content: {
      ref: '5.C7',
      type: 'chapter'
    },
    actions: [
      {
        type: 'move',
        payload: {
          nextContent: {
            type: 'slide',
            ref: 'sli_41GXTiG8X'
          }
        }
      }
    ]
  },
  {
    _id: '2',
    engine: {
      ref: 'microlearning',
      version: '1'
    },
    engineOptions: {
      version: '1'
    },
    content: {
      ref: '5.C7',
      type: 'chapter'
    },
    actions: [
      {
        type: 'move',
        payload: {
          nextContent: {
            type: 'slide',
            ref: 'sli_VkcAWR-ZQ'
          }
        }
      },
      {
        type: 'answer',
        payload: {
          content: {
            type: 'slide',
            ref: 'sli_VkcAWR-ZQ'
          },
          answer: [],
          isCorrect: true,
          godMode: false,
          instructions: null,
          nextContent: {
            type: 'slide',
            ref: 'sli_E1iEQRuZm'
          }
        }
      },
      {
        type: 'answer',
        payload: {
          content: {
            type: 'slide',
            ref: 'sli_E1iEQRuZm'
          },
          answer: [],
          isCorrect: true,
          godMode: false,
          instructions: null,
          nextContent: {
            type: 'slide',
            ref: 'sli_4kl~7RubX'
          }
        }
      },
      {
        type: 'answer',
        payload: {
          content: {
            type: 'slide',
            ref: 'sli_4kl~7RubX'
          },
          answer: [],
          isCorrect: true,
          godMode: false,
          instructions: null,
          nextContent: {
            type: 'slide',
            ref: 'sli_Vy88~R-bX'
          }
        }
      },
      {
        type: 'answer',
        payload: {
          content: {
            type: 'slide',
            ref: 'sli_Vy88~R-bX'
          },
          answer: [],
          isCorrect: true,
          godMode: false,
          instructions: null,
          nextContent: {
            type: 'success',
            ref: 'successExitNode'
          }
        }
      }
    ]
  },
  {
    _id: '3',
    engine: {
      ref: 'microlearning',
      version: '1'
    },
    engineOptions: {
      version: '1'
    },
    content: {
      ref: '5.C7',
      type: 'chapter'
    },
    actions: [
      {
        type: 'move',
        payload: {
          nextContent: {
            type: 'failure',
            ref: 'failExitNode'
          }
        }
      }
    ]
  },
  {
    _id: 'template',
    engine: {
      ref: 'microlearning',
      version: '1'
    },
    engineOptions: {
      version: '1'
    },
    content: {
      ref: '5.C7',
      type: 'chapter'
    },
    actions: [
      {
        type: 'move',
        payload: {
          nextContent: {
            ref: 'sli_Nk2vje~E~',
            type: 'slide'
          }
        }
      }
    ]
  },
  {
    _id: 'context',
    engine: {
      ref: 'microlearning',
      version: '1'
    },
    engineOptions: {
      version: '1'
    },
    content: {
      ref: '5.C7',
      type: 'chapter'
    },
    actions: [
      {
        type: 'move',
        payload: {
          nextContent: {
            ref: '1.B2.9',
            type: 'slide'
          }
        }
      }
    ]
  },
  {
    _id: 'context2',
    engine: {
      ref: 'microlearning',
      version: '1'
    },
    engineOptions: {
      version: '1'
    },
    content: {
      ref: '5.C7',
      type: 'chapter'
    },
    actions: [
      {
        type: 'move',
        payload: {
          nextContent: {
            ref: '1.B2.10',
            type: 'slide'
          }
        }
      }
    ]
  },
  {
    _id: 'context3',
    engine: {
      ref: 'microlearning',
      version: '1'
    },
    engineOptions: {
      version: '1'
    },
    content: {
      ref: '5.C7',
      type: 'chapter'
    },
    actions: [
      {
        type: 'move',
        payload: {
          nextContent: {
            ref: '1.B2.11',
            type: 'slide'
          }
        }
      }
    ]
  },
  {
    _id: 'context4',
    engine: {
      ref: 'microlearning',
      version: '1'
    },
    engineOptions: {
      version: '1'
    },
    content: {
      ref: '5.C7',
      type: 'chapter'
    },
    actions: [
      {
        type: 'move',
        payload: {
          nextContent: {
            ref: '1.B2.12',
            type: 'slide'
          }
        }
      }
    ]
  },
  {
    _id: 'context5',
    engine: {
      ref: 'microlearning',
      version: '1'
    },
    engineOptions: {
      version: '1'
    },
    content: {
      ref: '5.C8',
      type: 'chapter'
    },
    actions: [
      {
        type: 'move',
        payload: {
          nextContent: {
            ref: '1.B2.13',
            type: 'slide'
          }
        }
      }
    ]
  },
  {
    _id: 'level1',
    engine: {
      ref: 'learner',
      version: '1'
    },
    engineOptions: {
      version: '1'
    },
    content: {
      ref: '1.A',
      type: 'level'
    },
    actions: [
      {
        type: 'move',
        payload: {
          nextContent: {
            type: 'slide',
            ref: 'sli_41GXTiG8'
          }
        }
      },
      {
        type: 'answer',
        payload: {
          content: {
            type: 'slide',
            ref: 'sli_41GXTiG8'
          },
          answer: [],
          isCorrect: true,
          godMode: false,
          instructions: null,
          nextContent: {
            type: 'slide',
            ref: 'sli_41GXTiG8a'
          }
        }
      },
      {
        type: 'answer',
        payload: {
          content: {
            type: 'slide',
            ref: 'sli_41GXTiG8a'
          },
          answer: [],
          isCorrect: true,
          godMode: false,
          instructions: null,
          nextContent: {
            type: 'slide',
            ref: 'sli_41GXTiG8g'
          }
        }
      },
      {
        type: 'answer',
        payload: {
          content: {
            type: 'slide',
            ref: 'sli_41GXTiG8g'
          },
          answer: [],
          isCorrect: true,
          godMode: false,
          instructions: null,
          nextContent: {
            type: 'slide',
            ref: 'sli_41GXTiG8X'
          }
        }
      }
    ]
  },
  {
    _id: 'livesDisabled',
    engine: {
      ref: 'learner',
      version: '1'
    },
    engineOptions: {
      livesDisabled: true,
      version: '1'
    },
    content: {
      ref: '1.A',
      type: 'level'
    },
    actions: [
      {
        type: 'move',
        payload: {
          nextContent: {
            type: 'slide',
            ref: 'sli_41GXTiG8X'
          }
        }
      }
    ]
  },
  {
    _id: 'extraLife',
    engine: {
      ref: 'microlearning',
      version: '1'
    },
    engineOptions: {
      version: '1'
    },
    content: {
      ref: '5.C7',
      type: 'chapter'
    },
    actions: [
      {
        type: 'move',
        payload: {
          nextContent: {
            type: 'slide',
            ref: 'sli_VkcAWR-ZQ'
          }
        }
      },
      {
        type: 'answer',
        payload: {
          content: {
            type: 'slide',
            ref: 'sli_VkcAWR-ZQ'
          },
          answer: [],
          isCorrect: false,
          godMode: false,
          instructions: null,
          nextContent: {
            type: 'node',
            ref: 'extraLife'
          }
        }
      }
    ]
  },
  {
    _id: 'adaptive',
    engine: {
      ref: 'microlearning',
      version: '1'
    },
    engineOptions: {
      version: '1'
    },
    content: {
      ref: 'cha_N19MiQrYG',
      type: 'chapter'
    },
    actions: [
      {
        type: 'move',
        payload: {
          nextContent: {
            type: 'slide',
            ref: 'sli_4yHKRmBtz'
          }
        }
      }
    ]
  },
  {
    _id: 'partialAdaptive',
    engine: {
      ref: 'learner',
      version: '1'
    },
    engineOptions: {
      version: '1'
    },
    content: {
      ref: 'mod_E15Bh1hDM',
      type: 'level',
      version: '1'
    },
    actions: [
      {
        type: 'move',
        payload: {
          nextContent: {
            type: 'slide',
            ref: 'sli_4JE0EO73M'
          },
          instructions: null
        }
      },
      {
        type: 'answer',
        payload: {
          answer: ['objectif', 'expertises'],
          content: {
            type: 'slide',
            ref: 'sli_4JE0EO73M'
          },
          godMode: false,
          nextContent: {
            type: 'slide',
            ref: 'sli_NJenMOm2f'
          },
          isCorrect: false,
          instructions: null
        }
      }
    ]
  }
];

export default progressions;
