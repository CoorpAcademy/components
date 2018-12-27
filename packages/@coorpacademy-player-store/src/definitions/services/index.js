// @flow strict

import type {AnswersService} from './answers';
import type {CluesService} from './clues';
import type {ContentService} from './content';
import type {ExitNodesService} from './exit-nodes';
import type {ProgressionsService} from './progressions';
import type {RecommendationsService} from './recommendations';
import type {SlidesService} from './slides';

type Services = {
  Analytics: any, // eslint-disable-line flowtype/no-weak-types
  Comments: any, // eslint-disable-line flowtype/no-weak-types
  Answers: AnswersService,
  Clues: CluesService,
  Content: ContentService,
  ExitNodes: ExitNodesService,
  Progressions: ProgressionsService,
  Recommendations: RecommendationsService,
  Slides: SlidesService
};

// eslint-disable-next-line import/prefer-default-export
export type {Services};
