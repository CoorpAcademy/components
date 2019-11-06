import {defaultsDeep} from 'lodash/fp';
import correctClosed from './correct-closed';

export default defaultsDeep(correctClosed, {
  props: {
    tips: {
      open: true
    },
    assistanceLink: {
      title: 'Signaler un problème avec cette question ?',
      onClick: () => console.log('test onClick')
    }
  }
});
