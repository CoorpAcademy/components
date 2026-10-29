import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import {cleanup, render} from '@testing-library/react';
import ProgressBar from '..';
import defaultFixture from './fixtures/default';
import maxFixture from './fixtures/max';
import noInfoFixture from './fixtures/no-info';
import twoStepsFixture from './fixtures/two-steps';

browserEnv();
test.afterEach.always(cleanup);

const makeSegments = values =>
  values.map((value, index) => ({
    value,
    label: ['Completed', 'In progress', 'Not started'][index],
    color: ['green', 'blue', 'lightgrey'][index]
  }));

const visualSegments = container => [
  ...container.querySelectorAll('[data-name="progress-bar-segment"]')
];

const legendItems = container => [
  ...container.querySelectorAll('[data-name="progress-bar-legend-item"]')
];

test.serial('legacy fixtures keep the single-value bar', t => {
  [
    {props: defaultFixture.props, content: '60%', text: '31/51 foobar', steps: 0},
    {props: maxFixture.props, content: '100%', text: '100/100 foobar max', steps: 0},
    {props: noInfoFixture.props, content: '60%', text: null, steps: 0},
    {props: twoStepsFixture.props, content: '60%', text: '31/51 foobar', steps: 2}
  ].forEach(({props, content, text, steps}) => {
    const {container, unmount} = render(<ProgressBar {...props} />);
    const wrapper = container.querySelector('[data-name="progress-bar-wrapper"]');
    t.is(wrapper.getAttribute('data-content'), content);
    t.is(wrapper.firstElementChild.style.width, `${(props.value / props.max) * 100}%`);
    const info = container.querySelector('p');
    t.is(info && info.firstElementChild.textContent, text);
    if (steps) t.is(wrapper.lastElementChild.children.length, steps);
    t.is(container.querySelector('[data-name="progress-bar-segmented-bar"]'), null);
    t.is(container.querySelector('[role="list"], ul'), null);
    unmount();
  });
});

test.serial('legacy overrides and steps retain their behavior', t => {
  const props = {
    ...twoStepsFixture.props,
    className: 'caller-class',
    style: {backgroundColor: 'red', width: '1%', borderRadius: 0},
    displayInfo: false
  };
  const {container} = render(<ProgressBar {...props} />);
  const wrapper = container.querySelector('[data-name="progress-bar-wrapper"]');
  t.true(wrapper.classList.contains('caller-class'));
  t.is(wrapper.firstElementChild.style.backgroundColor, 'red');
  t.is(wrapper.firstElementChild.style.borderRadius, '0');
  t.is(wrapper.firstElementChild.style.width, `${(31 / 51) * 100}%`);
  t.is(wrapper.querySelector('p'), null);
  t.is(wrapper.lastElementChild.children.length, 2);
  t.is(wrapper.getAttribute('data-content'), '60%');
  t.is(
    ReactDOMServer.renderToStaticMarkup(
      <ProgressBar
        {...defaultFixture.props}
        title="Ignored"
        subtitle="Ignored"
        ariaLabel="Ignored"
      />
    ),
    ReactDOMServer.renderToStaticMarkup(<ProgressBar {...defaultFixture.props} />)
  );
});

test.serial('segments render proportional widths in input order', t => {
  const view = render(<ProgressBar segments={makeSegments([50, 30, 20])} />);
  const painted = visualSegments(view.container);
  t.is(painted.length, 3);
  t.deepEqual(
    painted.map(segment => segment.style.width),
    ['50%', '30%', '20%']
  );
  t.deepEqual(
    painted.map(segment => segment.style.backgroundColor),
    ['green', 'blue', 'lightgrey']
  );
  t.true(painted.every(segment => segment.getAttribute('aria-hidden') === 'true'));

  view.rerender(<ProgressBar segments={makeSegments([1147, 380, 285])} />);
  t.deepEqual(
    visualSegments(view.container).map(segment => segment.style.width),
    [`${(1147 / 1812) * 100}%`, `${(380 / 1812) * 100}%`, `${(285 / 1812) * 100}%`]
  );
});

