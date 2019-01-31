// @flow strict

import type {AnswersService} from './answers';
import type {CluesService} from './clues';
import type {ContenService} from './content';
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
  Content: ContenService,
  ExitNodes: ExitNodesService,
  Progressions: ProgressionsService,
  Recommendations: RecommendationsService,
  Slides: SlidesService
};

// eslint-disable-next-line import/prefer-default-export
export type {Services};
