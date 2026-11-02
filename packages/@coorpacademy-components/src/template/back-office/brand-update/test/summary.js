import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {cleanup, render, within} from '@testing-library/react';
import BrandUpdate from '..';
import ProgressBar from '../../../../molecule/progress-bar';
import SkillsChartSideInformationPanel from '../../../../molecule/skills-chart-side-information-panel';
import {wrappingComponent} from '../../../../test/helpers/render-component';
import style from '../style.css';
import Tracking from './fixtures/assignment-tracking';

browserEnv();
configure({adapter: new Adapter()});
test.afterEach.always(cleanup);

test.serial(
  'the summary sits between the title and the tabs: the bar, then the counter tiles',
  t => {
    const {container} = render(
      <BrandUpdate {...Tracking.props} title={{title: 'Assignment progress', type: 'page'}} />,
      {wrapper: wrappingComponent}
    );
    const summary = container.querySelector('[data-name="brand-update-summary"]');
    t.truthy(summary);
    t.is(container.querySelector(`.${style.title}`).nextElementSibling, summary);
    t.is(summary.nextElementSibling, container.querySelector(`.${style.tabs}`));
    t.truthy(within(summary.firstElementChild).getByText(Tracking.props.summary.bar.title));
    t.is(summary.lastElementChild.getAttribute('data-name'), 'skill-chart-side-panel');
    t.is(
      summary.lastElementChild.children.length,
      Tracking.props.summary.tiles.sidePanelItems.length
    );

    const view = shallow(<BrandUpdate {...Tracking.props} />);
    t.deepEqual(view.find(ProgressBar).props(), Tracking.props.summary.bar);
    t.deepEqual(view.find(SkillsChartSideInformationPanel).props(), Tracking.props.summary.tiles);
  }
);

test.serial('without a summary prop the page renders exactly as before', t => {
  const view = shallow(<BrandUpdate {...Tracking.props} summary={undefined} />);
  t.is(view.find('[data-name="brand-update-summary"]').length, 0);
  t.is(view.find(ProgressBar).length, 0);
  t.is(view.find(SkillsChartSideInformationPanel).length, 0);
});
