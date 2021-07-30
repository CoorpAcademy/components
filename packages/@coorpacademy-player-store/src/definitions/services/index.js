// @flow strict

import type {AnswersService} from './answers';
import type {CluesService} from './clues';
import type {ContentService} from './content';
import type {ExitNodesService} from './exit-nodes';
import type {ProgressionsService} from './progressions';
import type {RecommendationsService} from './recommendations';
import type {SlidesService} from './slides';
import type {VideosService} from './videos';

type Services = {
  // eslint-disable-next-line flowtype/no-weak-types
  Analytics: any,
  // eslint-disable-next-line flowtype/no-weak-types
  Comments: any,
  // eslint-disable-next-line flowtype/no-weak-types
  LeaderBoard: any,
  Answers: AnswersService,
  Clues: CluesService,
  Content: ContentService,
  ExitNodes: ExitNodesService,
  Progressions: ProgressionsService,
  Recommendations: RecommendationsService,
  Slides: SlidesService,
  Videos: VideosService
};

export type {Services};
