import {Props} from '../../types';

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