test.serial('zero segments take no space but retain their legend entry', t => {
  const view = render(<ProgressBar segments={makeSegments([50, 0, 50])} />);
  [
    {values: [50, 0, 50], widths: ['50%', '50%'], colors: ['green', 'lightgrey']},
    {values: [0, 30, 70], widths: ['30%', '70%'], colors: ['blue', 'lightgrey']},
    {values: [100, 0, 0], widths: ['100%'], colors: ['green']}
  ].forEach(({values, widths, colors}) => {
    view.rerender(<ProgressBar segments={makeSegments(values)} />);
    const painted = visualSegments(view.container);
    t.deepEqual(
      painted.map(segment => segment.style.width),
      widths
    );
    t.deepEqual(
      painted.map(segment => segment.style.backgroundColor),
      colors
    );
    t.is(view.getByRole('img').children.length, widths.length);
    t.deepEqual(
      legendItems(view.container).map(item => item.textContent),
      ['Completed', 'In progress', 'Not started']
    );
  });
});

test.serial('header legend and image label render caller strings', t => {
  const segments = makeSegments([50, 30, 20]);
  segments[0].label = '<b>Completed</b>';
  const title = '<strong>1,812 active learners</strong>';
  const subtitle = '<em>63% completed</em> · 28 removed, outside the bar';
  const ariaLabel = '1,147 completed, 380 in progress, 285 not started';
  const view = render(
    <ProgressBar
      segments={segments}
      title={title}
      subtitle={subtitle}
      ariaLabel={ariaLabel}
      className="caller-class"
    />
  );
  const bar = view.getByRole('img', {name: ariaLabel});
  t.is(bar.getAttribute('data-name'), 'progress-bar-segmented-bar');
  t.is(view.getByText(title).textContent, title);
  t.is(view.getByText(subtitle).textContent, subtitle);
  t.false(bar.contains(view.getByText(title)));
  t.false(bar.contains(view.getByText(subtitle)));
  t.false(bar.contains(view.getByRole('list')));
  t.true(view.container.firstElementChild.classList.contains('caller-class'));
  t.is(view.container.querySelector('strong, em, b'), null);
  const items = view.getAllByRole('listitem');
  t.is(items.length, 3);
  items.forEach((item, index) => {
    t.is(item.textContent, segments[index].label);
    const swatches = item.querySelectorAll('[data-name="progress-bar-legend-swatch"]');
    t.is(swatches.length, 1);
    t.is(swatches[0].style.backgroundColor, segments[index].color);
    t.is(swatches[0].getAttribute('aria-hidden'), 'true');
  });
});

test.serial('optional segmented header and image label may be omitted', t => {
  const view = render(<ProgressBar segments={makeSegments([50, 30, 20])} />);
  t.false(view.getByRole('img').hasAttribute('aria-label'));
  t.is(view.queryByRole('group'), null);
  t.is(view.container.querySelector('p'), null);
  view.rerender(<ProgressBar segments={[]} subtitle="Only subtitle" />);
  t.is(view.getByText('Only subtitle').textContent, 'Only subtitle');
  t.is(view.queryByRole('group'), null);
});

test.serial('segmented mode accepts missing value and max', t => {
  [makeSegments([50, 30, 20]), [], makeSegments([0, 0, 0])].forEach((segments, index) => {
    PropTypes.resetWarningCache();
    t.notThrows(() =>
      PropTypes.checkPropTypes(
        ProgressBar.propTypes,
        {segments},
        'prop',
        `SegmentedProgressBar${index}`
      )
    );
  });
});

