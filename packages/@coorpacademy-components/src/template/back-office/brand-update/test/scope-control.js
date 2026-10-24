import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {render, cleanup, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {spy} from 'sinon';
import forEach from 'lodash/fp/forEach';
import BrandUpdate from '..';
import BrandTabs from '../../../../molecule/brand-tabs';
import {wrappingComponent} from '../../../../test/helpers/render-component';
import style from '../style.css';
import WithoutScope from './fixtures/list-items-assignment-without-scope';
import MyScope from './fixtures/list-items-assignment-scope-my';
import Published from './fixtures/list-items-published';
import Default from './fixtures/default';

browserEnv();
document.getSelection = () => ({
  addRange: () => {},
  removeAllRanges: () => {}
});
test.afterEach.always(cleanup);

test.serial('optional scope control follows status tabs in the same row', t => {
  const {container, getByRole, rerender} = render(<BrandUpdate {...WithoutScope.props} />, {
    wrapper: wrappingComponent
  });
  const oldRow = container.querySelector(`.${style.tabs}`);
  const content = oldRow.nextElementSibling.outerHTML;
  const tabs = oldRow.firstElementChild.outerHTML;
  rerender(<BrandUpdate {...MyScope.props} />);
  const group = getByRole('radiogroup', {name: 'Assignment scope'});
  const row = container.querySelector(`.${style.tabs}`);
  t.true(row.contains(group));
  t.true(row.children[0].contains(getByRole('link', {name: 'Active'})));
  t.true(row.children[1].contains(group));
  t.is(row.children[0].innerHTML, tabs);
  t.is(row.nextElementSibling.outerHTML, content);
  forEach(
    name => {
      t.truthy(getByRole('link', {name}));
    },
    ['Active', 'Upcoming', 'Ended', 'Drafts', 'Disabled']
  );
  t.is(row.children[0].textContent, 'Active5Upcoming0Ended0Drafts0Disabled0');
});

test.serial('template forwards value, accessible label, and callback', async t => {
  const onChange = spy();
  const scopeControl = {
    ...MyScope.props.scopeControl,
    'aria-label': 'Filter assignments',
    onChange
  };
  const user = userEvent.setup({document});
  const {getByRole, rerender} = render(
    <BrandUpdate {...MyScope.props} scopeControl={scopeControl} />,
    {
      wrapper: wrappingComponent
    }
  );
  t.truthy(getByRole('radiogroup', {name: 'Filter assignments'}));
  const my = getByRole('radio', {name: 'My assignments'});
  const all = getByRole('radio', {name: 'All assignments'});
  await user.click(all);
  t.true(onChange.calledOnceWithExactly('all'));
  t.is(my.getAttribute('aria-checked'), 'true');
  rerender(<BrandUpdate {...MyScope.props} scopeControl={{...scopeControl, value: 'all'}} />);
  t.is(all.getAttribute('aria-checked'), 'true');
  all.focus();
  fireEvent.keyDown(all, {key: 'ArrowLeft'});
  t.is(document.activeElement, my);
  t.deepEqual(onChange.args, [['all'], ['my']]);
  rerender(<BrandUpdate {...MyScope.props} scopeControl={scopeControl} />);
  t.is(my.getAttribute('aria-checked'), 'true');
});

test.serial('omitted or null scope control preserves the old tabs markup', t => {
  forEach(
    fixture => {
      const selectedItem = fixture.props.items.find(item => item.selected);
      const selectedTab = selectedItem.tabs.find(tab => tab.selected);
      const expectedTabs = render(<BrandTabs type="light" tabs={selectedTab.subTabs} />, {
        wrapper: wrappingComponent
      });
      const {container, queryByRole, rerender, unmount} = render(
        <BrandUpdate {...fixture.props} />,
        {
          wrapper: wrappingComponent
        }
      );
      const tabs = container.querySelector(`.${style.tabs}`);
      const expected = document.createElement('div');
      expected.className = style.tabs;
      expected.innerHTML = expectedTabs.container.innerHTML;
      expectedTabs.unmount();
      t.is(tabs.outerHTML, expected.outerHTML);
      t.is(tabs.children.length, 1);
      t.is(queryByRole('radiogroup'), null);
      const original = container.innerHTML;
      rerender(<BrandUpdate {...fixture.props} scopeControl={null} />);
      t.is(container.querySelector(`.${style.tabs}`).outerHTML, expected.outerHTML);
      t.is(container.innerHTML, original);
      t.is(queryByRole('radiogroup'), null);
      unmount();
    },
    [WithoutScope, Published]
  );
});

test.serial('scope control can be removed and restored without changing the list', async t => {
  const initialChange = spy();
  const restoredChange = spy();
  const user = userEvent.setup({document});
  const {container, getByRole, queryByRole, rerender} = render(
    <BrandUpdate {...WithoutScope.props} />,
    {wrapper: wrappingComponent}
  );
  const original = container.innerHTML;
  rerender(
    <BrandUpdate
      {...WithoutScope.props}
      scopeControl={{...MyScope.props.scopeControl, onChange: initialChange}}
    />
  );
  await user.click(getByRole('radio', {name: 'All assignments'}));
  t.true(initialChange.calledOnceWithExactly('all'));
  rerender(<BrandUpdate {...WithoutScope.props} scopeControl={null} />);
  t.is(queryByRole('radiogroup'), null);
  t.is(container.innerHTML, original);
  rerender(
    <BrandUpdate
      {...WithoutScope.props}
      scopeControl={{...MyScope.props.scopeControl, value: 'all', onChange: restoredChange}}
    />
  );
  t.truthy(getByRole('radio', {name: 'All assignments', checked: true}));
  getByRole('radio', {name: 'My assignments'}).focus();
  await user.keyboard(' ');
  t.true(restoredChange.calledOnceWithExactly('my'));
  t.is(initialChange.callCount, 1);
  rerender(<BrandUpdate {...WithoutScope.props} />);
  t.is(queryByRole('radiogroup'), null);
  t.is(container.innerHTML, original);
});

test.serial('scope row disappears and recovers when selected navigation ancestors change', t => {
  const {container, getByRole, queryByRole, rerender} = render(<BrandUpdate {...MyScope.props} />, {
    wrapper: wrappingComponent
  });
  t.truthy(getByRole('radiogroup', {name: 'Assignment scope'}));
  const navigationWithoutStatus = [
    [],
    MyScope.props.items.map(item => ({...item, selected: false})),
    MyScope.props.items.map(item => ({
      ...item,
      tabs: item.tabs?.map(tab => ({...tab, selected: false}))
    })),
    MyScope.props.items.map(item => ({
      ...item,
      tabs: item.tabs?.map(tab => ({...tab, subTabs: undefined}))
    }))
  ];
  forEach(items => {
    rerender(<BrandUpdate {...MyScope.props} items={items} />);
    t.is(container.querySelector(`.${style.tabs}`), null);
    t.is(queryByRole('radiogroup'), null);
    rerender(<BrandUpdate {...MyScope.props} />);
    t.truthy(getByRole('link', {name: 'Active'}));
    t.truthy(getByRole('radio', {name: 'My assignments', checked: true}));
  }, navigationWithoutStatus);
});

test.serial('no selected status sub-tab preserves the existing no-tabs result', t => {
  const {container, queryByRole, rerender} = render(
    <BrandUpdate {...Default.props} scopeControl={MyScope.props.scopeControl} />,
    {wrapper: wrappingComponent}
  );
  t.is(container.querySelector(`.${style.tabs}`), null);
  t.is(queryByRole('radiogroup'), null);
  const items = WithoutScope.props.items.map(item => ({
    ...item,
    tabs: item.tabs?.map(tab => ({
      ...tab,
      subTabs: tab.subTabs?.map(subTab => ({...subTab, selected: false}))
    }))
  }));
  rerender(
    <BrandUpdate {...WithoutScope.props} items={items} scopeControl={MyScope.props.scopeControl} />
  );
  t.is(container.querySelector(`.${style.tabs}`), null);
  t.is(queryByRole('radiogroup'), null);
});
