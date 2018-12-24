// @flow strict

import type {State} from '@coorpacademy/progression-engine';

type Task = () => ?void | Content | ExitNode;

type GetState = () => State;

type Action = {|
  types: Array<string>,
  task: Task,
  meta: {
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

type AnalyticsActions = {|
  ...Action
|};

type AnswersActions = {|
  ...Action
|};

type CluesActions = {|
  ...Action,
  bailout: () => string
|};

type CommentsActions = {|
  ...Action
|};

type ContentsActions = {|
  ...Action,
  bailout: () => string
|};

type ExitNodesActions = {|
  ...Action,
  bailout: () => string
|};
type NextContentActions = {|
  ...Action,
  bailout: () => string
|};
type ProgressionsActions = {|
  ...Action,
  bailout?: () => number
|};
type RankActions = {|
  ...Action,
  // eslint-disable-next-line flowtype/no-weak-types
  bailout?: () => any
|};
type RecommendationsActions = {|
  ...Action,
  // eslint-disable-next-line flowtype/no-weak-types
  bailout?: () => void | ?Recommendation
|};

type Dispatch = (
  action: | Action
  | AnswersActions
  | CluesActions
  | CommentsActions
  | ContentsActions
  | ExitNodesActions
  | NextContentActions
  | ProgressionsActions
  | RankActions
  | RecommendationsActions
  // eslint-disable-next-line flowtype/no-weak-types
) => any;

export type {
  AnalyticsActions,
  Answers,
  AnswersActions,
  Chapter,
  CluesActions,
  CommentsActions,
  ContentsActions,
  Dispatch,
  ExitNode,
  ExitNodesActions,
  FailureExitNode,
  GetState,
  Lesson,
  Level,
  Media,
  NextContentActions,
  ProgressionsActions,
  RankActions,
  Recommendation,
  RecommendationsActions,
  Resource,
  ResourceType,
  Slide,
  SucessExitNode,
  Url
};
