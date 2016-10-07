import test from 'ava';
import jsdom from 'jsdom';
import get from 'lodash/fp/get';
import head from 'lodash/fp/head';
import pipe from 'lodash/fp/pipe';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/toPromise';
import * as treant from '@coorpacademy/treantjs-core';
import * as Virtualdom from '@coorpacademy/treantjs-engine-virtual-dom';
import * as React from '@coorpacademy/treantjs-engine-react';
import * as Snabbdom from '@coorpacademy/treantjs-engine-snabbdom';
import {transform$, render$} from '..';

const {h} = treant;

const engines = {
  Virtualdom,
  React,
  Snabbdom
};

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

Object.keys(engines).forEach(key => {
  const engine = get(key, engines);

  test(`should render vTree with ${key}`, t => {
    const update$ = pipe(
      transform$(treant, engine),
      render$(engine)(document.createElement('div'))
    );

    const vTree$ = Observable.of(<h1>foo</h1>);
    const el$ = update$(vTree$);

    return el$.toArray().map(els => {
      t.is(els.length, 1);
      return head(els);
    }).map(el => {
      t.is(el.tagName, 'H1');
      t.is(el.textContent, 'foo');
      return el;
    }).toPromise();
  });

  test(`should render vTree with Components with ${key}`, t => {
    const update$ = pipe(
      transform$(treant, engine),
      render$(engine)(document.createElement('div'))
    );

    const Component = props => <h1>foo</h1>;
    const vTree$ = Observable.of(<Component/>);
    const el$ = update$(vTree$);

    return el$.toArray().map(els => {
      t.is(els.length, 1);
      return head(els);
    }).map(el => {
      t.is(el.tagName, 'H1');
      t.is(el.textContent, 'foo');
      return el;
    }).toPromise();
  });

  test(`should update rendering with ${key}`, t => {
    const update$ = pipe(
      transform$(treant, engine),
      render$(engine)(document.createElement('div'))
    );

    const vTree$ = Observable.of(<h1/>, <h2/>);
    const el$ = update$(vTree$);

    return el$.toArray().map(els => {
      t.is(els.length, 1);
      return head(els);
    }).map(el => {
      t.is(el.tagName, 'H2');
      return el;
    }).toPromise();
  });
});
