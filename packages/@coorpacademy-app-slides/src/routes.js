import createView from './view';

const createRoutes = options => [
  {
    path: '*',
    view: createView(options),
    actions: []
  }
];

export default createRoutes;
