import test from 'ava';
import Component from '..';
import {renderComponent} from '../../../test/helpers/render-component';
import fixture0 from './fixtures/default';
import fixture1 from './fixtures/draft';
import fixture2 from './fixtures/draft-deletable-content-items';
import fixture3 from './fixtures/draft-readonly';

test.serial('all existing Skills fixtures preserve markup', t => {
  const fixtures = [
    ['default', fixture0],
    ['draft', fixture1],
    ['draft-deletable-content-items', fixture2],
    ['draft-readonly', fixture3]
  ] as const;
  fixtures.forEach(([name, fixture]) => {
    const markup = renderComponent(t, Component, fixture);
    t.snapshot(markup.replace(/(id|for)="input-checkbox-[0-9]+"/g, '$1="checkbox-id"'), name);
  });
});
