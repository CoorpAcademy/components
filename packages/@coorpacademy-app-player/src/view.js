import pipe from 'lodash/fp/pipe';
import getOr from 'lodash/fp/getOr';
import get from 'lodash/fp/get';
import {createElement} from 'react';
import {Provider, FreeRun} from '@coorpacademy/components';

const currentProgression = state => {
  const entities = getOr({}, 'data.progressions.entities')(state);
  const currentId = getOr(null, 'ui.current.progressionId')(state);
  return getOr({}, currentId)(entities);
};

const toHeader = state => {
  return {
    primary: {
      title: 'Du management classique au nouveau blablabla'
    },
    lives: {
      count: get('lives')(currentProgression(state))
    }
  };
};

const toPlayer = state => {
  return {
    progression: get('progression')(currentProgression(state)),
    question: 'Amongst these businesses, which have suffered setbacks for not knowing how to putting users first?',
    cta: {
      submitValue: 'Coorpacademy',
      href: '#',
      target: '_self',
      light: false,
      small: false,
      secondary: false
    },
    help: 'Select something below',
    answer: {
      type: 'qcm',
      answers: [
        {
          title: 'There is no need for a password',
          selected: false
        },
        {
          title: 'Lorem ipsum',
          selected: false
        },
        {
          title: 'Lorem',
          selected: true
        },
        {
          title: 'You need to have a password',
          selected: false
        },
        {
          title: 'Pouet',
          selected: true
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          selected: false
        },
        {
          title: 'Lorem ipsum dolor',
          selected: false
        },
        {
          title: 'all your base are belong to us',
          selected: false
        }
      ]
    },
    buttons: [
      {
        title: 'Media',
        type: 'media'
      },
      {
        title: 'Clue',
        type: 'clue'
      },
      {
        title: 'Coach',
        type: 'coach'
      }
    ]
  };
};

const createMapStateToProps = ({api}) => dispatch => state => {
  return {
    header: toHeader(state),
    player: toPlayer(state)
  };
};

export {createMapStateToProps};

const wrapInProvider = options => vNode => createElement(Provider, options, vNode);

export default options => dispatch => {
  const mapStateToProps = createMapStateToProps(options)(dispatch);

  return pipe(mapStateToProps, FreeRun, wrapInProvider(options));
};
