import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/fp/omit';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {cleanup, fireEvent, render} from '@testing-library/react';
import SkillEdition from '../../../../organism/skill-edition';
import BulkInfos from '../../../../molecule/bulk-infos';
import ExpandibleActionableTable from '../../../../molecule/expandible-actionable-table';
import Loader from '../../../../atom/loader';
import BrandLearningPriorities from '../../../../organism/brand-learning-priorities';
import ListItems from '../../../../organism/list-items';
import WizardContents from '../../../../organism/wizard-contents';
import BrandDashboard from '../../../../organism/brand-dashboard';
import BrandAnalytics from '../../../../organism/brand-analytics';
import BrandUpload from '../../../../organism/brand-upload';
import BrandTable from '../../../../organism/brand-table';
import BrandForm from '../../../../organism/brand-form';
import {wrappingComponent} from '../../../../test/helpers/render-component';
import BrandUpdate from '..';
import {makeProps} from '../../../../organism/assignment-edition/test/helpers/props';
import shell from './fixtures/custom-skill-edition';

import legacy0 from './fixtures/default';
import legacy1 from './fixtures/manageusers-list';
import legacy2 from './fixtures/uploadusers';
import legacy3 from './fixtures/dashboards-analytics';
import legacy4 from './fixtures/home';
import legacy5 from './fixtures/list-items-published';
import legacy6 from './fixtures/bulk-dashboard-imports-saved';
import legacy7 from './fixtures/wizard-form-create-playlist';
import legacy8 from './fixtures/bulk-inspect';
import legacy9 from './fixtures/bulk';
import legacy10 from './fixtures/bulk-dashboard-imports-pending';
import legacy11 from './fixtures/learning-priorities';
import legacy12 from './fixtures/loader';
import legacy14 from './fixtures/custom-skill-edition-loading';
import legacy15 from './fixtures/custom-skill-edition-readonly';
import legacy16 from './fixtures/custom-skill-edition-draft-popin';
import legacy17 from './fixtures/custom-skill-edition-deleted-popin';
import legacy18 from './fixtures/custom-skill-edition-icon-picker-modal';
import legacy19 from './fixtures/custom-skill-edition-translation-modal';
import legacy20 from './fixtures/custom-skill-edition-content-modal';

browserEnv();
configure({adapter: new Adapter()});
test.afterEach.always(cleanup);

test.serial('assignment-edition dispatch renders the organism and forwards callbacks', t => {
  const props = makeProps();
  const calls = [];
  props.contents.button.onClick = () => calls.push('add');
  const value = {
    ...shell.props,
    content: {...props, type: 'assignment-edition'}
  };
  const errors = [];
  const original = console.error;
  console.error = message => errors.push(message);
  try {
    PropTypes.checkPropTypes(BrandUpdate.propTypes, value, 'prop', 'BrandUpdate');
    const view = render(<BrandUpdate {...value} />, {
      wrapper: wrappingComponent
    });
    t.is(view.container.querySelectorAll('[id^="assignment-"]').length, 4);
    fireEvent.click(view.getByRole('button', {name: 'Add content'}));
    t.deepEqual(calls, ['add']);
    t.deepEqual(errors, []);
  } finally {
    console.error = original;
  }
});

const legacyFixtures = [
  {fixture: legacy0, name: 'default', component: BrandForm},
  {fixture: legacy1, name: 'manageusers-list', component: BrandTable},
  {fixture: legacy2, name: 'uploadusers', component: BrandUpload},
  {fixture: legacy3, name: 'dashboards-analytics', component: BrandAnalytics},
  {fixture: legacy4, name: 'home', component: BrandDashboard},
  {fixture: legacy5, name: 'list-items-published', component: ListItems},
  {
    fixture: legacy6,
    name: 'bulk-dashboard-imports-saved',
    component: ListItems
  },
  {
    fixture: legacy7,
    name: 'wizard-form-create-playlist',
    component: WizardContents
  },
  {fixture: legacy8, name: 'bulk-inspect', component: WizardContents},
  {fixture: legacy9, name: 'bulk', component: BulkInfos},
  {
    fixture: legacy10,
    name: 'bulk-dashboard-imports-pending',
    component: ExpandibleActionableTable
  },
  {
    fixture: legacy11,
    name: 'learning-priorities',
    component: BrandLearningPriorities
  },
  {fixture: legacy12, name: 'loader', component: Loader},
  {fixture: shell, name: 'custom-skill-edition', component: SkillEdition},
  {
    fixture: legacy14,
    name: 'custom-skill-edition-loading',
    component: SkillEdition
  },
  {
    fixture: legacy15,
    name: 'custom-skill-edition-readonly',
    component: SkillEdition
  },
  {
    fixture: legacy16,
    name: 'custom-skill-edition-draft-popin',
    component: SkillEdition
  },
  {
    fixture: legacy17,
    name: 'custom-skill-edition-deleted-popin',
    component: SkillEdition
  },
  {
    fixture: legacy18,
    name: 'custom-skill-edition-icon-picker-modal',
    component: SkillEdition
  },
  {
    fixture: legacy19,
    name: 'custom-skill-edition-translation-modal',
    component: SkillEdition
  },
  {
    fixture: legacy20,
    name: 'custom-skill-edition-content-modal',
    component: SkillEdition
  }
];
legacyFixtures.forEach(({fixture, name, component}) => {
  test.serial(`legacy BrandUpdate content retains its expected branch: ${name}`, t => {
    const view = shallow(<BrandUpdate {...fixture.props} />);
    t.is(view.find(component).length, 1);
    t.is(view.find('AssignmentEdition').length, 0);
    if (fixture.props.content)
      t.deepEqual(view.find(component).props(), {
        ...(name === 'default' ? {tooltip: {place: 'top', title: ''}} : {}),
        ...omit('key', fixture.props.content)
      });
    if (name === 'custom-skill-edition-content-modal')
      t.is(view.find('ContentSkillModal').length, 1);
  });
});
