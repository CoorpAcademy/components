import {noop} from 'lodash/fp';

export default {
  props: {
    theme: 'coorpmanager',
    multiple: true,
    title: 'Coorpacademy catalogue playlists',
    'aria-label': 'Coorpacademy catalogue playlists',
    selectionLabel: '2 playlists selected',
    options: [
      {
        name: 'Leadership essentials',
        value: 'leadership',
        selected: true,
        rightLabel: '14 contents'
      },
      {name: 'Managing teams', value: 'teams', selected: false, rightLabel: '8 contents'},
      {
        name: 'Former playlist',
        value: 'former',
        selected: true,
        rightLabel: '0 contents',
        warning: true
      }
    ],
    onChange: noop,
    search: {
      value: '',
      label: 'Search Coorpacademy catalogue playlists',
      emptyLabel: 'No matching catalogue playlists',
      onChange: noop
    }
  }
};
