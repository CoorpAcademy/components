import test from 'ava';
import jsdom from 'jsdom';
import Bluebird from 'bluebird';
import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import * as treant from '@coorpacademy/treantjs-core';
import * as Virtualdom from '@coorpacademy/treantjs-engine-virtual-dom';
import * as React from '@coorpacademy/treantjs-engine-react';
import * as Snabbdom from '@coorpacademy/treantjs-engine-snabbdom';
import {transformP, renderP} from '..';

const {h} = treant;

const engines = {
  Virtualdom,
  React,
  Snabbdom
};

test.before(() => {
  global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
  global.window = document.defaultView;
});

Object.keys(engines).forEach(key => {
  const engine = get(key, engines);

  test(`should render vTree with ${key}`, async t => {
    const updateP = pipe(
      transformP(treant, engine),
      renderP(engine)(document.createElement('div'))
    );

    const el = await updateP(<h1>foo</h1>);

    t.is(el.tagName, 'H1');
    t.is(el.textContent, 'foo');
  });

  test(`should render vTree with Components with ${key}`, async t => {
    const updateP = pipe(
      transformP(treant, engine),
      renderP(engine)(document.createElement('div'))
    );

    const Component = props => <h1>foo</h1>;
    const el = await updateP(Component());
    t.is(el.tagName, 'H1');
    t.is(el.textContent, 'foo');
  });

  test(`should update rendering with ${key}`, async t => {
    t.plan(3);
    const updateP = pipe(
      transformP(treant, engine),
      renderP(engine)(document.createElement('div'))
    );

    const h1 = await updateP(<h1/>);
    t.is(h1.tagName, 'H1');

    try {
      await updateP(Bluebird.reject(new Error()));
      t.fail();
    } catch (err) {
      t.truthy(err);
    }

    const h2 = await updateP(Bluebird.resolve(<h2/>));
    t.is(h2.tagName, 'H2');
  });
});
