import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import sinon from 'sinon';
import {fireEvent} from '@testing-library/react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/pro-solid-svg-icons';
import {defaultsDeep} from 'lodash/fp';
import {renderWithContext} from '../../../util/render-with-context';
import Link from '../../../atom/link';
import MoocHeader from '..';
import style from '../style.css';
import defaultFixture from './fixtures/default';
import loggedFixture from './fixtures/logged';
import battlesFixture from './fixtures/logged-with-battles-stat';

browserEnv();
library.add(fas);

// Both fixtures nest links that React rejects in the DOM, which the warning hook turns into errors:
// the logged nav Battles badge inside its item, and the notification count inside the bell. The DOM
// tests use the nav the MOOC will send (no Battles entry) and a zero notification count.
const withoutNestedLinks = <P extends {user: {notifications: object}}>(props: P): P => ({
  ...props,
  user: {
    ...props.user,
    notifications: {...props.user.notifications, value: 0}
  }
});
const battlesProps = withoutNestedLinks(battlesFixture.props);
const loggedProps = withoutNestedLinks({
  ...loggedFixture.props,
  pages: battlesFixture.props.pages
});

const withBattles = (battles: {
  href?: string;
  label?: string;
  'aria-label'?: string;
  counter?: number;
  disabled?: boolean;
}) => ({
  ...battlesProps,
  user: {
    ...battlesProps.user,
    stats: {...battlesProps.user.stats, battles}
  }
});

// The Link prop seam is required because disabled is not forwarded to the DOM.
const findBattlesLink = (node: React.ReactNode): React.ReactElement | undefined => {
  return React.Children.toArray(node).reduce<React.ReactElement | undefined>((found, child) => {
    if (
      found ||
      !React.isValidElement<{
        children?: React.ReactNode;
        'data-name'?: string;
      }>(child)
    ) {
      return found;
    }
    return child.props['data-name'] === 'stat-battles'
      ? child
      : findBattlesLink(child.props.children);
  }, undefined);
};

// The story exposes the supplied Battles destination and copy.
test('renders battles immediately after my list with its supplied link and label', t => {
  const {container, unmount} = renderWithContext(<MoocHeader {...battlesProps} />);
  try {
    const myList = container.querySelector('[data-name="stat-my-list"]') as Element;
    const battles = container.querySelector('[data-name="stat-battles"]') as Element;
    t.truthy(battles);
    t.is(myList.parentElement?.children.length, 5);
    t.is(myList.nextElementSibling, battles);
    t.is(battles.getAttribute('href'), '#battles');
    t.is(battles.getAttribute('aria-label'), 'I have 3 waiting battles');
    t.is(battles.querySelector(`.${style.label}`)?.textContent, 'Battles');
    t.is(battles.querySelector('svg')?.getAttribute('data-icon'), 'bolt');
    t.false(
      battlesFixture.props.pages.displayed.some((page: {title: string}) => page.title === 'Battles')
    );
  } finally {
    unmount();
  }
});

// Optional Battles leaves the existing stats intact.
test('logged header keeps exactly four stats when battles is absent', t => {
  const {container, unmount} = renderWithContext(<MoocHeader {...loggedProps} />);
  try {
    const myList = container.querySelector('[data-name="stat-my-list"]') as Element;
    const stats = myList.parentElement as Element;
    t.is(stats.children.length, 4);
    t.deepEqual(
      [...stats.children].map(child => child.getAttribute('data-name')),
      ['stat-stars', 'stat-ranking', 'stat-badge', 'stat-my-list']
    );
    t.is(stats.querySelector('[data-name="stat-battles"]'), null);
  } finally {
    unmount();
  }
});

// Positive counts keep their value through 99, then cap at 99+.
[
  {counter: 1, expected: '1'},
  {counter: 3, expected: '3'},
  {counter: 99, expected: '99'},
  {counter: 100, expected: '99+'},
  {counter: 120, expected: '99+'}
].forEach(({counter, expected}) => {
  test(`battles counter ${counter} displays ${expected} on the icon`, t => {
    const props = withBattles({
      ...battlesFixture.props.user.stats.battles,
      counter
    });
    const {container, unmount} = renderWithContext(<MoocHeader {...props} />);
    try {
      const battles = container.querySelector('[data-name="stat-battles"]') as Element;
      t.truthy(battles);
      const badges = battles.querySelectorAll('[data-name="stat-battles-counter"]');
      t.is(badges.length, 1);
      const badge = badges[0];
      t.is(badge.tagName, 'SPAN');
      t.is(badge.textContent, expected);
      t.is(badge.querySelector(`.${style.counter}`)?.textContent, expected);
      t.is(badge.parentElement, battles.querySelector('svg')?.parentElement || null);
      t.is(battles.querySelector('a, button'), null);
      t.is(battles.getAttribute('aria-label'), 'I have 3 waiting battles');
    } finally {
      unmount();
    }
  });
});

