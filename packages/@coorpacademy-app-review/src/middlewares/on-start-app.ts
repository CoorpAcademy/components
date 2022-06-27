import type {Middleware} from 'redux';
import {Dispatch} from 'redux';

import {Action} from '../actions';
// import fetchCourse from '../services/fetch-demo';
import {VIEWS} from '../common';
import {navigateTo, START_APP, ViewPath} from '../actions/navigation';
import {storeToken} from '../actions/token';
import {storeFirstSlide} from '../actions/slides';
// import {receivedCourse} from '../actions/courses';
import {StoreState} from '../types/store-state';

const onStartApp: Middleware<{}, StoreState, Dispatch<Action>> =
  ({dispatch}) =>
  next =>
  (action: Action) => {
    if (action.type === START_APP) {
      // eslint-disable-next-line no-warning-comments
      // TODO: fetchProgression + fetchSlide à partir de la progression passée dans les options de l'app
      const {slide} = action.payload;
      if (slide) {
        const {token} = action.payload;
        dispatch(storeToken(token));
        dispatch(storeFirstSlide(slide));
      }

      const initialView: ViewPath = slide ? VIEWS.slides : VIEWS.onboarding;

      dispatch(navigateTo(initialView));

      // --------------
      // demo service

      // const language = 'fr';
      // const universalRef = 'dis_xxx15';

      // fetchCourse(token, language, universalRef).then(course => {
      //   dispatch(receivedCourse(course));
      // });
    }

    return next(action);
  };

export default onStartApp;
