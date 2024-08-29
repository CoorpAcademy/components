import {defaultsDeep} from 'lodash/fp';
import BrandLearningPriorities from '../../../../../organism/brand-learning-priorities/test/fixtures/default';
import Default, {items} from './default';

const {props} = Default;
const LearningPrioritiesProps = BrandLearningPriorities.props;

export default {
  props: defaultsDeep(props, {
    items,
    content: {
      ...LearningPrioritiesProps,
      type: 'learning-priorities'
    }
  })
};
