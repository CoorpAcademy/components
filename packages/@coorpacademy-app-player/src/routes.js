import createView from './view';
import {updatePlop, updatePlup} from './actions/ui-demo';

const createRoutes = options => {
  return [
    {
      path: '*',
      view: createView(options),
      actions: [
        updatePlop({
          plop: 'new plop !'
        }),
        updatePlup({
          plup: 'new plup !'
        })
      ]
    }
  ];
};

export default createRoutes;
