import {Props} from '../../types';
import validTableOfErrors from './inspect-all-valid';
import validAndInvalidTableOfErrors from './inspect-valid-invalid';

type Fixture = {props: Props};
const fixture: Fixture = {
  props: {
    columns: [
      {
        title: 'File name'
      },
      {
        title: 'Author'
      },
      {
        title: 'Creation Date'
      },
      {
        title: 'Total files'
      },
      {
        title: 'Total Errors'
      }
    ],
    rows: [
      {
        fields: [
          'Import1.zip',
          'Coorpacademy',
          '22/10/2022',
          '3',
          {
            icon: 'errors-number',
            value: '0',
            componentType: 'status'
          }
        ],
        nestedRow: {
          ...validTableOfErrors.props,
          componentType: 'expandible-errors-table',
          isNestedTable: true
        },
        isRowExpandible: true
      },
      {
        fields: [
          'Import2.zip',
          'Coorpacademy',
          '22/10/2022',
          '3',
          {
            icon: 'errors-number',
            value: '1',
            componentType: 'status'
          }
        ],
        nestedRow: {
          ...validAndInvalidTableOfErrors.props,
          componentType: 'expandible-errors-table',
          isNestedTable: true
        },
        isRowExpandible: true
      }
    ],
    stickyFirstColumn: true,
    stickyLastColumn: true,
    ariaDescribedby: 'description-id',
    lastField: {
      buttonAriaLabel: 'aria button',
      menuAriaLabel: 'aria menu',
      buttons: [
        {
          'data-name': 'CP-publish-button',
          label: 'Download Report',
          type: 'default',
          onClick: () => console.log('click Download Report')
        },
        {
          'data-name': 'CP-delete-button',
          label: 'Redownload files',
          type: 'default',
          onClick: () => console.log('click on Redownload files')
        }
      ],
      onClick: () => console.log('click on menu'),
      menuButtonClassName: 'bulkBulletButton',
      isBulkMenu: true,
      componentType: 'menu'
    }
  }
};
export default fixture;
