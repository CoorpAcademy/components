import test from 'ava';
import {createRequire} from 'module';
import browserEnv from 'browser-env';
import React from 'react';
import glob from 'glob';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {cleanup, render, within} from '@testing-library/react';
import BrandUpdate from '..';
import BrandForm from '../../../../organism/brand-form';
import BrandTable from '../../../../organism/brand-table';
import BrandUpload from '../../../../organism/brand-upload';
import BrandAnalytics from '../../../../organism/brand-analytics';
import ListItems from '../../../../organism/list-items';
import BrandDashboard from '../../../../organism/brand-dashboard';
import WizardContents from '../../../../organism/wizard-contents';
import BulkInfos from '../../../../molecule/bulk-infos';
import ExpandibleActionableTable from '../../../../molecule/expandible-actionable-table';
import BrandLearningPriorities from '../../../../organism/brand-learning-priorities';
import SkillEdition from '../../../../organism/skill-edition';
import AssignmentEdition from '../../../../organism/assignment-edition';
import Loader from '../../../../atom/loader';
import ProgressBar from '../../../../molecule/progress-bar';
import Header from '../../../../organism/setup-header';
import HeaderWithActions from '../../../../organism/header-with-actions';
import SkillsChartSideInformationPanel from '../../../../molecule/skills-chart-side-information-panel';
import {wrappingComponent} from '../../../../test/helpers/render-component';
import style from '../style.css';
import Tracking from './fixtures/assignment-tracking';

browserEnv();
configure({adapter: new Adapter()});
test.afterEach.always(cleanup);

test.serial('summary renders bar then five tiles before tracking tabs and table', t => {
  const {container, getByRole} = render(
    <BrandUpdate {...Tracking.props} title={{title: 'Assignment progress', type: 'page'}} />,
    {wrapper: wrappingComponent}
  );
  const summary = container.querySelector('[data-name="brand-update-summary"]');
  t.truthy(summary);
  const title = container.querySelector(`.${style.title}`);
  t.true(title.previousElementSibling.textContent.includes('Workplace safety essentials'));
  t.is(title.nextElementSibling, summary);
  const tabs = container.querySelector(`.${style.tabs}`);
  t.is(summary.nextElementSibling, tabs);
  t.true(tabs.nextElementSibling.contains(getByRole('table')));
  const bar = getByRole('img', {name: Tracking.props.summary.bar.ariaLabel});
  t.true(summary.firstElementChild.contains(bar));
  t.is(bar.children.length, 3);
  t.deepEqual(
    [...bar.children].map(segment => segment.style.width),
    ['50%', '33.33333333333333%', '16.666666666666664%']
  );
  t.deepEqual(
    [...summary.querySelectorAll('[data-name="progress-bar-legend-item"]')].map(
      li => li.textContent
    ),
    ['Completed', 'In progress', 'Not started']
  );
  t.truthy(within(summary).getByText('24 active learners'));
  t.truthy(within(summary).getByText('50% completed · 2 removed, outside the bar'));
  const panel = summary.lastElementChild;
  t.is(panel.getAttribute('data-name'), 'skill-chart-side-panel');
  t.is(panel.children.length, 5);
  const expected = [
    ['Completed', '12', 'including 2 late'],
    ['In progress', '8'],
    ['Not started', '4'],
    ['Due soon', '0', 'due within 7 days'],
    ['Overdue', '12', 'not completed by the due date']
  ];
  expected.forEach((texts, index) => {
    texts.forEach(text => t.truthy(within(panel.children[index]).getByText(text)));
  });
});

