import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import PropTypes from 'prop-types';
import {render, fireEvent, cleanup, within} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import Tag from '../../../atom/tag';
import AssignmentRow from '..';
import upToDate from './fixtures/default';
import syncing from './fixtures/syncing';
import allTags from './fixtures/ongoing-changes-unavailable-syncing';
import draft from './fixtures/draft';
import disabled from './fixtures/disabled-assignment';
import ongoingChanges from './fixtures/ongoing-changes';
import syncError from './fixtures/sync-error';
import unavailable from './fixtures/unavailable';
import upcoming from './fixtures/upcoming';

browserEnv();
test.afterEach(cleanup);

// The "…" menu broadcasts a CustomEvent that browser-env's window refuses (same stub as
// molecule/bullet-point-menu-button/test).
const originalDispatchEvent = window.dispatchEvent;
window.dispatchEvent = function (event) {
  if (event && event.type === 'bulletPointMenuToggle') return true;
  return originalDispatchEvent.call(this, event);
};

const options = {wrapper: wrappingComponent};
const tagTexts = row =>
  [...row.querySelectorAll('[data-name="title-tags"] span')].map(n => n.textContent);

test.serial(
  'renders the title, the audience and dates line, the contents line and the progress',
  t => {
    const {container} = render(<AssignmentRow {...upToDate.props} />, options);
    const view = within(container);
    t.truthy(view.getByText(upToDate.props.title));
    t.truthy(view.getByText(upToDate.props.subtitle));
    t.truthy(view.getByText(upToDate.props.details));
    t.truthy(view.getByText(upToDate.props.progress.label));
    const bar = container.querySelector(
      '[data-name="list-item-progress"] [data-name="progress-bar-wrapper"] > div'
    );
    t.is(bar.style.width, `${upToDate.props.progress.value}%`);
  }
);

test.serial('an up-to-date row with no information renders no tag and no sync text', t => {
  const {container} = render(<AssignmentRow {...upToDate.props} />, options);
  t.is(container.querySelector('[data-name="title-tags"]'), null);
  t.is(container.querySelectorAll('[data-name="tag"], .tag').length, 0);
  t.notRegex(container.textContent, /up to date/i);
});

test.serial('the information tags render beside the title, in a fixed order', t => {
  const shuffled = [...allTags.props.infoTags].reverse();
  const {container} = render(<AssignmentRow {...allTags.props} infoTags={shuffled} />, options);
  t.deepEqual(tagTexts(container), ['Ongoing changes', '2 modules unavailable', 'Syncing 3/8']);
  const tags = container.querySelector('[data-name="title-tags"]');
  t.is(
    tags.parentElement,
    container.querySelector('[title="Safety onboarding — managers Q4"]').parentElement
  );
});

test.serial('each information tag has its mapped tag type', t => {
  [
    ['ongoingChanges', 'progress'],
    ['unavailable', 'warning'],
    ['processing', 'progress'],
    ['syncError', 'failure']
  ].forEach(([key, type]) => {
    const {container, unmount} = render(
      <AssignmentRow {...upToDate.props} infoTags={[{key, label: `Label ${key}`}]} />,
      options
    );
    const expected = render(<Tag type={type} label={`Label ${key}`} />);
    t.is(
      container.querySelector('[data-name="title-tags"] > div').innerHTML,
      expected.container.innerHTML
    );
    expected.unmount();
    unmount();
  });
});

test.serial('the row refuses a lifecycle tag, the tab already says it', t => {
  ['draft', 'upcoming', 'active', 'ended', 'disabled', 'upToDate'].forEach(key => {
    const errors = [];
    const originalError = console.error;
    console.error = message => errors.push(message);
    PropTypes.resetWarningCache();
    PropTypes.checkPropTypes(
      AssignmentRow.propTypes,
      {...upToDate.props, infoTags: [{key, label: key}]},
      'prop',
      'AssignmentRow'
    );
    console.error = originalError;
    t.is(errors.length, 1, key);
    t.true(errors[0].includes(`\`infoTags[0].key\` of value \`${key}\``));
  });
});

test.serial('a syncing row shows its tag and its sync detail after the progress label', t => {
  const {container} = render(<AssignmentRow {...syncing.props} />, options);
  t.deepEqual(tagTexts(container), ['Syncing 3/8']);
  t.truthy(within(container).getByText(syncing.props.progress.label));
  t.true(syncing.props.progress.label.includes('Updating learners'));
});