test.serial('legacy mode still requires numeric value and max', t => {
  [
    {props: {max: 100}, field: 'value'},
    {props: {value: 50}, field: 'max'},
    {props: {value: '50', max: 100}, field: 'value'},
    {props: {value: 50, max: '100'}, field: 'max'}
  ].forEach(({props, field}, index) => {
    PropTypes.resetWarningCache();
    t.throws(
      () =>
        PropTypes.checkPropTypes(ProgressBar.propTypes, props, 'prop', `LegacyProgressBar${index}`),
      {message: new RegExp(field)}
    );
  });
});

test.serial('empty or all-zero segments have finite empty geometry', t => {
  const view = render(<ProgressBar segments={[]} title="No learners" subtitle="0% completed" />);
  [[], makeSegments([0, 0, 0])].forEach(segments => {
    view.rerender(<ProgressBar segments={segments} title="No learners" subtitle="0% completed" />);
    t.is(view.getByRole('img').children.length, 0);
    t.is(visualSegments(view.container).length, 0);
    t.is(legendItems(view.container).length, segments.length);
    t.is(view.getByText('No learners').textContent, 'No learners');
    t.is(view.getByText('0% completed').textContent, '0% completed');
    t.notRegex(view.container.innerHTML, /NaN|Infinity|undefined\/undefined/);
    t.is(view.container.querySelector('[data-name="progress-bar-wrapper"]'), null);
  });
});

test.serial('fractional and single positive segments use the full bar', t => {
  const view = render(<ProgressBar segments={makeSegments([0.125, 0.375, 0.5])} />);
  t.deepEqual(
    visualSegments(view.container).map(segment => segment.style.width),
    ['12.5%', '37.5%', '50%']
  );

  view.rerender(<ProgressBar segments={makeSegments([0, 0, 2.5])} />);
  const painted = visualSegments(view.container);
  t.is(painted.length, 1);
  t.is(painted[0].style.width, '100%');
  t.is(painted[0].style.backgroundColor, 'lightgrey');
  t.deepEqual(
    legendItems(view.container).map(item => item.textContent),
    ['Completed', 'In progress', 'Not started']
  );
});

test.serial('mode transitions remove stale geometry header and legend', t => {
  const view = render(<ProgressBar {...defaultFixture.props} />);
  t.is(view.container.querySelector('[data-name="progress-bar-wrapper"]').dataset.content, '60%');

  view.rerender(
    <ProgressBar
      segments={makeSegments([3, 1, 0])}
      title="Active learners"
      ariaLabel="3 complete"
    />
  );
  t.is(view.container.querySelector('[data-name="progress-bar-wrapper"]'), null);
  t.is(view.getByRole('img', {name: '3 complete'}).children.length, 2);
  t.deepEqual(
    visualSegments(view.container).map(segment => segment.style.width),
    ['75%', '25%']
  );
  t.is(view.getAllByRole('listitem').length, 3);

  view.rerender(<ProgressBar segments={[]} />);
  t.is(view.getByRole('img').children.length, 0);
  t.false(view.getByRole('img').hasAttribute('aria-label'));
  t.is(view.queryByText('Active learners'), null);
  t.is(view.queryAllByRole('listitem').length, 0);

  [null, undefined].forEach(segments => {
    view.rerender(<ProgressBar segments={segments} value={25} max={100} desc="resumed" />);
    t.is(view.queryByRole('img'), null);
    t.is(view.queryByRole('list'), null);
    t.is(view.getByText('25/100 resumed').textContent, '25/100 resumed');
    t.is(view.container.querySelector('[data-name="progress-bar-wrapper"]').dataset.content, '25%');
  });
});

test.serial('legacy props do not override segmented rendering', t => {
  const props = {
    segments: makeSegments([1, 3, 0]),
    title: '4 active learners',
    subtitle: '25% completed',
    ariaLabel: '1 completed, 3 in progress',
    className: 'caller-class'
  };
  const view = render(<ProgressBar {...props} />);
  const markup = view.container.innerHTML;
  view.rerender(
    <ProgressBar
      {...props}
      value={900}
      max={1000}
      desc="legacy description"
      displayInfo={false}
      steps={4}
      style={{backgroundColor: 'red', width: '90%', borderRadius: 0}}
    />
  );
  t.is(view.container.innerHTML, markup);
});

