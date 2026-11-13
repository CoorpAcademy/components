import {HeaderWithActionsPropsFixture} from '../../types';

const title =
  'Safety onboarding for all new employees across regional offices and distribution centers';

const fixture: HeaderWithActionsPropsFixture = {
  props: {
    closeButton: {'aria-label': 'Close', onClick: () => console.log('Close')},
    title,
    tags: [{status: 'active', label: 'Active'}],
    subtitle: 'Created by jdoe on 02 Nov 2026 · Last edited by asmith 3 days ago',
    actionButtons: [
      {
        label: 'Export XLSX',
        type: 'primary',
        iconName: 'download',
        iconColor: '#ffffff',
        onClick: () => console.log('Export XLSX'),
        menu: {
          ariaLabel: 'Export formats',
          options: [
            {label: 'Export XLSX', onClick: () => console.log('Export XLSX')},
            {label: 'Export CSV', onClick: () => console.log('Export CSV')},
            {label: 'Export TSV', onClick: () => console.log('Export TSV')}
          ]
        }
      },
      {label: 'Send reminder', type: 'secondary', onClick: () => console.log('Send reminder')},
      {label: 'Edit', type: 'secondary', onClick: () => console.log('Edit')},
      {label: 'Duplicate', type: 'secondary', onClick: () => console.log('Duplicate')},
      {label: 'Disable', type: 'secondary', onClick: () => console.log('Disable')}
    ]
  }
};

export default fixture;
