import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {cleanup, fireEvent, render, within} from '@testing-library/react';
import PropTypes from 'prop-types';
import omit from 'lodash/fp/omit';
import {renderComponent, wrappingComponent} from '../../../test/helpers/render-component';
import HeaderWithActions from '..';
import AssignmentStatusTag from '../../../molecule/assignment-status-tag';
import customSkillEdition from '../../../template/back-office/brand-update/test/fixtures/custom-skill-edition';
import customSkillEditionReadonly from '../../../template/back-office/brand-update/test/fixtures/custom-skill-edition-readonly';
import customSkillEditionLoading from '../../../template/back-office/brand-update/test/fixtures/custom-skill-edition-loading';
import defaultFixture from './fixtures/default';
import singleAction from './fixtures/single-action';
import actionWithoutIcon from './fixtures/action-without-icon';

browserEnv();
test.afterEach.always(cleanup);

test.serial('legacy header fixtures retain their original markup', t => {
  const fixtures = {
    default: defaultFixture,
    singleAction,
    actionWithoutIcon,
    customSkillEdition: {props: customSkillEdition.props.header},
    customSkillEditionReadonly: {props: customSkillEditionReadonly.props.header},
    customSkillEditionLoading: {props: customSkillEditionLoading.props.header}
  };
  Object.entries(fixtures).forEach(([name, fixture]) => {
    t.snapshot(renderComponent(t, HeaderWithActions, fixture), name);
  });
});

const assignmentTags = [
  {status: 'active', label: 'Active'},
  {status: 'ongoingChanges', label: 'Ongoing changes'}
];

const legacyDraft = {
  ...singleAction.props,
  tag: {label: 'Draft', type: 'progress', size: 'S'}
};

const propErrors = props => {
  const originalError = console.error;
  const errors = [];
  PropTypes.resetWarningCache();
  console.error = (...args) => errors.push(args);
  try {
    PropTypes.checkPropTypes(HeaderWithActions.propTypes, props, 'prop', 'HeaderWithActions');
    return errors;
  } finally {
    console.error = originalError;
    PropTypes.resetWarningCache();
  }
};

const assertValidProps = (t, props) => t.deepEqual(propErrors(props), []);

test.serial('assignment tags override the legacy tag and retain caller order', t => {
  const {container, getByRole} = render(
    <HeaderWithActions {...legacyDraft} tags={assignmentTags} />,
    {wrapper: wrappingComponent}
  );
  const tags = container.querySelectorAll('[data-name^="content-tag-"]');
  t.is(tags.length, 2);
  t.is(tags[0].getAttribute('data-name'), 'content-tag-Active');
  t.is(tags[1].getAttribute('data-name'), 'content-tag-Ongoing changes');
  t.is(container.querySelector('[data-name="content-tag-Draft"]'), null);
  const group = container.querySelector('[data-name="header-with-actions-tags"]');
  t.is(getByRole('heading').parentElement, group.parentElement);
  assignmentTags.forEach((tag, index) => {
    const standalone = render(<AssignmentStatusTag {...tag} />, {wrapper: wrappingComponent});
    t.is(tags[index].outerHTML, standalone.container.firstChild.outerHTML);
  });
});

test.serial('assignment tags need no legacy tag', t => {
  const props = omit('tag', legacyDraft);
  const assignmentProps = {...props, tags: assignmentTags};
  assertValidProps(t, assignmentProps);
  const {container} = render(<HeaderWithActions {...assignmentProps} />, {
    wrapper: wrappingComponent
  });
  t.is(container.querySelectorAll('[data-name^="content-tag-"]').length, 2);
});

test.serial('an empty tags array suppresses the legacy tag', t => {
  const {container} = render(<HeaderWithActions {...legacyDraft} tags={[]} />, {
    wrapper: wrappingComponent
  });
  t.is(container.querySelectorAll('[data-name^="content-tag-"]').length, 0);
});

test.serial('changing tag modes removes stale tags and restores the legacy tag', t => {
  const {container, rerender} = render(<HeaderWithActions {...legacyDraft} />, {
    wrapper: wrappingComponent
  });
  const tagNames = () =>
    [...container.querySelectorAll('[data-name^="content-tag-"]')].map(node =>
      node.getAttribute('data-name')
    );
  t.deepEqual(tagNames(), ['content-tag-Draft']);
  rerender(<HeaderWithActions {...legacyDraft} tags={assignmentTags} />);
  t.deepEqual(tagNames(), ['content-tag-Active', 'content-tag-Ongoing changes']);
  rerender(<HeaderWithActions {...legacyDraft} tags={[{status: 'disabled', label: 'Disabled'}]} />);
  t.deepEqual(tagNames(), ['content-tag-Disabled']);
  rerender(<HeaderWithActions {...legacyDraft} tags={[]} />);
  t.deepEqual(tagNames(), []);
  rerender(<HeaderWithActions {...legacyDraft} />);
  t.deepEqual(tagNames(), ['content-tag-Draft']);
  t.is(container.querySelector('[data-name="header-with-actions-tags"]'), null);
});

