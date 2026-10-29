import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {cleanup, fireEvent} from '@testing-library/react';
import CMPopin from '..';
import {renderWithContext} from '../../../util/render-with-context';
import cookie from './fixtures/cookie';
import items from './fixtures/popin-with-cards';
import list from './fixtures/list';
import active from './fixtures/publish-changes-active';
import upcoming from './fixtures/publish-changes-upcoming';
import failed from './fixtures/publish-changes-preview-failed';

browserEnv();
test.afterEach.always(cleanup);

const removalNote =
  'Removed learners keep their progress and stay in tracking, under “Removed” (removed by an edit). They no longer see this assignment.';
const sections = [
  {
    title: 'Modules:',
    counterText: '2 added · 1 removed',
    items: [
      {type: 'text', text: 'Introduction to management', diff: 'removed', diffLabel: 'Removed'},
      {type: 'text', text: 'Clear communication', diff: 'added', diffLabel: 'Added'},
      {type: 'text', text: 'Giving feedback', diff: 'added', diffLabel: 'Added'}
    ]
  },
  {
    title: 'Learners:',
    counterText: '12 added · 3 removed · 640 unchanged',
    items: [{type: 'text', text: removalNote}]
  }
];
const props = {
  content: 'Publish changes?',
  descriptionText: 'This assignment is active: learners see the change at the next sync.',
  firstButton: {label: 'Cancel', type: 'secondary', handleOnclick: () => {}},
  secondButton: {label: 'Publish changes', type: 'primary', handleOnclick: () => {}}
};
const precedes = (a, b) => Boolean(a.compareDocumentPosition(b) & 4);
const renderPopin = overrides =>
  renderWithContext(<CMPopin {...props} {...overrides} />, {context: {translate: key => key}});

test.serial(
  'R1: two impact sections render titles, counters and text, and both buttons call their handlers',
  t => {
    let cancelled = 0;
    let published = 0;
    const {getByText} = renderPopin({
      sections,
      firstButton: {...props.firstButton, handleOnclick: () => cancelled++},
      secondButton: {...props.secondButton, handleOnclick: () => published++}
    });
    [
      'Modules:',
      '2 added · 1 removed',
      'Clear communication',
      'Giving feedback',
      'Introduction to management',
      'Learners:',
      '12 added · 3 removed · 640 unchanged',
      removalNote
    ].forEach(text => {
      t.truthy(getByText(text));
    });
    fireEvent.click(getByText('Cancel'));
    fireEvent.click(getByText('Publish changes'));
    t.is(cancelled, 1);
    t.is(published, 1);
  }
);

test.serial('R2: warning-only impact renders an alert and keeps both CTAs', t => {
  const warning = 'The impact of this change could not be computed.';
  const {getByRole, getByText, queryByText} = renderPopin({warning});
  t.true(getByRole('alert').textContent.includes(warning));
  t.truthy(getByText('Cancel'));
  t.truthy(getByText('Publish changes'));
  t.is(queryByText('Modules:'), null);
  t.is(queryByText('Learners:'), null);
});

test.serial('impact text is escaped and sections can coexist with warning', t => {
  const text = '<img src=x onerror=alert(1) />';
  const warning = '<script>preview failed</script>';
  const {getByText, getByRole, container} = renderPopin({
    sections: [{title: 'Modules:', items: [{type: 'text', text}]}],
    warning
  });
  t.truthy(getByText(text));
  t.true(getByRole('alert').textContent.includes(warning));
  t.is(container.querySelector('img, script'), null);
});

test.serial(
  'summary and warning render in default alert, explicit alert and information modes',
  t => {
    [undefined, 'alert', 'information'].forEach(mode => {
      const {getByText, getByRole, queryByRole} = renderPopin({
        mode,
        sections,
        warning: 'Preview warning'
      });
      const title = getByText('Publish changes?');
      const subtitle = getByText(props.descriptionText);
      const section = getByText('Modules:');
      const button = getByText('Cancel');
      t.true(precedes(title, subtitle));
      t.true(precedes(subtitle, section));
      t.true(precedes(section, button));
      t.true(precedes(getByRole('alert'), button));
      t.is(queryByRole('checkbox'), null);
      cleanup();
    });
  }
);

test.serial('omitted, null and empty impact props add no impact body', t => {
  const baseline = renderPopin();
  const markup = baseline.container.innerHTML;
  t.is(baseline.queryByRole('alert'), null);
  t.is(baseline.queryByRole('list'), null);
  cleanup();
  [
    {sections: []},
    {sections: null, warning: null},
    {sections: undefined, warning: ''},
    {sections: [], warning: ''}
  ].forEach(overrides => {
    const empty = renderPopin(overrides);
    t.is(empty.container.innerHTML, markup);
    t.is(empty.queryByRole('alert'), null);
    cleanup();
  });
});

