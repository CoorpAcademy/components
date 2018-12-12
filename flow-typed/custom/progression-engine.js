declare module '@coorpacademy/progression-engine' {
  declare type Action =
    | { type: 'init' }
    | {
        payload: {
          instructions: Array<{
            field: string,
            type: 'add' | 'set',
            value: number | boolean | string
          }> | null,
          nextContent:
            | { ref: string, type: string, version?: string }
            | { ref: string, type: 'video' | 'pdf', version?: string }
        },
        type: 'move'
      }
    | {
        payload: {
          answer: Array<string>,
          content:
            | { ref: string, type: string, version?: string }
            | { ref: string, type: 'video' | 'pdf', version?: string },
          godMode: ?boolean,
          instructions: Array<{
            field: string,
            type: 'add' | 'set',
            value: number | boolean | string
          }> | null,
          isCorrect: ?boolean,
          nextContent:
            | { ref: string, type: string, version?: string }
            | { ref: string, type: 'video' | 'pdf', version?: string }
        },
        type: 'answer'
      }
    | {
        payload: {
          content:
            | { ref: string, type: string, version?: string }
            | { ref: string, type: 'video' | 'pdf', version?: string }
        },
        type: 'clue'
      }
    | {
        payload: {
          content:
            | { ref: string, type: string, version?: string }
            | { ref: string, type: 'video' | 'pdf', version?: string },
          instructions: Array<{
            field: string,
            type: 'add' | 'set',
            value: number | boolean | string
          }> | null,
          nextContent:
            | { ref: string, type: string, version?: string }
            | { ref: string, type: 'video' | 'pdf', version?: string }
        },
        type: 'extraLifeAccepted'
      }
    | {
        payload: {
          content:
            | { ref: string, type: string, version?: string }
            | { ref: string, type: 'video' | 'pdf', version?: string },
          nextContent:
            | { ref: string, type: string, version?: string }
            | { ref: string, type: 'video' | 'pdf', version?: string }
        },
        type: 'extraLifeRefused'
      }
    | {
        payload: {
          content:
            | { ref: string, type: string, version?: string }
            | { ref: string, type: 'video' | 'pdf', version?: string },
          resource: { ref: string, type: 'video' | 'pdf', version?: string }
        },
        type: 'resource'
      }
    | {
        payload: {
          instructions: Array<{
            field: string,
            type: 'add' | 'set',
            value: number | boolean | string
          }> | null,
          nextContent:
            | { ref: string, type: string, version?: string }
            | { ref: string, type: 'video' | 'pdf', version?: string }
        },
        type: 'move'
      };
  declare type Config = {
    answerBoundaryLimit: number,
    lives: number,
    livesDisabled: boolean,
    maxTypos: number,
    remainingLifeRequests: number,
    slidesToComplete: number,
    starsPerAskingClue: number,
    starsPerCorrectAnswer: number,
    starsPerResourceViewed: number,
    version: string
  };
  declare type Content =
    | { ref: string, type: string, version?: string }
    | { ref: string, type: 'video' | 'pdf', version?: string };
  declare type State = {
    content?:
      | { ref: string, type: string, version?: string }
      | { ref: string, type: 'video' | 'pdf', version?: string },
    nextContent:
      | { ref: string, type: string, version?: string }
      | { ref: string, type: 'video' | 'pdf', version?: string }
  } & {
    allAnswers: Array<{
      answer: Array<string>,
      isCorrect: ?boolean,
      slideRef: string
    }>,
    content?:
      | { ref: string, type: string, version?: string }
      | { ref: string, type: 'video' | 'pdf', version?: string },
    hasViewedAResourceAtThisStep: boolean,
    isCorrect: ?boolean,
    lives: number,
    livesDisabled?: boolean,
    nextContent?:
      | { ref: string, type: string, version?: string }
      | { ref: string, type: 'video' | 'pdf', version?: string },
    remainingLifeRequests: number,
    requestedClues: Array<string>,
    slides: Array<string>,
    stars: number,
    step: { current: number },
    variables: { [_: string]: string | boolean | number },
    viewedResources: Array<{
      ref: string,
      resources: Array<string>,
      type: mixed /* UNEXPECTED TYPE: EvalT */
    }>
  };

  declare var ERRORS: { STATE_VALIDATION_ERROR: string };
  declare type Progression = {
    actions: Array<
      | { type: 'init' }
      | {
          payload: {
            instructions: Array<{
              field: string,
              type: 'add' | 'set',
              value: number | boolean | string
            }> | null,
            nextContent:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'move'
        }
      | {
          payload: {
            answer: Array<string>,
            content:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string },
            godMode: ?boolean,
            instructions: Array<{
              field: string,
              type: 'add' | 'set',
              value: number | boolean | string
            }> | null,
            isCorrect: ?boolean,
            nextContent:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'answer'
        }
      | {
          payload: {
            content:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'clue'
        }
      | {
          payload: {
            content:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string },
            instructions: Array<{
              field: string,
              type: 'add' | 'set',
              value: number | boolean | string
            }> | null,
            nextContent:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'extraLifeAccepted'
        }
      | {
          payload: {
            content:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string },
            nextContent:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'extraLifeRefused'
        }
      | {
          payload: {
            content:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string },
            resource: { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'resource'
        }
      | {
          payload: {
            instructions: Array<{
              field: string,
              type: 'add' | 'set',
              value: number | boolean | string
            }> | null,
            nextContent:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'move'
        }
    >,
    content:
      | { ref: string, type: string, version?: string }
      | { ref: string, type: 'video' | 'pdf', version?: string },
    engine: { ref: string, version: string },
    engineOptions: { lives?: number, livesDisabled?: boolean },
    state?: {
      content?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      nextContent:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string }
    } & {
      allAnswers: Array<{
        answer: Array<string>,
        isCorrect: ?boolean,
        slideRef: string
      }>,
      content?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      hasViewedAResourceAtThisStep: boolean,
      isCorrect: ?boolean,
      lives: number,
      livesDisabled?: boolean,
      nextContent?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      remainingLifeRequests: number,
      requestedClues: Array<string>,
      slides: Array<string>,
      stars: number,
      step: { current: number },
      variables: { [_: string]: string | boolean | number },
      viewedResources: Array<{
        ref: string,
        resources: Array<string>,
        type: mixed /* UNEXPECTED TYPE: EvalT */
      }>
    }
  };
  declare function checkAnswer(
    config: {
      answerBoundaryLimit: number,
      lives: number,
      livesDisabled: boolean,
      maxTypos: number,
      remainingLifeRequests: number,
      slidesToComplete: number,
      starsPerAskingClue: number,
      starsPerCorrectAnswer: number,
      starsPerResourceViewed: number,
      version: string
    },
    question: | { content: { answers: Array<Array<string>> }, type: 'qcm' }
    | { content: { answers: Array<Array<string>> }, type: 'qcmGraphic' }
    | {
        content: { answers: Array<Array<string>>, matchOrder: boolean },
        type: 'qcmDrag'
      }
    | { content: { answers: Array<Array<string>> }, type: 'slider' }
    | {
        content: { answers: Array<Array<string>>, maxTypos?: ?number },
        type: 'basic'
      }
    | {
        content: {
          answers: Array<Array<string>>,
          choices: Array<{ type: 'text' | 'select' }>,
          matchOrder: boolean,
          maxTypos?: ?number
        },
        type: 'template'
      },
    givenAnswer: Array<string>
  ): boolean;
  declare function checkAnswerCorrectness(
    config: {
      answerBoundaryLimit: number,
      lives: number,
      livesDisabled: boolean,
      maxTypos: number,
      remainingLifeRequests: number,
      slidesToComplete: number,
      starsPerAskingClue: number,
      starsPerCorrectAnswer: number,
      starsPerResourceViewed: number,
      version: string
    },
    question: | { content: { answers: Array<Array<string>> }, type: 'qcm' }
    | { content: { answers: Array<Array<string>> }, type: 'qcmGraphic' }
    | {
        content: { answers: Array<Array<string>>, matchOrder: boolean },
        type: 'qcmDrag'
      }
    | { content: { answers: Array<Array<string>> }, type: 'slider' }
    | {
        content: { answers: Array<Array<string>>, maxTypos?: ?number },
        type: 'basic'
      }
    | {
        content: {
          answers: Array<Array<string>>,
          choices: Array<{ type: 'text' | 'select' }>,
          matchOrder: boolean,
          maxTypos?: ?number
        },
        type: 'template'
      },
    givenAnswer: Array<string>
  ): {
    corrections: Array<{ answer: string | void, isCorrect: ?boolean }>,
    isCorrect: boolean
  };
  declare function computeNextStepAfterAnswer(
    config: {
      answerBoundaryLimit: number,
      lives: number,
      livesDisabled: boolean,
      maxTypos: number,
      remainingLifeRequests: number,
      slidesToComplete: number,
      starsPerAskingClue: number,
      starsPerCorrectAnswer: number,
      starsPerResourceViewed: number,
      version: string
    },
    state: {
      content?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      nextContent:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string }
    } & {
      allAnswers: Array<{
        answer: Array<string>,
        isCorrect: ?boolean,
        slideRef: string
      }>,
      content?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      hasViewedAResourceAtThisStep: boolean,
      isCorrect: ?boolean,
      lives: number,
      livesDisabled?: boolean,
      nextContent?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      remainingLifeRequests: number,
      requestedClues: Array<string>,
      slides: Array<string>,
      stars: number,
      step: { current: number },
      variables: { [_: string]: string | boolean | number },
      viewedResources: Array<{
        ref: string,
        resources: Array<string>,
        type: mixed /* UNEXPECTED TYPE: EvalT */
      }>
    },
    availableContent: Array<{
      ref: string,
      rules: Array<{
        conditions: Array<{
          operator: $Keys<{
            BETWEEN: <T>(expectedValues: Array<T>, value: T) => boolean,
            EQUALS: <T>(expectedValues: Array<T>, value: T) => boolean,
            GT: <T>(expectedValues: Array<T>, value: T) => boolean,
            GTE: <T>(expectedValues: Array<T>, value: T) => boolean,
            IN: <T>(expectedValues: Array<T>, value: T) => boolean,
            LT: <T>(expectedValues: Array<T>, value: T) => boolean,
            LTE: <T>(expectedValues: Array<T>, value: T) => boolean,
            NOT_BETWEEN: <T>(expectedValues: Array<T>, value: T) => boolean,
            NOT_EQUALS: <T>(expectedValues: Array<T>, value: T) => boolean,
            NOT_IN: <T>(expectedValues: Array<T>, value: T) => boolean
          }>,
          target:
            | { field: 'lives' | 'stars' | string, scope: 'variable' }
            | { field: 'isCorrect' | 'answer', ref: string, scope: 'slide' },
          values: Array<number | boolean | string | Array<string>>
        }>,
        destination:
          | { ref: string, type: string, version?: string }
          | { ref: string, type: 'video' | 'pdf', version?: string },
        instructions: Array<{
          field: string,
          type: 'add' | 'set',
          value: number | boolean | string
        }>,
        priority: number,
        ref?: string,
        source:
          | { ref: string, type: string, version?: string }
          | { ref: string, type: 'video' | 'pdf', version?: string }
      }> | null,
      slides: Array<{
        _id: string,
        chapter_id: string,
        position?: ?number,
        question:
          | { content: { answers: Array<Array<string>> }, type: 'qcm' }
          | { content: { answers: Array<Array<string>> }, type: 'qcmGraphic' }
          | {
              content: { answers: Array<Array<string>>, matchOrder: boolean },
              type: 'qcmDrag'
            }
          | { content: { answers: Array<Array<string>> }, type: 'slider' }
          | {
              content: { answers: Array<Array<string>>, maxTypos?: ?number },
              type: 'basic'
            }
          | {
              content: {
                answers: Array<Array<string>>,
                choices: Array<{ type: 'text' | 'select' }>,
                matchOrder: boolean,
                maxTypos?: ?number
              },
              type: 'template'
            }
      }>
    }>,
    currentSlide: {
      _id: string,
      chapter_id: string,
      position?: ?number,
      question:
        | { content: { answers: Array<Array<string>> }, type: 'qcm' }
        | { content: { answers: Array<Array<string>> }, type: 'qcmGraphic' }
        | {
            content: { answers: Array<Array<string>>, matchOrder: boolean },
            type: 'qcmDrag'
          }
        | { content: { answers: Array<Array<string>> }, type: 'slider' }
        | {
            content: { answers: Array<Array<string>>, maxTypos?: ?number },
            type: 'basic'
          }
        | {
            content: {
              answers: Array<Array<string>>,
              choices: Array<{ type: 'text' | 'select' }>,
              matchOrder: boolean,
              maxTypos?: ?number
            },
            type: 'template'
          }
    },
    action: mixed /* UNEXPECTED TYPE: EvalT */
  ): {
    payload: {
      answer: Array<string>,
      content:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      godMode: ?boolean,
      instructions: Array<{
        field: string,
        type: 'add' | 'set',
        value: number | boolean | string
      }> | null,
      isCorrect: ?boolean,
      nextContent:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string }
    },
    type: 'answer'
  } | null;
  declare function computeNextStepOnAcceptExtraLife(
    config: {
      answerBoundaryLimit: number,
      lives: number,
      livesDisabled: boolean,
      maxTypos: number,
      remainingLifeRequests: number,
      slidesToComplete: number,
      starsPerAskingClue: number,
      starsPerCorrectAnswer: number,
      starsPerResourceViewed: number,
      version: string
    },
    state: {
      content?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      nextContent:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string }
    } & {
      allAnswers: Array<{
        answer: Array<string>,
        isCorrect: ?boolean,
        slideRef: string
      }>,
      content?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      hasViewedAResourceAtThisStep: boolean,
      isCorrect: ?boolean,
      lives: number,
      livesDisabled?: boolean,
      nextContent?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      remainingLifeRequests: number,
      requestedClues: Array<string>,
      slides: Array<string>,
      stars: number,
      step: { current: number },
      variables: { [_: string]: string | boolean | number },
      viewedResources: Array<{
        ref: string,
        resources: Array<string>,
        type: mixed /* UNEXPECTED TYPE: EvalT */
      }>
    },
    availableContent: Array<{
      ref: string,
      rules: Array<{
        conditions: Array<{
          operator: $Keys<{
            BETWEEN: <T>(expectedValues: Array<T>, value: T) => boolean,
            EQUALS: <T>(expectedValues: Array<T>, value: T) => boolean,
            GT: <T>(expectedValues: Array<T>, value: T) => boolean,
            GTE: <T>(expectedValues: Array<T>, value: T) => boolean,
            IN: <T>(expectedValues: Array<T>, value: T) => boolean,
            LT: <T>(expectedValues: Array<T>, value: T) => boolean,
            LTE: <T>(expectedValues: Array<T>, value: T) => boolean,
            NOT_BETWEEN: <T>(expectedValues: Array<T>, value: T) => boolean,
            NOT_EQUALS: <T>(expectedValues: Array<T>, value: T) => boolean,
            NOT_IN: <T>(expectedValues: Array<T>, value: T) => boolean
          }>,
          target:
            | { field: 'lives' | 'stars' | string, scope: 'variable' }
            | { field: 'isCorrect' | 'answer', ref: string, scope: 'slide' },
          values: Array<number | boolean | string | Array<string>>
        }>,
        destination:
          | { ref: string, type: string, version?: string }
          | { ref: string, type: 'video' | 'pdf', version?: string },
        instructions: Array<{
          field: string,
          type: 'add' | 'set',
          value: number | boolean | string
        }>,
        priority: number,
        ref?: string,
        source:
          | { ref: string, type: string, version?: string }
          | { ref: string, type: 'video' | 'pdf', version?: string }
      }> | null,
      slides: Array<{
        _id: string,
        chapter_id: string,
        position?: ?number,
        question:
          | { content: { answers: Array<Array<string>> }, type: 'qcm' }
          | { content: { answers: Array<Array<string>> }, type: 'qcmGraphic' }
          | {
              content: { answers: Array<Array<string>>, matchOrder: boolean },
              type: 'qcmDrag'
            }
          | { content: { answers: Array<Array<string>> }, type: 'slider' }
          | {
              content: { answers: Array<Array<string>>, maxTypos?: ?number },
              type: 'basic'
            }
          | {
              content: {
                answers: Array<Array<string>>,
                choices: Array<{ type: 'text' | 'select' }>,
                matchOrder: boolean,
                maxTypos?: ?number
              },
              type: 'template'
            }
      }>
    }>
  ): {
    payload: {
      content:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      instructions: Array<{
        field: string,
        type: 'add' | 'set',
        value: number | boolean | string
      }> | null,
      nextContent:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string }
    },
    type: 'extraLifeAccepted'
  } | null;
  declare function computeNextStepOnRefuseExtraLife(
    config: {
      answerBoundaryLimit: number,
      lives: number,
      livesDisabled: boolean,
      maxTypos: number,
      remainingLifeRequests: number,
      slidesToComplete: number,
      starsPerAskingClue: number,
      starsPerCorrectAnswer: number,
      starsPerResourceViewed: number,
      version: string
    },
    state: {
      content?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      nextContent:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string }
    } & {
      allAnswers: Array<{
        answer: Array<string>,
        isCorrect: ?boolean,
        slideRef: string
      }>,
      content?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      hasViewedAResourceAtThisStep: boolean,
      isCorrect: ?boolean,
      lives: number,
      livesDisabled?: boolean,
      nextContent?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      remainingLifeRequests: number,
      requestedClues: Array<string>,
      slides: Array<string>,
      stars: number,
      step: { current: number },
      variables: { [_: string]: string | boolean | number },
      viewedResources: Array<{
        ref: string,
        resources: Array<string>,
        type: mixed /* UNEXPECTED TYPE: EvalT */
      }>
    }
  ): {
    payload: {
      content:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      nextContent:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string }
    },
    type: 'extraLifeRefused'
  };
  declare function createProgression(
    engine: { ref: string, version: string },
    content: | { ref: string, type: string, version?: string }
    | { ref: string, type: 'video' | 'pdf', version?: string },
    engineOptions: { lives?: number, livesDisabled?: boolean },
    availableContent: Array<{
      ref: string,
      rules: Array<{
        conditions: Array<{
          operator: $Keys<{
            BETWEEN: <T>(expectedValues: Array<T>, value: T) => boolean,
            EQUALS: <T>(expectedValues: Array<T>, value: T) => boolean,
            GT: <T>(expectedValues: Array<T>, value: T) => boolean,
            GTE: <T>(expectedValues: Array<T>, value: T) => boolean,
            IN: <T>(expectedValues: Array<T>, value: T) => boolean,
            LT: <T>(expectedValues: Array<T>, value: T) => boolean,
            LTE: <T>(expectedValues: Array<T>, value: T) => boolean,
            NOT_BETWEEN: <T>(expectedValues: Array<T>, value: T) => boolean,
            NOT_EQUALS: <T>(expectedValues: Array<T>, value: T) => boolean,
            NOT_IN: <T>(expectedValues: Array<T>, value: T) => boolean
          }>,
          target:
            | { field: 'lives' | 'stars' | string, scope: 'variable' }
            | { field: 'isCorrect' | 'answer', ref: string, scope: 'slide' },
          values: Array<number | boolean | string | Array<string>>
        }>,
        destination:
          | { ref: string, type: string, version?: string }
          | { ref: string, type: 'video' | 'pdf', version?: string },
        instructions: Array<{
          field: string,
          type: 'add' | 'set',
          value: number | boolean | string
        }>,
        priority: number,
        ref?: string,
        source:
          | { ref: string, type: string, version?: string }
          | { ref: string, type: 'video' | 'pdf', version?: string }
      }> | null,
      slides: Array<{
        _id: string,
        chapter_id: string,
        position?: ?number,
        question:
          | { content: { answers: Array<Array<string>> }, type: 'qcm' }
          | { content: { answers: Array<Array<string>> }, type: 'qcmGraphic' }
          | {
              content: { answers: Array<Array<string>>, matchOrder: boolean },
              type: 'qcmDrag'
            }
          | { content: { answers: Array<Array<string>> }, type: 'slider' }
          | {
              content: { answers: Array<Array<string>>, maxTypos?: ?number },
              type: 'basic'
            }
          | {
              content: {
                answers: Array<Array<string>>,
                choices: Array<{ type: 'text' | 'select' }>,
                matchOrder: boolean,
                maxTypos?: ?number
              },
              type: 'template'
            }
      }>
    }>
  ): {
    actions: Array<
      | { type: 'init' }
      | {
          payload: {
            instructions: Array<{
              field: string,
              type: 'add' | 'set',
              value: number | boolean | string
            }> | null,
            nextContent:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'move'
        }
      | {
          payload: {
            answer: Array<string>,
            content:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string },
            godMode: ?boolean,
            instructions: Array<{
              field: string,
              type: 'add' | 'set',
              value: number | boolean | string
            }> | null,
            isCorrect: ?boolean,
            nextContent:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'answer'
        }
      | {
          payload: {
            content:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'clue'
        }
      | {
          payload: {
            content:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string },
            instructions: Array<{
              field: string,
              type: 'add' | 'set',
              value: number | boolean | string
            }> | null,
            nextContent:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'extraLifeAccepted'
        }
      | {
          payload: {
            content:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string },
            nextContent:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'extraLifeRefused'
        }
      | {
          payload: {
            content:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string },
            resource: { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'resource'
        }
      | {
          payload: {
            instructions: Array<{
              field: string,
              type: 'add' | 'set',
              value: number | boolean | string
            }> | null,
            nextContent:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'move'
        }
    >,
    content:
      | { ref: string, type: string, version?: string }
      | { ref: string, type: 'video' | 'pdf', version?: string },
    engine: { ref: string, version: string },
    engineOptions: { lives?: number, livesDisabled?: boolean },
    state?: {
      content?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      nextContent:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string }
    } & {
      allAnswers: Array<{
        answer: Array<string>,
        isCorrect: ?boolean,
        slideRef: string
      }>,
      content?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      hasViewedAResourceAtThisStep: boolean,
      isCorrect: ?boolean,
      lives: number,
      livesDisabled?: boolean,
      nextContent?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      remainingLifeRequests: number,
      requestedClues: Array<string>,
      slides: Array<string>,
      stars: number,
      step: { current: number },
      variables: { [_: string]: string | boolean | number },
      viewedResources: Array<{
        ref: string,
        resources: Array<string>,
        type: mixed /* UNEXPECTED TYPE: EvalT */
      }>
    }
  } | null;
  declare function createState(progression: {
    actions: Array<
      | { type: 'init' }
      | {
          payload: {
            instructions: Array<{
              field: string,
              type: 'add' | 'set',
              value: number | boolean | string
            }> | null,
            nextContent:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'move'
        }
      | {
          payload: {
            answer: Array<string>,
            content:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string },
            godMode: ?boolean,
            instructions: Array<{
              field: string,
              type: 'add' | 'set',
              value: number | boolean | string
            }> | null,
            isCorrect: ?boolean,
            nextContent:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'answer'
        }
      | {
          payload: {
            content:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'clue'
        }
      | {
          payload: {
            content:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string },
            instructions: Array<{
              field: string,
              type: 'add' | 'set',
              value: number | boolean | string
            }> | null,
            nextContent:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'extraLifeAccepted'
        }
      | {
          payload: {
            content:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string },
            nextContent:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'extraLifeRefused'
        }
      | {
          payload: {
            content:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string },
            resource: { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'resource'
        }
      | {
          payload: {
            instructions: Array<{
              field: string,
              type: 'add' | 'set',
              value: number | boolean | string
            }> | null,
            nextContent:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'move'
        }
    >,
    content:
      | { ref: string, type: string, version?: string }
      | { ref: string, type: 'video' | 'pdf', version?: string },
    engine: { ref: string, version: string },
    engineOptions: { lives?: number, livesDisabled?: boolean },
    state?: {
      content?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      nextContent:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string }
    } & {
      allAnswers: Array<{
        answer: Array<string>,
        isCorrect: ?boolean,
        slideRef: string
      }>,
      content?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      hasViewedAResourceAtThisStep: boolean,
      isCorrect: ?boolean,
      lives: number,
      livesDisabled?: boolean,
      nextContent?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      remainingLifeRequests: number,
      requestedClues: Array<string>,
      slides: Array<string>,
      stars: number,
      step: { current: number },
      variables: { [_: string]: string | boolean | number },
      viewedResources: Array<{
        ref: string,
        resources: Array<string>,
        type: mixed /* UNEXPECTED TYPE: EvalT */
      }>
    }
  }): {
    content?:
      | { ref: string, type: string, version?: string }
      | { ref: string, type: 'video' | 'pdf', version?: string },
    nextContent:
      | { ref: string, type: string, version?: string }
      | { ref: string, type: 'video' | 'pdf', version?: string }
  } & {
    allAnswers: Array<{
      answer: Array<string>,
      isCorrect: ?boolean,
      slideRef: string
    }>,
    content?:
      | { ref: string, type: string, version?: string }
      | { ref: string, type: 'video' | 'pdf', version?: string },
    hasViewedAResourceAtThisStep: boolean,
    isCorrect: ?boolean,
    lives: number,
    livesDisabled?: boolean,
    nextContent?:
      | { ref: string, type: string, version?: string }
      | { ref: string, type: 'video' | 'pdf', version?: string },
    remainingLifeRequests: number,
    requestedClues: Array<string>,
    slides: Array<string>,
    stars: number,
    step: { current: number },
    variables: { [_: string]: string | boolean | number },
    viewedResources: Array<{
      ref: string,
      resources: Array<string>,
      type: mixed /* UNEXPECTED TYPE: EvalT */
    }>
  };
  declare function getConfig(engine: { ref: string, version: string }): {
    answerBoundaryLimit: number,
    lives: number,
    livesDisabled: boolean,
    maxTypos: number,
    remainingLifeRequests: number,
    slidesToComplete: number,
    starsPerAskingClue: number,
    starsPerCorrectAnswer: number,
    starsPerResourceViewed: number,
    version: string
  };
  declare function getConfigForProgression(progression: {
    actions: Array<
      | { type: 'init' }
      | {
          payload: {
            instructions: Array<{
              field: string,
              type: 'add' | 'set',
              value: number | boolean | string
            }> | null,
            nextContent:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'move'
        }
      | {
          payload: {
            answer: Array<string>,
            content:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string },
            godMode: ?boolean,
            instructions: Array<{
              field: string,
              type: 'add' | 'set',
              value: number | boolean | string
            }> | null,
            isCorrect: ?boolean,
            nextContent:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'answer'
        }
      | {
          payload: {
            content:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'clue'
        }
      | {
          payload: {
            content:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string },
            instructions: Array<{
              field: string,
              type: 'add' | 'set',
              value: number | boolean | string
            }> | null,
            nextContent:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'extraLifeAccepted'
        }
      | {
          payload: {
            content:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string },
            nextContent:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'extraLifeRefused'
        }
      | {
          payload: {
            content:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string },
            resource: { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'resource'
        }
      | {
          payload: {
            instructions: Array<{
              field: string,
              type: 'add' | 'set',
              value: number | boolean | string
            }> | null,
            nextContent:
              | { ref: string, type: string, version?: string }
              | { ref: string, type: 'video' | 'pdf', version?: string }
          },
          type: 'move'
        }
    >,
    content:
      | { ref: string, type: string, version?: string }
      | { ref: string, type: 'video' | 'pdf', version?: string },
    engine: { ref: string, version: string },
    engineOptions: { lives?: number, livesDisabled?: boolean },
    state?: {
      content?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      nextContent:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string }
    } & {
      allAnswers: Array<{
        answer: Array<string>,
        isCorrect: ?boolean,
        slideRef: string
      }>,
      content?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      hasViewedAResourceAtThisStep: boolean,
      isCorrect: ?boolean,
      lives: number,
      livesDisabled?: boolean,
      nextContent?:
        | { ref: string, type: string, version?: string }
        | { ref: string, type: 'video' | 'pdf', version?: string },
      remainingLifeRequests: number,
      requestedClues: Array<string>,
      slides: Array<string>,
      stars: number,
      step: { current: number },
      variables: { [_: string]: string | boolean | number },
      viewedResources: Array<{
        ref: string,
        resources: Array<string>,
        type: mixed /* UNEXPECTED TYPE: EvalT */
      }>
    }
  }): {
    answerBoundaryLimit: number,
    lives: number,
    livesDisabled: boolean,
    maxTypos: number,
    remainingLifeRequests: number,
    slidesToComplete: number,
    starsPerAskingClue: number,
    starsPerCorrectAnswer: number,
    starsPerResourceViewed: number,
    version: string
  };
}
