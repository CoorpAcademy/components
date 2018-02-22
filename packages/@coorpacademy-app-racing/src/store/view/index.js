import cond from 'lodash/fp/cond';
import constant from 'lodash/fp/constant';
import get from 'lodash/fp/get';
import isNil from 'lodash/fp/isNil';
import isEqual from 'lodash/fp/isEqual';
import pipe from 'lodash/fp/pipe';
import {getStepContent, getCurrentProgression, getRoute} from '../utils/state-extract';
import {popinCorrectionStateToProps} from './state-to-props/popin-correction';
import popinEndStateToProps from './state-to-props/popin-end';
import loadingStateToProps from './state-to-props/loading';
import {createSlideStateToProps} from './state-to-props/slide';

const hasNotProgression = pipe(getCurrentProgression, isNil);
const hasNoContent = pipe(getStepContent, isNil);
const matchRoute = route => pipe(getRoute, isEqual(route));
const matchContentType = contentType => pipe(getStepContent, get('type'), isEqual(contentType));
const matchContentRef = contentType => pipe(getStepContent, get('ref'), isEqual(contentType));

// eslint-disable-next-line import/prefer-default-export
export const selectMapStateToVNode = (options, store, views, createStateToVNode) =>
  createStateToVNode(views.player, createSlideStateToProps(options, store));
