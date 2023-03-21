import {LastField, Props} from '../../types';
import {defaultProps as successBulkProgressBarProps} from '../../../bulk-progress-bar/test/fixtures/success';
import {defaultProps as failBulkProgressBarProps} from '../../../bulk-progress-bar/test/fixtures/fail';
import {defaultProps as inProgessBulkProgressBarProps} from '../../../bulk-progress-bar/test/fixtures/in-progress';

const buttonLinkProps: LastField = {
  className: 'bulkInspectButton',
  label: 'Inspect',
  'data-name': 'default-button',
  'aria-label': 'aria button',
  link: {
    href: 'https://setup.coorpacademy.com/assets/templates/import-users-template.xlsx',
    download: true
  },
  componentType: 'button-link'
};
type Fixture = {props: Props};
const fixture: Fixture = {
  props: {
    columns: [{title: 'File name'}, {title: 'Download Status'}],
    rows: [
      {
        fields: [
          'BulkScorm1.zip',
          {
            ...successBulkProgressBarProps,
            componentType: 'progress-bar'
          }
        ]
      },
      {
        fields: [
          'BulkScorm2.zip',
          {
            ...inProgessBulkProgressBarProps,
            progress: 90,
            componentType: 'progress-bar'
          }
        ]
      },
      {
        fields: [
          'BulkScorm3.zip',
          {
            ...inProgessBulkProgressBarProps,
            progress: 70,
            componentType: 'progress-bar'
          }
        ]
      },
      {
        fields: [
          'BulkScorm4.zip',
          {
            ...inProgessBulkProgressBarProps,
            progress: 23,
            componentType: 'progress-bar'
          }
        ]
      },
      {
        fields: [
          'BulkScorm5.zip',
          {
            ...failBulkProgressBarProps,
            componentType: 'progress-bar'
          }
        ]
      }
    ],
    columnWidth: '220px',
    lastField: {...buttonLinkProps},
    ariaDescribedby: 'description-id'
  }
};
export default fixture;