test.serial('zero active learners keep the summary and removed count visible', t => {
  const summary = {
    bar: {
      ...Tracking.props.summary.bar,
      title: '0 active learners',
      subtitle: '2 removed, outside the bar',
      ariaLabel: '0 active learners: 0 completed, 0 in progress, 0 not started',
      segments: Tracking.props.summary.bar.segments.map(segment => ({...segment, value: 0}))
    },
    tiles: {
      ...Tracking.props.summary.tiles,
      sidePanelItems: Tracking.props.summary.tiles.sidePanelItems.map(item => ({
        ...item,
        value: '0',
        ...(item.title === 'Completed' ? {legend: 'including 0 late'} : {})
      }))
    }
  };
  const items = Tracking.props.items.map(item => ({
    ...item,
    tabs: item.tabs?.map(tab => ({
      ...tab,
      subTabs: tab.subTabs?.map(subTab => ({
        ...subTab,
        status: subTab.title === 'Learners' ? '0' : '2'
      }))
    }))
  }));
  const {container, getByText, queryByRole} = render(
    <BrandUpdate
      {...Tracking.props}
      items={items}
      summary={summary}
      content={{...Tracking.props.content, rows: [], emptyValue: 'No active learners'}}
    />,
    {wrapper: wrappingComponent}
  );
  const summaryView = within(container.querySelector('[data-name="brand-update-summary"]'));
  t.is(summaryView.getByRole('img', {name: summary.bar.ariaLabel}).children.length, 0);
  t.deepEqual(
    summaryView.getAllByRole('listitem').map(item => item.textContent),
    ['Completed', 'In progress', 'Not started']
  );
  t.truthy(summaryView.getByText('0 active learners'));
  t.truthy(summaryView.getByText('2 removed, outside the bar'));
  const panel = container.querySelector('[data-name="skill-chart-side-panel"]');
  t.is(panel.children.length, 5);
  [...panel.children].forEach(tile => t.truthy(within(tile).getByText('0')));
  t.truthy(summaryView.getByText('including 0 late'));
  t.truthy(summaryView.getByText('due within 7 days'));
  t.truthy(summaryView.getByText('not completed by the due date'));
  t.is(container.querySelector('[data-name="brand_tab_learners"]').textContent, 'Learners0');
  t.is(container.querySelector('[data-name="brand_tab_removed"]').textContent, 'Removed2');
  t.truthy(getByText('No active learners'));
  t.is(queryByRole('table'), null);
});

test.serial(
  'summary forwards child props and uses supplied totals independently of loaded rows',
  t => {
    const shallowView = shallow(<BrandUpdate {...Tracking.props} />);
    t.deepEqual(shallowView.find(ProgressBar).props(), Tracking.props.summary.bar);
    t.deepEqual(
      shallowView.find(SkillsChartSideInformationPanel).props(),
      Tracking.props.summary.tiles
    );
    const {container, rerender} = render(<BrandUpdate {...Tracking.props} />, {
      wrapper: wrappingComponent
    });
    const summary = container.querySelector('[data-name="brand-update-summary"]').textContent;
    rerender(
      <BrandUpdate
        {...Tracking.props}
        content={{...Tracking.props.content, rows: Tracking.props.content.rows.slice(0, 1)}}
      />
    );
    t.is(container.querySelector('[data-name="brand-update-summary"]').textContent, summary);
    t.is(container.querySelector('[data-name="brand_tab_learners"]').textContent, 'Learners24');
    t.is(container.querySelector('[data-name="brand_tab_removed"]').textContent, 'Removed2');
    t.is(container.querySelectorAll('tbody tr').length, 1);
  }
);

test.serial('summary updates independently when the loaded learners stay unchanged', t => {
  const {container, rerender} = render(<BrandUpdate {...Tracking.props} />, {
    wrapper: wrappingComponent
  });
  const summary = {
    bar: {
      ...Tracking.props.summary.bar,
      title: '30 active learners',
      subtitle: '100% completed · 2 removed, outside the bar',
      ariaLabel: '30 active learners: 30 completed, 0 in progress, 0 not started',
      segments: Tracking.props.summary.bar.segments.map((segment, index) => ({
        ...segment,
        value: index === 0 ? 30 : 0
      }))
    },
    tiles: {
      ...Tracking.props.summary.tiles,
      sidePanelItems: Tracking.props.summary.tiles.sidePanelItems.map((item, index) => ({
        ...item,
        value: index === 0 ? '30' : '0',
        ...(item.title === 'Completed' ? {legend: 'including 3 late'} : {})
      }))
    }
  };
  rerender(<BrandUpdate {...Tracking.props} summary={summary} />);
  const summaryView = within(container.querySelector('[data-name="brand-update-summary"]'));
  t.is(summaryView.queryByRole('img', {name: Tracking.props.summary.bar.ariaLabel}), null);
  const bar = summaryView.getByRole('img', {name: summary.bar.ariaLabel});
  t.is(bar.children.length, 1);
  t.is(bar.firstElementChild.style.width, '100%');
  t.truthy(summaryView.getByText('30 active learners'));
  t.truthy(summaryView.getByText('100% completed · 2 removed, outside the bar'));
  t.is(summaryView.queryByText('24 active learners'), null);
  t.is(summaryView.queryByText('including 2 late'), null);
  t.truthy(summaryView.getByText('including 3 late'));
  const tiles = container.querySelector('[data-name="skill-chart-side-panel"]').children;
  t.is(tiles.length, 5);
  t.truthy(within(tiles[0]).getByText('30'));
  [...tiles].slice(1).forEach(tile => t.truthy(within(tile).getByText('0')));
  t.is(container.querySelectorAll('tbody tr').length, 4);
});

