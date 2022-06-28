import type {Middleware} from 'redux';
import {Dispatch} from 'redux';

import {VIEWS} from '../common';
import {Action} from '../actions';
import {storeToken} from '../actions/data/token';
import {receivedSkills, errorFetchingSkills} from '../actions/data/skills';
import {storeFirstSlide} from '../actions/data/slides';
import {navigateTo, START_APP, ViewPath} from '../actions/ui/navigation';

// eslint-disable-next-line import/no-named-as-default
import fetchSkills from '../services/fetch-skills';

import {StoreState} from '../types/store-state';

const onStartApp: Middleware<{}, StoreState, Dispatch<Action>> =
  ({dispatch}) =>
  next =>
  (action: Action) => {
    if (action.type === START_APP) {
      const {slide, token} = action.payload;

      dispatch(storeToken(token));

      if (slide) {
        dispatch(storeFirstSlide(slide));
      } else {
        fetchSkills(token)
          .then(skills => {
            return dispatch(receivedSkills(skills));
          })
          .catch(err => {
            return dispatch(errorFetchingSkills(err));
          });
      }

      const initialView: ViewPath = slide ? VIEWS.slides : VIEWS.skills;
      dispatch(navigateTo(initialView));
    }

    return next(action);
  };

export default onStartApp;
