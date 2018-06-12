import defaultsDeep from 'lodash/fp/defaultsDeep';
import correctClosed from './correct-closed';

export default defaultsDeep(correctClosed, {
  props: {
    resources: {
      open: true
    },
    assistanceLink: {
      title: 'Signaler un problème avec cette question ?',
      onClick: () => console.log('test onClick')
    }
  }
});
