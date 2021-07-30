// @flow strict

import type {
  Answer,
  EngineConfig,
  Progression,
  ProgressionId,
  Slide
} from '@coorpacademy/progression-engine';
import type {Chapter, Discipline, Level, Resource, VideoTrack} from './models';
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
      [id: string]: {
        uri: string,
        tracks?: Array<VideoTrack>
      }
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

type Action = {
  task?: Task,
  // bailout?: <State, Result>(State) => Result | void,
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
  },
  error?: boolean
};

type Options = {
  services: Services
};

type PromiseAction = Promise<Action>;
type DispatchedAction = Action | PromiseAction;
// eslint-disable-next-line no-use-before-define
type ThunkAction = (Dispatch, GetState, Options) => DispatchedAction;
type Dispatch = (action: Action | ThunkAction | PromiseAction) => DispatchedAction;

// type ThunkAction = (dispatch: Dispatch, getState: GetState, Options) => DispatchedAction;

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
