import {defaultsDeep} from 'lodash/fp';
import disciplineHeader from '../../../../../molecule/discipline-header/test/fixtures/medium-description';
import Default from './default';

const {props} = Default;
const {title, description, video} = disciplineHeader.props;

export default {
  props: defaultsDeep(props, {
    title,
    description,
    video
  })
};
