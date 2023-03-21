import {UploadingFileProgressProps as Props} from '../../types';

type Fixture = {props: Props};
const fixture: Fixture = {
  props: {
    mainText: 'Upload in Progress ...',
    subText:
      'continue working (or go for a coffee) while your files are being uploading, you will be notified when it is over. ',
    progressionValue: 3,
    leftButtonLink: {
      type: 'secondary',
      label: 'Create New Import',
      'aria-label': 'Create New Import',
      'data-name': 'default-button',
      onClick: () => console.log('click')
    },
    rightButtonLink: {
      type: 'primary',
      label: 'Go to Dashboard',
      'aria-label': 'Go to Dashboard',
      'data-name': 'default-button',
      onClick: () => console.log('click')
    }
  }
};

export default fixture;