test.serial('a click on the row calls onClick once', t => {
  let calls = 0;
  const {container} = render(
    <AssignmentRow {...upToDate.props} onClick={() => calls++} />,
    options
  );
  fireEvent.click(within(container).getByText(upToDate.props.subtitle));
  t.is(calls, 1);
});

test.serial('the Tracking button calls its onClick, and the row onClick is not called twice', t => {
  let row = 0;
  let tracking = 0;
  const props = {
    ...upToDate.props,
    onClick: () => row++,
    buttonLink: {...upToDate.props.buttonLink, onClick: () => tracking++}
  };
  const {container} = render(<AssignmentRow {...props} />, options);
  fireEvent.click(within(container).getByRole('button', {name: 'Tracking'}));
  t.is(tracking, 1);
  t.is(row, 0);
});

test.serial('a Tracking link is not a row click either', t => {
  let row = 0;
  const props = {
    ...upToDate.props,
    onClick: () => row++,
    buttonLink: {...upToDate.props.buttonLink, onClick: undefined, link: {href: '#tracking'}}
  };
  const {container} = render(<AssignmentRow {...props} />, options);
  fireEvent.click(within(container).getByText('Tracking'));
  t.is(row, 0);
});

const openMenu = container =>
  fireEvent.click(container.querySelector('[data-name^="bullet-point-menu-button"]'));

test.serial('a menu action calls its onClick and never the row onClick', t => {
  let row = 0;
  let edit = 0;
  const bulletPointMenuButton = {
    ...upToDate.props.bulletPointMenuButton,
    buttons: [{label: 'Edit', onClick: () => edit++}]
  };
  const {container} = render(
    <AssignmentRow
      {...upToDate.props}
      bulletPointMenuButton={bulletPointMenuButton}
      onClick={() => row++}
    />,
    options
  );
  openMenu(container);
  fireEvent.click(within(container).getByRole('button', {name: 'Edit'}));
  t.is(edit, 1);
  t.is(row, 0);
});

const menuLabels = container => {
  openMenu(container);
  return [...container.querySelectorAll('[data-name="menu-wrapper"] button')].map(
    b => b.textContent
  );
};

test.serial('a published row menu reads Tracking, Edit, Duplicate, Disable', t => {
  const {container} = render(<AssignmentRow {...upToDate.props} />, options);
  t.deepEqual(menuLabels(container), ['Tracking', 'Edit', 'Duplicate', 'Disable']);
});

test.serial('a disabled row menu reads Tracking, Edit, Duplicate, Enable', t => {
  const {container} = render(<AssignmentRow {...disabled.props} />, options);
  t.deepEqual(menuLabels(container), ['Tracking', 'Edit', 'Duplicate', 'Enable']);
});

test.serial('a draft row has an Edit button and a menu with Publish and a danger Delete', t => {
  const {container} = render(<AssignmentRow {...draft.props} />, options);
  t.truthy(within(container).getByRole('button', {name: 'Edit'}));
  t.deepEqual(menuLabels(container), ['Publish', 'Delete']);
  const {buttons} = draft.props.bulletPointMenuButton;
  t.deepEqual(
    buttons.map(({label, type}) => [label, type]),
    [
      ['Publish', 'default'],
      ['Delete', 'dangerous']
    ]
  );
});

test.serial('a draft row shows no tag and no progress, the tab says Draft', t => {
  const {container} = render(<AssignmentRow {...draft.props} />, options);
  t.is(container.querySelector('[data-name="title-tags"]'), null);
  t.is(container.querySelector('[data-name="list-item-progress"]'), null);
  t.notRegex(container.textContent, /draft/i);
});

test.serial('no row menu says Archive or Unarchive, and Delete is on the draft row only', t => {
  const fixtures = {
    upToDate,
    syncing,
    allTags,
    draft,
    disabled,
    ongoingChanges,
    syncError,
    unavailable,
    upcoming
  };
  Object.entries(fixtures).forEach(([name, fixture]) => {
    const labels = (fixture.props.bulletPointMenuButton?.buttons ?? []).map(b => b.label);
    t.false(
      labels.some(label => /archive/i.test(label)),
      `${name}: ${labels}`
    );
    t.is(labels.includes('Delete'), name === 'draft', `${name}: ${labels}`);
  });
});