test.serial('repeated assignment tags retain every entry when reordered and removed', t => {
  const active = {status: 'active', label: 'Shared label'};
  const ongoing = {status: 'ongoingChanges', label: 'Shared label'};
  const {container, rerender} = render(
    <HeaderWithActions {...legacyDraft} tags={[active, active, ongoing]} />,
    {wrapper: wrappingComponent}
  );
  const renderedTags = () => [...container.querySelectorAll('[data-name^="content-tag-"]')];
  t.is(renderedTags().length, 3);
  t.deepEqual(
    renderedTags().map(node => node.textContent),
    ['Shared label', 'Shared label', 'Shared label']
  );
  t.is(renderedTags()[0].outerHTML, renderedTags()[1].outerHTML);
  t.not(renderedTags()[0].outerHTML, renderedTags()[2].outerHTML);
  const activeMarkup = renderedTags()[0].outerHTML;
  const ongoingMarkup = renderedTags()[2].outerHTML;
  rerender(<HeaderWithActions {...legacyDraft} tags={[ongoing, active]} />);
  t.deepEqual(
    renderedTags().map(node => node.outerHTML),
    [ongoingMarkup, activeMarkup]
  );
  rerender(<HeaderWithActions {...legacyDraft} tags={[active]} />);
  t.deepEqual(
    renderedTags().map(node => node.outerHTML),
    [activeMarkup]
  );
});

test.serial('unknown and omitted assignment statuses use the molecule fallback', t => {
  const tags = [{status: 'futureStatus', label: 'Future'}, {label: 'Unspecified'}];
  const {container} = render(<HeaderWithActions {...legacyDraft} tags={tags} />, {
    wrapper: wrappingComponent
  });
  const actualTags = container.querySelectorAll('[data-name^="content-tag-"]');
  tags.forEach((tag, index) => {
    const standalone = render(<AssignmentStatusTag {...tag} />, {wrapper: wrappingComponent});
    t.is(actualTags[index].outerHTML, standalone.container.firstChild.outerHTML);
  });
});

const trail = 'Created by jdoe on 02 Nov 2026 · Last edited by asmith 3 days ago';
const breadcrumbs = [{title: 'Assignments', href: '/assignments'}, {title: 'Safety onboarding'}];

test.serial('subtitle renders literal text below the title', t => {
  const {container, getByRole, rerender} = render(
    <HeaderWithActions {...legacyDraft} tags={assignmentTags} subtitle={trail} />,
    {wrapper: wrappingComponent}
  );
  const subtitle = container.querySelector('[data-name="header-with-actions-subtitle"]');
  t.truthy(subtitle);
  t.is(subtitle.textContent, trail);
  t.true(Boolean(getByRole('heading').compareDocumentPosition(subtitle) & 4));
  const literal = '<strong>Created by jdoe</strong>';
  rerender(<HeaderWithActions {...legacyDraft} subtitle={literal} />);
  const literalSubtitle = container.querySelector('[data-name="header-with-actions-subtitle"]');
  t.is(literalSubtitle.textContent, literal);
  t.is(literalSubtitle.querySelector('strong'), null);
});

test.serial('breadcrumbs precede the title and preserve titles and hrefs', t => {
  const {container, getByRole} = render(
    <HeaderWithActions {...legacyDraft} tags={assignmentTags} breadcrumbs={breadcrumbs} />,
    {wrapper: wrappingComponent}
  );
  const breadcrumbBlock = container.querySelector('[data-name="header-with-actions-breadcrumbs"]');
  t.truthy(breadcrumbBlock);
  const breadcrumbContent = within(breadcrumbBlock);
  t.is(
    breadcrumbContent.getByRole('link', {name: 'Assignments'}).getAttribute('href'),
    '/assignments'
  );
  t.truthy(breadcrumbContent.getByText('Safety onboarding'));
  t.is(breadcrumbContent.queryByRole('link', {name: 'Safety onboarding'}), null);
  t.true(Boolean(breadcrumbBlock.compareDocumentPosition(getByRole('heading')) & 4));
});

