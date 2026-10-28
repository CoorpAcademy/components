import {HeaderWithActionsPropsFixture} from '../../types';

const fixture: HeaderWithActionsPropsFixture = {
  props: {
    closeButton: {'aria-label': 'Close', onClick: () => console.log('Close')},
    title: 'Safety onboarding',
    tags: [{status: 'draft', label: 'Draft'}],
    actionButtons: [
      {label: 'Save as draft', type: 'secondary', onClick: () => console.log('Save as draft')},
      {label: 'Publish', type: 'primary', disabled: true, onClick: () => console.log('Publish')}
    ]
  }
};

export default fixture;
