import {HeaderWithActionsPropsFixture} from '../../types';

const title =
  'Safety onboarding for all new employees across regional offices and distribution centers';

const fixture: HeaderWithActionsPropsFixture = {
  props: {
    closeButton: {'aria-label': 'Close', onClick: () => console.log('Close')},
    title,
    tags: [{status: 'active', label: 'Active'}],
    subtitle: 'Created by jdoe on 02 Nov 2026 · Last edited by asmith 3 days ago',
    breadcrumbs: [{title: 'Assignments', href: '/assignments'}, {title}],
    actionButtons: [{label: 'Edit', type: 'primary', onClick: () => console.log('Edit')}]
  }
};

export default fixture;
