import {HeaderWithActionsPropsFixture} from '../../types';

const fixture: HeaderWithActionsPropsFixture = {
  props: {
    closeButton: {'aria-label': 'Close', onClick: () => console.log('Close')},
    title: 'Safety onboarding',
    tags: [{status: 'disabled', label: 'Disabled'}],
    actionButtons: [{label: 'Enable', type: 'primary', onClick: () => console.log('Enable')}]
  }
};

export default fixture;
