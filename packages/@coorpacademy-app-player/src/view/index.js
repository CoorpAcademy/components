import {createElement} from 'react';
import cond from 'lodash/fp/cond';
import constant from 'lodash/fp/constant';
import get from 'lodash/fp/get';
import isEqual from 'lodash/fp/isEqual';
import pipe from 'lodash/fp/pipe';
import Provider from '@coorpacademy/components/es/atom/provider';
import {getCurrentContent, getCurrentProgression, getRoute} from '../utils/state-extract';
import createPopinCorrectionView from './popin-correction';
import createSlideView from './slide';
import createPopinEndView from './popin-end';
import createLoadingView from './loading';

const wrapInProvider = options => vNode => createElement(Provider, options, vNode);

const matchRoute = route => pipe(getRoute, isEqual(route));
const matchContentType = contentType => pipe(getCurrentContent, get('type'), isEqual(contentType));

const createMapStateToProps = (options, store) =>
  cond([
    [getCurrentProgression, createLoadingView(options, store)],
    [getCurrentContent, createLoadingView(options, store)],
    [matchRoute('correction'), createPopinCorrectionView(options, store)],
    [matchContentType('slide'), createSlideView(options, store)],
    [matchContentType('success'), createPopinEndView(options, store)],
    [matchContentType('failure'), createPopinEndView(options, store)],
    [constant(true), createLoadingView(options, store)]
  ]);

const createMapStateToVnode = (options, store) =>
  pipe(createMapStateToProps(options, store), wrapInProvider(options));

export default createMapStateToVnode;
