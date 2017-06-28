import PopinEnd from '@coorpacademy/components/es/template/app-player/popin-end';
import mapStateToProps from './state-to-props/popin-end';
import createView from './create-view';

const createPopinEnd = createView(PopinEnd, mapStateToProps);

export default createPopinEnd;
