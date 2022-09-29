import {defaultsDeep} from 'lodash/fp';
import popinError from '../../../../../molecule/cm-popin/test/fixtures/error-with-close';
import correctClosed from './correct-closed';

const popinErrorProps = popinError.props;

export default defaultsDeep(correctClosed, {
  props: {
    header: {
      type: 'popinCorrection',
      cta: {
        title: 'Next Chapter',
        subtitle: "2/8 Qu'est ce que le Big Data ?"
      }
    },
    assistanceLink: {
      title: 'Signaler un problème avec cette question ?',
      onClick: () => console.log('test onClick')
    },
    popinError: popinErrorProps
  }
});
