import {HeaderWithActionsPropsFixture} from '../../types';

const fixture: HeaderWithActionsPropsFixture = {
  props: {
    closeButton: {'aria-label': 'Close', onClick: () => console.log('Close')},
    title: 'Safety onboarding',
    tags: [
      {status: 'active', label: 'Active'},
      {status: 'ongoingChanges', label: 'Ongoing changes'}
    ],
    saveStatus: {display: true, label: 'Saved'},
    actionButtons: [
      {label: 'Save changes', type: 'secondary', onClick: () => console.log('Save changes')},
      {label: 'Publish changes', type: 'primary', onClick: () => console.log('Publish changes')}
    ]
  }
};

export default fixture;
