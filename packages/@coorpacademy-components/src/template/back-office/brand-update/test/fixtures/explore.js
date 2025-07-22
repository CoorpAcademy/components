import {defaultsDeep, cloneDeep} from 'lodash/fp';
import ExploreFormGroup from '../../../../../molecule/brand-form-group/test/fixtures/explore';
import Default, {items} from './default';

const props = cloneDeep(Default.props);
const groups = [ExploreFormGroup.props]; // Explore form group with new content types

// Set Editorialization as selected and Explore tab as selected
props.items[0].selected = false;
props.items[2].selected = true;
props.items[2].tabs = [
  {
    title: 'Dashboard',
    href: '#brand/samsung/editorialization/dashboard',
    selected: false,
    type: 'simpleTab'
  },
  {
    title: 'Content',
    href: '#brand/samsung/editorialization/content',
    selected: false,
    type: 'simpleTab'
  },
  {
    title: 'Look & feel',
    href: '#brand/samsung/editorialization/look-and-feel',
    selected: false,
    type: 'simpleTab'
  },
  {
    title: 'Explore',
    href: '#brand/samsung/editorialization/explore',
    selected: true,
    type: 'simpleTab'
  }
];

export default {
  props: defaultsDeep(props, {
    content: {
      type: 'form',
      groups,
      onSubmit: () => {},
      submitValue: 'Save changes',
      resetValue: 'Cancel changes'
    }
  })
};
