import {defaultsDeep} from 'lodash/fp';
import Animations from '../../../../../organism/brand-form/test/fixtures/animations';
import BrandTabs from '../../../../../molecule/brand-tabs/test/fixtures/cohort';
import BrandTable from '../../../../../organism/brand-table/test/fixtures/animations';
import Default from './default';

const {props} = Default;
const {groups} = Animations.props;
const {tabs} = BrandTabs.props;
const details = BrandTable.props;

export default {
  props: defaultsDeep(props, {
    tabs: [
      ...tabs,
      {
        title: 'Create Content',
        href: '#brand/samsung/catalog',
        selected: false,
        type: 'iconLink',
        key: 'content-creation'
      }
    ],
    content: {
      type: 'form',
      groups,
      onSubmit: () => {},
      submitValue: 'Send a massive battle',
      isModified: true,
      disabled: false,
      tooltip: {
        title: 'Send a massive battle ...',
        place: 'top'
      }
    },
    details: defaultsDeep(details, {type: 'list'})
  })
};
