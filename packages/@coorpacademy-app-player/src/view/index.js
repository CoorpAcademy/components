import every from 'lodash/fp/every';
import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import isUndefined from 'lodash/fp/isUndefined';
import {createElement} from 'react';
import Provider from '@coorpacademy/components/es/atom/provider';
import {getCurrentContent, getCurrentProgression, getAnswers} from '../utils/state-extract';
import PopinCorrection from './popin-correction';
import PopinEnd from './popin-end';
import Loading from './loading';
import Slide from './slide';

const wrapInProvider = options => vNode => createElement(Provider, options, vNode);

const renderView = (options, dispatch, state) => view => {
  return view(options, dispatch)(state);
};

const createMapStateToVnode = (options, {dispatch}) =>
  pipe(state => {
    const render = renderView(options, dispatch, state);
    const progression = getCurrentProgression(state);

    if (!progression) return render(Loading);
    const currentContent = getCurrentContent(state);

    const {isCorrect, correction} = getAnswers(state);

    if (!every(isUndefined, [isCorrect, correction])) return render(PopinCorrection);

    switch (get('type', currentContent)) {
      case 'slide': {
        return render(Slide);
      }
      case 'success':
      case 'failure': {
        return render(PopinEnd);
      }
      default: {
        return render(Loading);
      }
    }
  }, wrapInProvider(options));

export default createMapStateToVnode;