test.serial('header fields and accessible label update independently', t => {
  const segments = makeSegments([1, 0, 0]);
  const view = render(
    <ProgressBar segments={segments} title="Only title" ariaLabel="One learner" />
  );
  t.is(view.getByRole('group').textContent, 'Only title');
  t.is(view.container.querySelector('p'), null);
  t.truthy(view.getByRole('img', {name: 'One learner'}));

  view.rerender(
    <ProgressBar segments={segments} subtitle="Only subtitle" ariaLabel="Updated label" />
  );
  t.is(view.queryByRole('group'), null);
  t.is(view.queryByText('Only title'), null);
  t.is(view.getByText('Only subtitle').textContent, 'Only subtitle');
  t.truthy(view.getByRole('img', {name: 'Updated label'}));

  view.rerender(<ProgressBar segments={segments} title="" subtitle="" />);
  t.is(view.queryByText('Only subtitle'), null);
  t.is(view.queryByRole('group'), null);
  t.is(view.container.querySelector('p'), null);
  t.false(view.getByRole('img').hasAttribute('aria-label'));
  t.is(view.container.firstElementChild.children.length, 2);
});

test.serial('null and undefined segments retain legacy markup and required props', t => {
  const baseline = ReactDOMServer.renderToStaticMarkup(<ProgressBar {...defaultFixture.props} />);
  [null, undefined].forEach((segments, index) => {
    t.is(
      ReactDOMServer.renderToStaticMarkup(
        <ProgressBar {...defaultFixture.props} segments={segments} />
      ),
      baseline
    );
    ['value', 'max'].forEach(field => {
      PropTypes.resetWarningCache();
      t.throws(
        () =>
          PropTypes.checkPropTypes(
            ProgressBar.propTypes,
            {...defaultFixture.props, segments, [field]: null},
            'prop',
            `NullishSegments${index}${field}`
          ),
        {message: new RegExp(field)}
      );
    });
  });
});

test.serial('segment shapes reject missing fields and incorrect types', t => {
  const segment = makeSegments([1])[0];
  [
    {segments: {}, field: /segments/},
    {segments: [1], field: /segments\[0\]/},
    {segments: [{label: segment.label, color: segment.color}], field: /segments\[0\]\.value/},
    {segments: [{...segment, value: '1'}], field: /segments\[0\]\.value/},
    {segments: [{value: segment.value, color: segment.color}], field: /segments\[0\]\.label/},
    {segments: [{...segment, label: 1}], field: /segments\[0\]\.label/},
    {segments: [{value: segment.value, label: segment.label}], field: /segments\[0\]\.color/},
    {segments: [{...segment, color: 1}], field: /segments\[0\]\.color/}
  ].forEach(({segments, field}, index) => {
    PropTypes.resetWarningCache();
    t.throws(
      () =>
        PropTypes.checkPropTypes(
          ProgressBar.propTypes,
          {segments},
          'prop',
          `InvalidSegmentShape${index}`
        ),
      {message: field}
    );
  });
});

test.serial('segmented mode validates optional strings and supplied legacy numbers', t => {
  [
    {field: 'title', value: 1},
    {field: 'subtitle', value: {}},
    {field: 'ariaLabel', value: []},
    {field: 'value', value: '1'},
    {field: 'max', value: '100'}
  ].forEach(({field, value}) => {
    PropTypes.resetWarningCache();
    t.throws(
      () =>
        PropTypes.checkPropTypes(
          ProgressBar.propTypes,
          {segments: [], [field]: value},
          'prop',
          `InvalidSegmentedProp${field}`
        ),
      {message: new RegExp(field)}
    );
  });
});
