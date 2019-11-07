import {defaultsDeep} from 'lodash/fp';
import failClosed from './fail-closed';

export default defaultsDeep(failClosed, {
  props: {
    klf: {
      open: true
    },
    assistanceLink: {
      title: 'Signaler un problème avec cette question ?',
      onClick: () => console.log('test onClick')
    }
  }
});