test.serial('metadata works with a legacy tag without changing its layout', t => {
  const {container, getByRole, getByText} = render(
    <HeaderWithActions {...legacyDraft} subtitle={trail} breadcrumbs={breadcrumbs} />,
    {wrapper: wrappingComponent}
  );
  t.truthy(getByRole('link', {name: 'Assignments'}));
  t.truthy(getByText(trail));
  const tag = container.querySelector('[data-name="content-tag-Draft"]');
  t.truthy(tag);
  t.true(Boolean(tag.compareDocumentPosition(getByRole('heading')) & 4));
  t.is(container.querySelector('[data-name="header-with-actions-tags"]'), null);
});

test.serial('absent or empty metadata creates no metadata blocks', t => {
  const {container, rerender} = render(<HeaderWithActions {...legacyDraft} />, {
    wrapper: wrappingComponent
  });
  t.is(container.querySelector('[data-name="header-with-actions-subtitle"]'), null);
  t.is(container.querySelector('[data-name="header-with-actions-breadcrumbs"]'), null);
  rerender(<HeaderWithActions {...legacyDraft} subtitle="   " breadcrumbs={[]} />);
  t.is(container.querySelector('[data-name="header-with-actions-subtitle"]'), null);
  t.is(container.querySelector('[data-name="header-with-actions-breadcrumbs"]'), null);
});

test.serial('metadata updates preserve literal text and remove stale links and trails', t => {
  const {container, rerender} = render(<HeaderWithActions {...legacyDraft} />, {
    wrapper: wrappingComponent
  });
  const legacyMarkup = container.innerHTML;
  rerender(<HeaderWithActions {...legacyDraft} subtitle={trail} breadcrumbs={breadcrumbs} />);
  t.truthy(within(container).getByRole('link', {name: 'Assignments'}));
  const literal = '<em>Updated assignment</em> & review';
  const updatedTrail = '  Last edited by asmith just now  ';
  rerender(
    <HeaderWithActions
      {...legacyDraft}
      subtitle={updatedTrail}
      breadcrumbs={[
        {title: literal, href: '/assignments?state=active&view=tracking#title'},
        {title: 'Updated assignment'}
      ]}
    />
  );
  const content = within(container);
  t.is(content.queryByRole('link', {name: 'Assignments'}), null);
  t.is(content.queryByText(trail), null);
  const link = content.getByRole('link', {name: literal});
  t.is(link.getAttribute('href'), '/assignments?state=active&view=tracking#title');
  t.is(link.querySelector('em'), null);
  t.is(
    container.querySelector('[data-name="header-with-actions-subtitle"]').textContent,
    updatedTrail
  );
  rerender(<HeaderWithActions {...legacyDraft} subtitle="" breadcrumbs={[]} />);
  t.is(container.innerHTML, legacyMarkup);
  rerender(<HeaderWithActions {...legacyDraft} subtitle={'\t\n '} />);
  t.is(container.innerHTML, legacyMarkup);
});

test.serial('isFetching renders no header', t => {
  const {container} = render(
    <HeaderWithActions
      {...legacyDraft}
      tags={assignmentTags}
      subtitle={trail}
      breadcrumbs={breadcrumbs}
      isFetching
    />,
    {wrapper: wrappingComponent}
  );
  t.is(container.innerHTML, '');
});

test.serial('legacy header accepts omitted saveStatus without warnings', t => {
  const props = omit('saveStatus', legacyDraft);
  assertValidProps(t, props);
  const {container, queryByText, rerender} = render(<HeaderWithActions {...props} />, {
    wrapper: wrappingComponent
  });
  t.is(queryByText('Saved'), null);
  t.is(queryByText('Unsaved changes'), null);
  t.truthy(container.querySelector('[data-name="content-tag-Draft"]'));
  const withoutTag = omit('tag', props);
  const assignmentProps = {...withoutTag, tags: assignmentTags};
  assertValidProps(t, assignmentProps);
  rerender(<HeaderWithActions {...assignmentProps} />);
  t.is(container.querySelectorAll('[data-name^="content-tag-"]').length, 2);
  t.is(queryByText('Saved'), null);
  t.is(queryByText('Unsaved changes'), null);
  assertValidProps(t, withoutTag);
  rerender(<HeaderWithActions {...withoutTag} />);
  t.is(container.querySelectorAll('[data-name^="content-tag-"]').length, 0);
});