// Nonpositive and omitted counts leave only the icon and supplied label.
[
  {name: 'zero', count: {counter: 0}},
  {name: 'negative', count: {counter: -1}},
  {name: 'absent', count: {}}
].forEach(({name, count}) => {
  test(`battles omits its badge when the counter is ${name}`, t => {
    const props = withBattles({
      ...count,
      href: '#battles',
      label: 'Battles',
      'aria-label': 'Waiting battles'
    });
    const {container, unmount} = renderWithContext(<MoocHeader {...props} />);
    try {
      const battles = container.querySelector('[data-name="stat-battles"]') as Element;
      t.truthy(battles);
      t.is(battles.getAttribute('href'), '#battles');
      t.is(battles.getAttribute('aria-label'), 'Waiting battles');
      t.is(battles.querySelector(`.${style.label}`)?.textContent, 'Battles');
      t.is(battles.querySelector('[data-name="stat-battles-counter"]'), null);
      t.is(battles.textContent, 'Battles');
    } finally {
      unmount();
    }
  });
});

// Real Link suppression must work independently of CSS pointer-events.
test.serial('disabled battles passes disabled and its class and never handles a click', t => {
  const handleLinkClick = sinon.spy(MoocHeader.prototype, 'handleLinkClick');
  const ref = React.createRef<MoocHeader>();
  try {
    const props = withBattles({
      ...battlesFixture.props.user.stats.battles,
      disabled: true
    });
    const {container, unmount} = renderWithContext(<MoocHeader {...props} ref={ref} />);
    try {
      const link = findBattlesLink(ref.current?.render());
      t.is(link?.type, Link);
      t.is(link?.props.disabled, true);
      t.is(link?.props.href, '#battles');
      const battles = container.querySelector('[data-name="stat-battles"]') as Element;
      const header = container.querySelector('[data-name="moocHeader"]') as Element;
      t.true(battles.classList.contains(style.stat));
      t.true(battles.classList.contains(style.disabled));
      t.false(battles.hasAttribute('href'));
      t.is(battles.querySelector(`.${style.label}`)?.textContent, 'Battles');
      const counter = battles.querySelector('[data-name="stat-battles-counter"]') as Element;
      t.is(counter.textContent, '3');
      fireEvent.click(container.querySelector('[data-name="nav-mobile-open"]') as Element);
      t.is(header.getAttribute('data-open'), 'true');
      fireEvent.click(battles);
      fireEvent.click(counter);
      t.false(handleLinkClick.called);
      t.is(header.getAttribute('data-open'), 'true');
    } finally {
      unmount();
    }
  } finally {
    handleLinkClick.restore();
  }
});

// Clicking any part of an enabled stat closes the burger menu.
['link', 'icon', 'label', 'counter'].forEach(target => {
  test(`enabled battles ${target} click closes the open menu`, t => {
    const {container, unmount} = renderWithContext(<MoocHeader {...battlesProps} />);
    try {
      const battles = container.querySelector('[data-name="stat-battles"]') as Element;
      const header = container.querySelector('[data-name="moocHeader"]') as Element;
      t.false(battles.classList.contains(style.disabled));
      t.is(battles.getAttribute('href'), '#battles');
      const targets = {
        link: battles,
        icon: battles.querySelector('svg'),
        label: battles.querySelector(`.${style.label}`),
        counter: battles.querySelector('[data-name="stat-battles-counter"]')
      };
      fireEvent.click(container.querySelector('[data-name="nav-mobile-open"]') as Element);
      t.is(header.getAttribute('data-open'), 'true');
      fireEvent.click(targets[target as keyof typeof targets] as Element);
      t.is(header.getAttribute('data-open'), 'false');
    } finally {
      unmount();
    }
  });
});

// Updates must remove stale count, disabled state and optional stats.
test('battles follows updated copy, counters and availability without remounting the header', t => {
  const {container, rerender, unmount} = renderWithContext(<MoocHeader {...loggedProps} />);
  try {
    const stats = container.querySelector('[data-name="stat-my-list"]')?.parentElement as Element;
    const previousStats = stats.innerHTML;
    t.is(stats.children.length, 4);
    rerender(<MoocHeader {...battlesProps} />);
    t.is(stats.children.length, 5);
    const updated = withBattles({
      href: '#defis',
      label: 'Défis',
      'aria-label': 'Vous avez 100 défis en attente',
      counter: 100,
      disabled: true
    });
    rerender(<MoocHeader {...updated} />);
    const battles = stats.querySelector('[data-name="stat-battles"]') as Element;
    t.is(battles.getAttribute('aria-label'), 'Vous avez 100 défis en attente');
    t.is(battles.querySelector(`.${style.label}`)?.textContent, 'Défis');
    t.is(battles.querySelector('[data-name="stat-battles-counter"]')?.textContent, '99+');
    t.false(battles.hasAttribute('href'));
    t.true(battles.classList.contains(style.disabled));
    rerender(
      <MoocHeader
        {...withBattles({
          ...updated.user.stats.battles,
          counter: 0,
          disabled: false
        })}
      />
    );
    t.is(battles.getAttribute('href'), '#defis');
    t.false(battles.classList.contains(style.disabled));
    t.is(battles.querySelector('[data-name="stat-battles-counter"]'), null);
    rerender(<MoocHeader {...loggedProps} />);
    t.is(stats.children.length, 4);
    t.is(stats.querySelector('[data-name="stat-battles"]'), null);
    t.is(stats.innerHTML, previousStats);
  } finally {
    unmount();
  }
});

