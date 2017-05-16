import createDiscussionView from './views/discussion';
import {fetchDiscussionAction} from './actions/api-fetch-discussion';

const createRoutes = options => [
  {
    path: '*',
    view: createDiscussionView(options),
    actions: [fetchDiscussionAction(options)]
  }
];

export default createRoutes;
