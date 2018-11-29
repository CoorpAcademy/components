import test from 'ava';
import browserEnv from 'browser-env';
import {mockTranslate} from '@coorpacademy/translate';

import {
  Analytics as AnalyticsService,
  Answers as AnswersService,
  Clues as CluesService,
  Coach as CoachService,
  Comments as CommentsService,
  Content as ContentService,
  ExitNodes as ExitNodesService,
  LeaderBoard as LeaderBoardService,
  Location as LocationService,
  Progressions as ProgressionsService,
  Recommendations as RecommendationsService
} from '@coorpacademy/player-services/es';

import * as fixtures from '../../sandbox/fixtures';
import {create} from '..';

const services = {
  Analytics: AnalyticsService,
  Answers: AnswersService(fixtures),
  Clues: CluesService(fixtures),
  Coach: CoachService,
  Comments: CommentsService,
  Content: ContentService(fixtures),
  ExitNodes: ExitNodesService(fixtures),
  LeaderBoard: LeaderBoardService,
  Location: LocationService,
  Logger: console,
  Progressions: ProgressionsService(fixtures),
  Recommendations: RecommendationsService(fixtures)
};

browserEnv(['window', 'document', 'navigator']);

test('should create app', async t => {
  const el = document.createElement('div');
  const app = create({
    translate: mockTranslate,
    container: el,
    services,
    progression: '0'
  });

  await app.updateCoaches({
    chatStarted: false,
    coachForDiscipline: []
  });

  await app.selectProgression('1');

  app.update();
  app.unsubscribe();
  t.pass();
});
