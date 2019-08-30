// @flow strict

import type {
  Answer,
  EngineConfig,
  Progression,
  ProgressionId,
  Slide
} from '@coorpacademy/progression-engine';
import type {Chapter, Discipline, Level, Resource} from './models';
import type {Services} from './services';

// eslint-disable-next-line flowtype/no-weak-types
type Task = Function;

type Data = {
  progressions: {
    entities: {
      [id: ProgressionId]: Progression
    }
  },
  configs: {
    entities: {
      [id: string]: EngineConfig
    }
  },
  contents: {
    chapter: {
      entities: {
        [id: string]: Chapter
      }
    },
    discipline: {
      entities: {
        [id: string]: Discipline
      }
    },
    level: {
      entities: {
        [id: string]: Level
      }
    },
    slide: {
      entities: {
        [id: string]: Slide
      }
    }
  },
  videos: {
    entities: {
      [id: string]: string
    }
  }
};

type Ui = {
  answers: {
    [key: string]: {value: Answer}
  },
  coaches: {
    availableCoaches: number
  },
  comments: {
    text: ?string
  },
  corrections: {
    accordion: Array<boolean>,
    playResource: string
  },
  current: {
    progressionId: ProgressionId
  },
  route: {
    [id: ProgressionId]: 'answer' | 'correction'
  }
};

// Keep it no-strict because some of apps can extend this one
type ReduxState = {
  data: Data,
  ui: Ui
};

type GetState = () => ReduxState;

type Action = {|
  task?: Task,
  bailout?: Function,
  type: string,
  meta?: {
    id?: string,
    resource?: Resource,
    location?: string,
    progressionId?: string,
    slideId?: string,
    type?: string,
    ref?: string,
    answer?: string
  }
|};

type Options = {
  services: Services
};

type PromiseAction = Promise<Action>;
type ThunkAction = (Function, GetState, Options) => Action | PromiseAction;
type DispatchedAction = Action | ThunkAction | PromiseAction;
type Dispatch = (action: Action | ThunkAction | PromiseAction) => DispatchedAction;

/* eslint-disable no-use-before-define */
// type ThunkAction = (dispatch: Dispatch, getState: GetState, Options) => DispatchedAction;
/* eslint-enable no-use-before-define */

export type {
  Action,
  Data,
  DispatchedAction,
  Dispatch,
  GetState,
  PromiseAction,
  Options,
  ReduxState,
  Resource,
  ThunkAction,
  Ui
};
