import Loading from '@coorpacademy/components/es/template/app-player/loading';
import createView from './create-view';

export const createLoading = createView(Loading, () => () => ({}));

export default createLoading;
