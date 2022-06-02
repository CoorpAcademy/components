import type {Middleware} from 'redux';
import {Dispatch} from 'redux';

import {Action} from '../actions';
import {StoreState} from '../configure-store';
import fetchCourse from '../services/fetch-demo';
import {VIEWS} from '..';
import {navigateTo, START_APP} from '../actions/navigation';
import {storeToken} from '../actions/token';
import {storeSlide} from '../actions/slide';
import {receivedCourse} from '../actions/courses';

const onStartApp: Middleware<{}, StoreState, Dispatch<Action>> = ({dispatch}) => next => (
  action: Action
) => {
  if (action.type === START_APP) {
    const {token, slide} = action.payload;
    dispatch(storeToken(token));
    dispatch(storeSlide(slide));

    const initialView = slide ? VIEWS.slides : VIEWS.onboarding;

    dispatch(navigateTo(initialView));

    // --------------
    // demo service

    const language = 'fr';
    const universalRef = 'dis_xxx15';

    // fetchCourse(token, language, universalRef).then(course => {
    //   dispatch(receivedCourse(course));
    // });
  }

  return next(action);
};

export default onStartApp;
