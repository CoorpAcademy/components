import Loading from '@coorpacademy/components/es/template/app-player/loading';
import createView from './create-view';

export const createLoading = (options, dispatch) => {
  return createView(options, dispatch, Loading);
};

export default createLoading;
