import test from 'ava';
import PropTypes from 'prop-types';
import sinon from 'sinon';
import {forEach} from 'lodash/fp';
import {renderComponent} from '../../../test/helpers/render-component';
import QuickAccessCardGroup from '..';
import assignments from './fixtures/assignments';

test('assignments row renders the first four cards in supplied order', t => {
  const markup = renderComponent(t, QuickAccessCardGroup, assignments);
  const cardTags = markup.match(/<div\b[^>]*data-name="quick-access-card"[^>]*>/g);
  t.is(cardTags.length, 4);
  t.deepEqual(
    cardTags.map(tag => /data-type="([^"]+)"/.exec(tag)[1]),
    ['assignments', 'upload_users', 'learning_priorities', 'dashboard']
  );
  t.false(markup.includes('data-type="manage_users"'));
  t.true(markup.includes('href="/brands/7steps/editorialization/assignments/active"'));
});

const renderGroup = (t, props) => {
  const container = document.createElement('div');
  container.innerHTML = renderComponent(t, QuickAccessCardGroup, {props});
  return container;
};

const [assignment, uploadUsers, learningPriorities, dashboard, manageUsers] =
  assignments.props.list;

forEach(
  ({name, list, expected}) => {
    test(`assignments row respects the card limit: ${name}`, t => {
      const container = renderGroup(t, {list: Object.freeze(list)});
      t.deepEqual(
        [...container.querySelectorAll('[data-name="quick-access-card"]')].map(card =>
          card.getAttribute('data-type')
        ),
        expected
      );
      t.is(container.querySelectorAll('[data-name="loader"]').length, 0);
    });
  },
  [
    {name: 'one card', list: [assignment], expected: ['assignments']},
    {
      name: 'three cards with assignments in the middle',
      list: [uploadUsers, assignment, learningPriorities],
      expected: ['upload_users', 'assignments', 'learning_priorities']
    },
    {
      name: 'assignments is the fourth card',
      list: [uploadUsers, learningPriorities, dashboard, assignment],
      expected: ['upload_users', 'learning_priorities', 'dashboard', 'assignments']
    },
    {
      name: 'assignments is the fourth of five cards',
      list: [uploadUsers, learningPriorities, dashboard, assignment, manageUsers],
      expected: ['upload_users', 'learning_priorities', 'dashboard', 'assignments']
    },
    {
      name: 'assignments is the fifth card',
      list: [uploadUsers, learningPriorities, dashboard, manageUsers, assignment],
      expected: ['upload_users', 'learning_priorities', 'dashboard', 'manage_users']
    }
  ]
);

forEach(
  ({name, props, loaders}) => {
    test(`assignments row handles an empty list: ${name}`, t => {
      const container = renderGroup(t, props);
      t.is(container.querySelectorAll('[data-name="quick-access-card"]').length, 0);
      t.is(container.querySelectorAll('[data-name="loader"]').length, loaders);
    });
  },
  [
    {name: 'omitted', props: {}, loaders: 0},
    {name: 'explicitly empty', props: {list: []}, loaders: 0},
    {name: 'omitted while loading', props: {loading: true}, loaders: 1},
    {name: 'empty while loading', props: {list: [], loading: true}, loaders: 1}
  ]
);

test('loading retains assignments and its link options alongside the loader', t => {
  const container = renderGroup(t, {
    ...assignments.props,
    loading: true,
    list: [{...assignment, openInNewTab: true}, ...assignments.props.list.slice(1)]
  });
  const cards = container.querySelectorAll('[data-name="quick-access-card"]');
  t.deepEqual(
    [...cards].map(card => card.getAttribute('data-type')),
    ['assignments', 'upload_users', 'learning_priorities', 'dashboard']
  );
  const assignmentLink = cards[0].querySelector('a');
  t.is(assignmentLink.getAttribute('href'), assignment.href);
  t.is(assignmentLink.getAttribute('target'), '_blank');
  t.is(cards[1].querySelector('a').getAttribute('target'), '_self');
  t.is(container.querySelectorAll('[data-name="loader"]').length, 1);
});

test.serial('group accepts assignments and rejects invalid nested card props', t => {
  const warning = sinon.stub(console, 'error');
  try {
    PropTypes.resetWarningCache();
    PropTypes.checkPropTypes(
      QuickAccessCardGroup.propTypes,
      assignments.props,
      'prop',
      'QuickAccessCardGroup'
    );
    t.false(warning.called);

    forEach(
      ({card, prop}) => {
        warning.resetHistory();
        PropTypes.resetWarningCache();
        PropTypes.checkPropTypes(
          QuickAccessCardGroup.propTypes,
          {list: [{...assignment, ...card}]},
          'prop',
          'QuickAccessCardGroup'
        );
        t.true(warning.calledOnce);
        t.true(warning.firstCall.args[0].includes(`list[0].${prop}`));
      },
      [
        {card: {feature: 'Assignments'}, prop: 'feature'},
        {card: {feature: 42}, prop: 'feature'},
        {card: {openInNewTab: 'true'}, prop: 'openInNewTab'}
      ]
    );
  } finally {
    warning.restore();
    PropTypes.resetWarningCache();
  }
});
