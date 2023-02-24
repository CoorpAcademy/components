import {Props} from '../../types';
import tableOfErrors from '../../../expandible-errors-table/test/fixtures/default';
import validtableOfErrors from '../../../expandible-errors-table/test/fixtures/all-valid';

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
            value: '0'
          }
        ],
        'expandible-errors-table': validtableOfErrors.props
      },
      {
        fields: [
          'Import2.zip',
          'Coorpacademy',
          '22/10/2022',
          '3',
          {
            icon: 'errors-number',
            value: '1'
          }
        ],
        'expandible-errors-table': tableOfErrors.props
      }
    ],
    ariaDescribedby: 'description-id',
    bulletPointMenuButton: {
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
      menuClassName: 'bulkBulletPointMenu'
    }
  }
};
export default fixture;
