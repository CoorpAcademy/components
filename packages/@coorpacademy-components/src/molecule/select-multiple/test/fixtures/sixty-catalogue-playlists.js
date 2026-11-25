import {times} from 'lodash/fp';
import fixture from './searchable-cm-theme';

export default {
  props: {
    ...fixture.props,
    selectionLabel: '12 playlists selected',
    options: times(
      index => ({
        name: `Catalogue playlist ${index + 1} — Leadership and professional development`,
        value: `catalogue-${index + 1}`,
        selected: index < 12,
        rightLabel: `${index + 1} contents`
      }),
      60
    )
  }
};
