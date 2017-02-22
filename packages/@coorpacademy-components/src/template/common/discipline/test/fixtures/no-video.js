import defaultsDeep from 'lodash/fp/defaultsDeep';
import disciplineHeader from '../../../../../molecule/discipline-header/test/fixtures/no-video';
import Default from './default';

const {props} = Default;
const {title, description, image} = disciplineHeader.props;

export default {
  props: defaultsDeep(props, {
    title,
    description,
    image,
    video: null
  })
};
