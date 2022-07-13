import {AppOptions} from 'src/types/common';
import {errorFetchingSkills, receivedSkills} from '../data/skills';
import {storeToken} from '../data/token';

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
    console.log('start app', {options, services});

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
      const {fetchSkills} = services;

      fetchSkills(token)
        .then(skills => {
          return dispatch(receivedSkills(skills));
        })
        .catch(err => {
          return dispatch(errorFetchingSkills(err));
        });
    }

    // const initialView: ViewPath = skillRef ? VIEWS.slides : VIEWS.skills;
    // dispatch(navigateTo(initialView));
  };
