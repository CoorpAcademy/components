import {defaultsDeep} from 'lodash/fp';
import disciplineHeader from '../../../../../molecule/discipline-header/test/fixtures/vimeo';
import disciplineScope from '../../../../../molecule/discipline-scope/test/fixtures/vimeo';
import Default from './default';

const {props} = Default;
const {title, description, video} = disciplineHeader.props;
const {content: level, levels, selected, onClick} = disciplineScope.props;

export default {
  props: defaultsDeep(props, {
    title,
    description,
    video,
    level,
    levels,
    selected,
    onClick
  })
};
