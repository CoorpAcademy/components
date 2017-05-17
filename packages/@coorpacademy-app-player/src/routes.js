import createView from './view';
import {selectProgression} from './actions/ui';

const createRoutes = options => {
  return [
    {
      path: ':id?',
      view: createView(options),
      actions: [({id}) => selectProgression(id)]
    }
  ];
};

export default createRoutes;
