import buildTask from '@coorpacademy/redux-task';

export const POST_PROGRESSION_REQUEST = '@@progression/POST_REQUEST' as const;
export const POST_PROGRESSION_SUCCESS = '@@progression/POST_SUCCESS' as const;
export const POST_PROGRESSION_FAILURE = '@@progression/POST_FAILURE' as const;

export const postProgression = (skillRef: string, token: string) => buildTask({
    types: [POST_PROGRESSION_REQUEST, POST_PROGRESSION_SUCCESS, POST_PROGRESSION_FAILURE],
    task: (dispacth, getState, {services}) => services.fetchSkills(skillRef, token)
  });
