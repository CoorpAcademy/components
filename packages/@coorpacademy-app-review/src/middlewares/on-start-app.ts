import type {Middleware, Store} from 'redux';
import {Dispatch} from 'redux';

import {VIEWS} from '../common';
import {Action} from '../actions';
import {storeToken} from '../actions/data/token';
import {receivedSkills, errorFetchingSkills} from '../actions/data/skills';
import {navigateTo, START_APP, ViewPath} from '../actions/ui/navigation';

// eslint-disable-next-line import/no-named-as-default
import fetchSkills from '../services/fetch-skills';
// eslint-disable-next-line import/no-named-as-default
import createProgression from '../services/create-progression';
import {errorCreatingProgression, receiveProgression} from '../actions/data/progression';

const onStartApp: Middleware<{}, Store, Dispatch<Action>> =
  ({dispatch}) =>
  next =>
  (action: Action) => {
    if (action.type === START_APP) {
      const {skillRef, token} = action.payload;

      dispatch(storeToken(token));

      if (skillRef) {
        createProgression(skillRef, token)
          .then(progression => {
            return dispatch(receiveProgression({progression, token}));
          })
          .catch(err => {
            return dispatch(errorCreatingProgression(err));
          });
      } else {
        fetchSkills(token)
          .then(skills => {
            return dispatch(receivedSkills(skills));
          })
          .catch(err => {
            return dispatch(errorFetchingSkills(err));
          });
      }

      const initialView: ViewPath = skillRef ? VIEWS.slides : VIEWS.skills;
      dispatch(navigateTo(initialView));
    }

    return next(action);
  };

export default onStartApp;