test.serial('cookie, items and list retain their original bodies', t => {
  [cookie, items, list].forEach(fixture => {
    const baseline = renderPopin(fixture.props);
    const markup = baseline.container.innerHTML;
    cleanup();
    const {container, queryByText, queryByRole} = renderPopin({
      ...fixture.props,
      sections: [{title: 'Sentinel section', items: [{type: 'text', text: 'Sentinel item'}]}],
      warning: 'Sentinel warning'
    });
    t.is(container.innerHTML, markup);
    t.is(queryByText('Sentinel section'), null);
    t.is(queryByText('Sentinel item'), null);
    t.is(queryByRole('alert'), null);
    cleanup();
  });
});

test.serial('active, upcoming and failed previews expose their respective impact copy', t => {
  const backToProgress =
    '57 learners who had finished go back to in progress: they must complete the added modules.';
  [active, upcoming, failed].forEach(fixture => {
    const {getByText, queryByText, queryByRole} = renderPopin(fixture.props);
    t.truthy(getByText(fixture.props.descriptionText));
    t.is(Boolean(queryByText(backToProgress)), fixture === active);
    if (fixture === failed) {
      t.true(
        queryByRole('alert').textContent.includes(
          'The impact of this change could not be computed.'
        )
      );
      t.is(queryByText('Modules:'), null);
      t.is(queryByText('Learners:'), null);
    } else {
      t.truthy(getByText('2 added · 1 removed'));
      t.truthy(getByText('12 added · 3 removed · 640 unchanged'));
      t.truthy(getByText(removalNote));
      t.is(queryByRole('alert'), null);
    }
    cleanup();
  });
});

test.serial('impact updates remove stale sections and warnings', t => {
  const {rerender, getByText, getByRole, queryByText, queryByRole} = renderPopin(active.props);
  t.truthy(getByText('Clear communication'));

  rerender(<CMPopin {...failed.props} />);
  t.true(
    getByRole('alert').textContent.includes('The impact of this change could not be computed.')
  );
  t.is(queryByText('Modules:'), null);
  t.is(queryByText('Clear communication'), null);

  rerender(<CMPopin {...props} sections={sections} />);
  t.is(queryByRole('alert'), null);
  t.truthy(getByText('Modules:'));
  t.truthy(getByText(removalNote));

  rerender(<CMPopin {...props} sections={[]} warning="" />);
  t.is(queryByRole('alert'), null);
  t.is(queryByRole('list'), null);
  t.is(queryByText('Modules:'), null);
  t.is(queryByText(removalNote), null);
  t.truthy(getByText('Publish changes?'));
  t.truthy(getByText('Cancel'));
  t.truthy(getByText('Publish changes'));
});

test.serial('warning with empty sections keeps both distinct CTA callbacks usable', t => {
  let cancelled = 0;
  let published = 0;
  const {getByRole, getByText, queryByRole} = renderPopin({
    sections: [],
    warning: 'The impact of this change could not be computed.',
    firstButton: {...props.firstButton, handleOnclick: () => cancelled++},
    secondButton: {...props.secondButton, handleOnclick: () => published++}
  });
  t.true(
    getByRole('alert').textContent.includes('The impact of this change could not be computed.')
  );
  t.is(queryByRole('list'), null);
  fireEvent.click(getByText('Cancel'));
  t.is(cancelled, 1);
  t.is(published, 0);
  fireEvent.click(getByText('Publish changes'));
  t.is(cancelled, 1);
  t.is(published, 1);
});

test.serial('sections support empty items, optional headers and duplicate module titles', t => {
  const {getByText, getAllByText, getAllByRole} = renderPopin({
    sections: [
      {title: 'Modules:', counterText: '+250 · −40', items: []},
      {items: [{type: 'text', text: 'An untitled impact note'}]},
      {
        title: 'Learners:',
        items: [
          {type: 'text', text: '+ Repeated module title'},
          {type: 'text', text: '+ Repeated module title'}
        ]
      }
    ]
  });
  t.truthy(getByText('Modules:'));
  t.truthy(getByText('+250 · −40'));
  t.truthy(getByText('An untitled impact note'));
  t.truthy(getByText('Learners:'));
  t.is(getAllByText('+ Repeated module title').length, 2);
  t.is(getAllByRole('list').length, 3);
  t.is(getAllByRole('listitem').length, 3);
  t.true(precedes(getByText('+250 · −40'), getByText('An untitled impact note')));
});

test.serial('section titles and counters do not interpret HTML', t => {
  const {getByText, container} = renderPopin({
    sections: [
      {
        title: '<img src=x onerror=alert(1)>',
        counterText: '<script>counter</script>',
        items: []
      }
    ]
  });
  t.truthy(getByText('<img src=x onerror=alert(1)>'));
  t.truthy(getByText('<script>counter</script>'));
  t.is(container.querySelector('img, script'), null);
});
