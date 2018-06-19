import Loading from '@coorpacademy/components/es/template/app-player/loading';
import Question from '@coorpacademy/components/es/template/app-racing/question';
import Race from '@coorpacademy/components/es/template/app-racing/race';
import pipe from 'lodash/fp/pipe';
import {createElement} from 'react';

export const createStateToVNode = (template, mapStateToProps) =>
  pipe(mapStateToProps, props => createElement(template, props));

export const views = {
  loading: Loading,
  question: Question,
  race: Race
};
