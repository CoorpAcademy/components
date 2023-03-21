import {Fixture} from '../../types';

export const fixture: Fixture = {
  props: {
    type: 'dangerous',
    label: 'Delete',
    'aria-label': 'aria button',
    'data-name': 'default-button',
    onClick: () => console.log('click')
  }
};
export default fixture;
