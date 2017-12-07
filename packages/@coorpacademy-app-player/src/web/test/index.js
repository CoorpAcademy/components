import test from 'ava';
import browserEnv from 'browser-env';
import {mockTranslate} from '@coorpacademy/translate';
import * as services from '../../store/services';
import {create} from '..';

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
