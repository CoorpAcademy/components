import * as AnalyticsService from './analytics';
import AnswersService from './answers';
import CluesService from './clues';
import * as CoachService from './coach';
import * as CommentsService from './comments';
import ContentService from './content';
import ExitNodesService from './exit-nodes';
import * as LeaderBoardService from './leaderboard';
import * as LocationService from './location';
import ProgressionsService from './progressions';
import RecommendationsService from './recommendations';

export const Analytics = AnalyticsService;
export const Answers = AnswersService;
export const Clues = CluesService;
export const Coach = CoachService;
export const Comments = CommentsService;
export const Content = ContentService;
export const ExitNodes = ExitNodesService;
export const LeaderBoard = LeaderBoardService;
export const Location = LocationService; // eslint-disable-line no-shadow
export const Logger = console; // eslint-disable-line no-console
export const Progressions = ProgressionsService;
export const Recommendations = RecommendationsService;
