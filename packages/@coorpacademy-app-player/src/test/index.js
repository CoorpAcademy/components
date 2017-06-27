import test from 'ava';
import browserEnv from 'browser-env';
import * as services from '../services';
import {create} from '..';

browserEnv(['window', 'document', 'navigator']);

test('should create app', t => {
  const el = document.createElement('div');
  const app = create({
    translate: v => v,
    container: el,
    services,
    progressionId: '1'
  });

  app.update();
  app.unsubscribe();
  t.pass();
});
