import type {Middleware} from 'redux';
import {Dispatch} from 'redux';
import decode from 'jwt-decode';

// import fetchCourse from '../services/fetch-demo';
import {VIEWS} from '../common';

import {Action} from '../actions';
import {storeToken} from '../actions/data/token';
import {receivedSkills} from '../actions/data/skills';
import {storeFirstSlide} from '../actions/data/slides';
import {navigateTo, START_APP, ViewPath} from '../actions/ui/navigation';
import fetchSkills from '../services/fetch-skills';

import {JWT} from '../types/common';
import {StoreState} from '../types/store-state';

const onStartApp: Middleware<{}, StoreState, Dispatch<Action>> =
  ({dispatch}) =>
  next =>
  (action: Action) => {
    if (action.type === START_APP) {
      const {slide, token} = action.payload;
      const {user: userId}: JWT = decode(token);

      dispatch(storeToken(token));

      if (slide) {
        dispatch(storeFirstSlide(slide));
      } else {
        fetchSkills(token).then(skills => {
          dispatch(receivedSkills(skills));
        });
      }

      const initialView: ViewPath = slide ? VIEWS.slides : VIEWS.skills;

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