test.serial('provided saveStatus retains its display rules', t => {
  const {getByText, queryByText, rerender} = render(
    <HeaderWithActions {...legacyDraft} saveStatus={{display: true, label: 'Saved'}} />,
    {wrapper: wrappingComponent}
  );
  t.truthy(getByText('Saved'));
  rerender(<HeaderWithActions {...legacyDraft} saveStatus={{display: false, label: 'Saved'}} />);
  t.is(queryByText('Saved'), null);
  rerender(<HeaderWithActions {...legacyDraft} saveStatus={{display: true}} />);
  t.is(queryByText('Saved'), null);
  t.is(queryByText('Unsaved changes'), null);
  rerender(
    <HeaderWithActions
      {...legacyDraft}
      tags={assignmentTags}
      saveStatus={{display: true, label: 'Saved'}}
    />
  );
  t.truthy(getByText('Saved'));
});

[
  ['tags must be an array', {tags: {}}, /`tags`/],
  ['assignment labels remain required', {tags: [{status: 'active'}]}, /tags\[0\]\.label/],
  ['assignment labels must be strings', {tags: [{label: 123}]}, /tags\[0\]\.label/],
  [
    'assignment statuses must be strings',
    {tags: [{label: 'Active', status: 123}]},
    /tags\[0\]\.status/
  ],
  ['subtitle must be a string', {subtitle: 123}, /`subtitle`/],
  ['breadcrumbs must be an array', {breadcrumbs: {}}, /`breadcrumbs`/],
  [
    'breadcrumb titles remain required',
    {breadcrumbs: [{href: '/assignments'}]},
    /breadcrumbs\[0\]\.title/
  ],
  ['breadcrumb titles must be strings', {breadcrumbs: [{title: 123}]}, /breadcrumbs\[0\]\.title/],
  [
    'breadcrumb hrefs must be strings',
    {breadcrumbs: [{title: 'Assignments', href: 123}]},
    /breadcrumbs\[0\]\.href/
  ],
  ['legacy labels retain their enum', {tag: {...legacyDraft.tag, label: 'Active'}}, /tag\.label/],
  ['legacy types retain their enum', {tag: {...legacyDraft.tag, type: 'unknown'}}, /tag\.type/],
  ['legacy size remains required', {tag: omit('size', legacyDraft.tag)}, /tag\.size/],
  ['save status display remains required', {saveStatus: {label: 'Saved'}}, /saveStatus\.display/],
  ['save status display must be boolean', {saveStatus: {display: 'true'}}, /saveStatus\.display/],
  [
    'save status labels retain their enum',
    {saveStatus: {display: true, label: 'Saving'}},
    /saveStatus\.label/
  ]
].forEach(([name, invalidProps, expectedField]) => {
  test.serial(name, t => {
    const errors = propErrors({...legacyDraft, ...invalidProps});
    t.is(errors.length, 1);
    t.regex(errors[0].join(' '), expectedField);
  });
});

test.serial('assignment metadata preserves enabled, disabled and close controls', t => {
  const clicks = [];
  const props = {
    ...omit(['tag', 'saveStatus'], legacyDraft),
    tags: assignmentTags,
    breadcrumbs,
    subtitle: trail,
    closeButton: {'aria-label': 'Close assignment', onClick: () => clicks.push('close')},
    actionButtons: [
      {type: 'secondary', label: 'Save changes', onClick: () => clicks.push('save')},
      {
        type: 'primary',
        label: 'Publish changes',
        disabled: true,
        onClick: () => clicks.push('publish')
      }
    ]
  };
  assertValidProps(t, props);
  const {container, rerender} = render(<HeaderWithActions {...props} />, {
    wrapper: wrappingComponent
  });
  const content = within(container);
  t.true(content.getByRole('button', {name: 'Publish changes'}).disabled);
  fireEvent.click(content.getByRole('button', {name: 'Publish changes'}));
  t.deepEqual(clicks, []);
  fireEvent.click(content.getByRole('button', {name: 'Save changes'}));
  fireEvent.click(content.getByRole('button', {name: 'Close assignment'}));
  t.deepEqual(clicks, ['save', 'close']);
  rerender(
    <HeaderWithActions
      {...props}
      actionButtons={props.actionButtons.map(action => ({...action, disabled: false}))}
    />
  );
  fireEvent.click(content.getByRole('button', {name: 'Publish changes'}));
  t.deepEqual(clicks, ['save', 'close', 'publish']);
  rerender(<HeaderWithActions {...props} actionButtons={[]} />);
  t.is(content.getAllByRole('button').length, 1);
  t.truthy(content.getByRole('button', {name: 'Close assignment'}));
  t.truthy(content.getByRole('link', {name: 'Assignments'}));
});
