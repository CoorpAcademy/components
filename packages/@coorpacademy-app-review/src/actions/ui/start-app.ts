import {fetchSkills} from '../api/skills';
import {storeToken} from '../data/token';
import {AppOptions} from '../../types/common';

export const START_APP = '@@navigation/START_APP';

export type StartApp = {
  type: '@@ui/START_APP';
  payload: AppOptions;
};

export const startApp =
  (options: AppOptions): StartApp =>
  (dispatch, getState, {services}) => {
    dispatch({
      type: START_APP
    });

    const {skillRef, token} = options;

    dispatch(storeToken(token));

    if (skillRef) {
      //   postProgression(skillRef, token)
      //     .then(progression => {
      //       return dispatch(receiveProgression({progression, token}));
      //     })
      //     .catch(err => {
      //       return dispatch(errorCreatingProgression(err));
      //     });
    } else {
      dispatch(fetchSkills(token));
    }

    // const initialView: ViewPath = skillRef ? VIEWS.slides : VIEWS.skills;
    // dispatch(navigateTo(initialView));
  };
