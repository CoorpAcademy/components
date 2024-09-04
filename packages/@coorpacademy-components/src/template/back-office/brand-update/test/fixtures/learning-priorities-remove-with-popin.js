import {defaultsDeep} from 'lodash/fp';
import BrandLearningPriorities from '../../../../../organism/brand-learning-priorities/test/fixtures/default';
import cmDeletePopin from '../../../../../molecule/cm-popin/test/fixtures/delete-popin';
import Default, {items} from './default';

const {props} = Default;
const LearningPrioritiesProps = BrandLearningPriorities.props;
const popinProps = {
  ...cmDeletePopin.props,
  content: 'Remove learning priority',
  descriptionText: `Do you want to remove this learning priority?`,
  secondButton: {
    label: 'Remove',
    type: 'dangerous',
    'aria-label': 'Delete this operation',
    icon: {
      position: 'left',
      type: 'delete'
    },
    handleOnClick: () => {}
  }
};

export default {
  props: defaultsDeep(props, {
    items,
    content: {
      ...LearningPrioritiesProps,
      type: 'learning-priorities'
    },
    popin: popinProps
  })
};