test.serial('summary remains visible while content is loading or the loaded page is empty', t => {
  const {container, rerender, getByText, queryByRole} = render(
    <BrandUpdate {...Tracking.props} />,
    {wrapper: wrappingComponent}
  );
  const expectedSummary = container.querySelector('[data-name="brand-update-summary"]').textContent;
  const states = [
    {content: undefined, loading: true},
    {content: {...Tracking.props.content, rows: [], isPending: true}, loading: true},
    {
      content: {...Tracking.props.content, rows: [], emptyValue: 'No learners match the search'},
      loading: false
    },
    {content: Tracking.props.content, loading: false}
  ];
  states.forEach(({content, loading}) => {
    rerender(<BrandUpdate {...Tracking.props} content={content} />);
    const summary = container.querySelector('[data-name="brand-update-summary"]');
    t.is(summary.textContent, expectedSummary);
    t.truthy(within(summary).getByRole('img', {name: Tracking.props.summary.bar.ariaLabel}));
    t.is(container.querySelectorAll('[data-name="loader"]').length, loading ? 1 : 0);
    t.is(container.querySelectorAll('tbody tr').length, content === Tracking.props.content ? 4 : 0);
    t.is(container.querySelector('[data-name="brand_tab_learners"]').textContent, 'Learners24');
    t.is(container.querySelector('[data-name="brand_tab_removed"]').textContent, 'Removed2');
    if (content?.emptyValue === 'No learners match the search') {
      t.truthy(getByText('No learners match the search'));
      t.is(queryByRole('table'), null);
    }
  });
});

test.serial('summary can be omitted, cleared and restored', t => {
  const {container, getByRole, rerender} = render(<BrandUpdate {...Tracking.props} />, {
    wrapper: wrappingComponent
  });
  [null, Tracking.props.summary, undefined].forEach(summary => {
    rerender(<BrandUpdate {...Tracking.props} summary={summary} />);
    t.is(container.querySelectorAll('[data-name="brand-update-summary"]').length, summary ? 1 : 0);
    t.is(
      container.querySelectorAll('[data-name="progress-bar-segmented-bar"]').length,
      summary ? 1 : 0
    );
    t.is(
      container.querySelectorAll('[data-name="skill-chart-side-panel"]').length,
      summary ? 1 : 0
    );
    t.truthy(getByRole('table'));
    t.truthy(getByRole('link', {name: 'Learners'}));
    t.truthy(container.querySelector(`.${style.navigation}`));
  });
  const items = Tracking.props.items.map(item => ({
    ...item,
    tabs: item.tabs?.map(tab => ({
      ...tab,
      subTabs: tab.subTabs?.map(subTab => ({...subTab, selected: false}))
    }))
  }));
  rerender(<BrandUpdate {...Tracking.props} items={items} />);
  t.truthy(container.querySelector('[data-name="brand-update-summary"]'));
  t.is(container.querySelector(`.${style.tabs}`), null);
  t.truthy(getByRole('table'));
});

const contentBranches = {
  form: BrandForm,
  list: BrandTable,
  upload: BrandUpload,
  'analytics-dashboards': BrandAnalytics,
  'list-content': ListItems,
  'expandible-actionable-table': ListItems,
  home: BrandDashboard,
  wizard: WizardContents,
  'expandible-table': WizardContents,
  'bulk-empty-dashboard': BulkInfos,
  'table-pending': ExpandibleActionableTable,
  'learning-priorities': BrandLearningPriorities,
  'skill-edition': SkillEdition,
  'assignment-edition': AssignmentEdition
};

const loadFixture = createRequire(__filename);

test.serial('every legacy fixture omits the summary block', t => {
  const fixtures = glob
    .sync('fixtures/*.js', {cwd: __dirname, absolute: true})
    .filter(path => !path.endsWith('/assignment-tracking.js'));
  t.true(fixtures.length > 0);
  fixtures.forEach(path => {
    const {props} = loadFixture(path).default;
    const view = shallow(<BrandUpdate {...props} />);
    t.falsy(props.summary, path);
    t.is(view.find('[data-name="brand-update-summary"]').length, 0, path);
    t.is(view.find(ProgressBar).length, 0, path);
    t.is(view.find(SkillsChartSideInformationPanel).length, 0, path);
    t.is(view.find(`.${style.summary}`).length, 0, path);
    const branch = props.content ? contentBranches[props.content.type] : Loader;
    t.truthy(branch, path);
    t.true(view.find(branch).length > 0, path);
    if (props.header) {
      t.is(
        view.find(props.header.type === 'header-with-actions' ? HeaderWithActions : Header).length,
        1,
        path
      );
    }
    const selectedItem = props.items.find(item => item.selected);
    const selectedTab = selectedItem?.tabs?.find(tab => tab.selected);
    const hasTabs = selectedTab?.subTabs?.some(tab => tab.selected);
    t.is(view.find('BrandTabs').length, hasTabs ? 1 : 0, path);
    t.is(view.find(`.${style.navigation}`).length, 1, path);
  });
});
