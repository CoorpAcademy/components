import {HeaderWithActionsPropsFixture} from '../../types';
import singleActionFixture from './single-action';

const actionWithoutIconFixture: HeaderWithActionsPropsFixture = {
  props: {
    ...singleActionFixture.props,
    actionButtons: [
      {
        type: 'secondary',
        label: 'Archive',
        onClick: () => console.log('click on Archive')
      }
    ]
  }
};

export default actionWithoutIconFixture;
