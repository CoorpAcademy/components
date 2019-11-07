import {defaultsDeep} from 'lodash/fp';
import Upload from '../../../../molecule/brand-upload-box/test/fixtures/loading';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    download: null,
    upload: Upload.props,
    progress: {
      value: 4,
      max: 129,
      desc: 'records processed'
    }
  })
};
