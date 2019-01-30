// @flow strict

import type {AnswersService} from './answers';
import type {CluesService} from './clues';
import type {DataLayer} from './content';
import type {ExitNodesService} from './exit-nodes';
import type {ProgressionsService} from './progressions';
import type {RecommendationsService} from './recommendations';
import type {SlidesService} from './slides';

type Services = {
  Analytics: any,
  Comments: any,
  LeaderBoard: any,
  Answers: AnswersService,
  Clues: CluesService,
  Content: DataLayer,
  ExitNodes: ExitNodesService,
  Progressions: ProgressionsService,
  Recommendations: RecommendationsService,
  Slides: SlidesService
};

// eslint-disable-next-line import/prefer-default-export
export type {Services};