// Every Battles field is optional, including destination and copy.
test('an empty battles object renders an enabled stat without a badge or invented copy', t => {
  const {container, unmount} = renderWithContext(<MoocHeader {...withBattles({})} />);
  try {
    const battles = container.querySelector('[data-name="stat-battles"]') as Element;
    t.truthy(battles);
    t.is(battles.parentElement?.children.length, 5);
    t.is(battles.querySelector('svg')?.getAttribute('data-icon'), 'bolt');
    t.is(battles.textContent, '');
    t.false(battles.hasAttribute('href'));
    t.false(battles.hasAttribute('aria-label'));
    t.false(battles.classList.contains(style.disabled));
    t.is(battles.querySelector('[data-name="stat-battles-counter"]'), null);
  } finally {
    unmount();
  }
});

// The new story must not mutate the existing nav or stats fixtures.
test('the battles fixture removes only Battles navigation and preserves the logged fixture', t => {
  const logged = loggedFixture.props;
  const fixture = battlesFixture.props;
  t.deepEqual(fixture.user.stats.battles, {
    href: '#battles',
    label: 'Battles',
    'aria-label': 'I have 3 waiting battles',
    counter: 3
  });
  t.false(Object.prototype.hasOwnProperty.call(logged.user.stats, 'battles'));
  t.true(
    logged.pages.displayed.some(
      (page: {title: string; counter?: number}) => page.title === 'Battles' && page.counter === 3
    )
  );
  t.deepEqual(
    fixture.pages.displayed.map((page: {title: string}) => page.title),
    ['Catalogue', 'Certifications', 'Review']
  );
  t.deepEqual(fixture.pages.displayed, [
    logged.pages.displayed[0],
    logged.pages.displayed[2],
    logged.pages.displayed[3]
  ]);
  t.is(fixture.pages.more, logged.pages.more);
  t.deepEqual(
    [
      fixture.user.stats.stars,
      fixture.user.stats.ranking,
      fixture.user.stats.badge,
      fixture.user.stats.myList
    ],
    [
      logged.user.stats.stars,
      logged.user.stats.ranking,
      logged.user.stats.badge,
      logged.user.stats.myList
    ]
  );
});

test('should focus when in searchBar input', t => {
  t.plan(2);
  const {container} = renderWithContext(<MoocHeader {...defaultFixture.props} />);
  const searchInput = container.querySelector('[data-name="search-input"]') as HTMLInputElement;
  t.truthy(searchInput);
  searchInput.focus();
  t.is(document.activeElement, searchInput);
});

test('should submit when a submit value exists in the searchBar input', t => {
  t.plan(3);

  const {container} = renderWithContext(<MoocHeader {...defaultFixture.props} />);
  const searchForm = container.querySelector('[data-name="searchForm"]') as HTMLInputElement;
  const searchInput = container.querySelector('[data-name="search-input"]') as HTMLInputElement;

  t.truthy(searchForm);
  t.truthy(searchInput);

  fireEvent.keyDown(searchForm, {key: 'Enter', code: 'Enter'});
  t.pass();
});

test('should launch onResetSearch handler when reset is triggered', t => {
  t.plan(2);
  const props = defaultsDeep(defaultFixture.props, {
    onResetSearch: () => t.pass(),
    search: {
      ...defaultFixture.props.search,
      value: 'test search value'
    }
  });
  const {container} = renderWithContext(<MoocHeader {...props} />);
  const searchFormReset = container.querySelector('[data-name="search-form-reset"]');
  t.truthy(searchFormReset);
  fireEvent.mouseDown(searchFormReset as Element);
});

test('Launch onMenuOpen & onMenuClose handlers', t => {
  t.plan(5);

  const props = defaultsDeep(defaultFixture.props, {
    onMenuOpen: () => t.pass(),
    onMenuClose: () => t.pass()
  });
  const {container} = renderWithContext(<MoocHeader {...props} />);

  const navMobileOpen = container.querySelector('[data-name="nav-mobile-open"]');
  t.truthy(navMobileOpen);
  fireEvent.click(navMobileOpen as Element);

  const navMobileClose = container.querySelector('[data-name="nav-mobile-close"]');
  t.truthy(navMobileClose);
  fireEvent.click(navMobileClose as Element);

  t.pass();
});

test('Pass if onMenuOpen & onMenuClose are not provided', t => {
  t.plan(3);
  const {container} = renderWithContext(<MoocHeader {...defaultFixture.props} />);

  const navMobileOpen = container.querySelector('[data-name="nav-mobile-open"]');
  t.truthy(navMobileOpen);
  fireEvent.click(navMobileOpen as Element);

  const navMobileClose = container.querySelector('[data-name="nav-mobile-close"]');
  t.truthy(navMobileClose);
  fireEvent.click(navMobileClose as Element);
  t.pass();
});

test('render should return null if no props are provided', t => {
  t.is(new MoocHeader({}).render(), null);
  t.is(new MoocHeader().render(), null);
  t.pass();
});
