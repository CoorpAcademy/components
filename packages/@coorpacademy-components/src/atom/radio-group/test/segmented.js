import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {render, cleanup, fireEvent, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {spy} from 'sinon';
import forEach from 'lodash/fp/forEach';
import RadioGroup from '..';
import {renderComponent, wrappingComponent} from '../../../test/helpers/render-component';
import Default from './fixtures/default';
import LastSelected from './fixtures/last-selected';
import Empty from './fixtures/empty';

browserEnv();
document.getSelection = () => ({
  addRange: () => {},
  removeAllRanges: () => {}
});
test.afterEach.always(cleanup);

const props = {
  options: [
    {label: 'My assignments', value: 'my'},
    {label: 'All assignments', value: 'all'}
  ],
  value: 'my',
  'aria-label': 'Assignment scope'
};

test.serial('renders a named radiogroup with exactly one checked option', t => {
  const {getByRole, getAllByRole, rerender} = render(<RadioGroup {...props} />, {
    wrapper: wrappingComponent
  });
  t.truthy(getByRole('radiogroup', {name: 'Assignment scope'}));
  t.is(getAllByRole('radio').length, 2);
  const my = getByRole('radio', {name: 'My assignments'});
  const all = getByRole('radio', {name: 'All assignments'});
  t.is(my.getAttribute('aria-checked'), 'true');
  t.is(all.getAttribute('aria-checked'), 'false');
  t.is(my.tabIndex, 0);
  t.is(all.tabIndex, -1);
  t.is(my.type, 'button');
  t.is(all.type, 'button');
  rerender(<RadioGroup {...props} value="all" />);
  t.is(my.getAttribute('aria-checked'), 'false');
  t.is(all.getAttribute('aria-checked'), 'true');
  t.is(my.tabIndex, -1);
  t.is(all.tabIndex, 0);
});

test.serial('click requests the other value and selection waits for parent rerender', async t => {
  const onChange = spy();
  const user = userEvent.setup({document});
  const {getByRole, rerender} = render(<RadioGroup {...props} onChange={onChange} />, {
    wrapper: wrappingComponent
  });
  const my = getByRole('radio', {name: 'My assignments'});
  const all = getByRole('radio', {name: 'All assignments'});
  await user.click(my);
  t.false(onChange.called);
  await user.click(all);
  t.true(onChange.calledOnceWithExactly('all'));
  t.is(my.getAttribute('aria-checked'), 'true');
  t.is(all.getAttribute('aria-checked'), 'false');
  rerender(<RadioGroup {...props} value="all" onChange={onChange} />);
  await user.click(all);
  t.is(onChange.callCount, 1);
  await user.click(my);
  t.deepEqual(onChange.args, [['all'], ['my']]);
  t.is(all.getAttribute('aria-checked'), 'true');
  rerender(<RadioGroup {...props} onChange={onChange} />);
  t.is(my.getAttribute('aria-checked'), 'true');
});

test.serial('arrow keys move focus, wrap, and request the focused value', t => {
  const onChange = spy();
  const {getByRole, rerender} = render(<RadioGroup {...props} onChange={onChange} />, {
    wrapper: wrappingComponent
  });
  const my = getByRole('radio', {name: 'My assignments'});
  const all = getByRole('radio', {name: 'All assignments'});
  my.focus();
  t.false(fireEvent.keyDown(my, {key: 'ArrowRight'}));
  t.is(document.activeElement, all);
  t.true(onChange.calledOnceWithExactly('all'));
  t.is(my.getAttribute('aria-checked'), 'true');
  // Parent has not rerendered: the next arrow must still start from focused All.
  t.false(fireEvent.keyDown(all, {key: 'ArrowDown'}));
  t.is(document.activeElement, my);
  t.is(onChange.callCount, 1);
  t.false(fireEvent.keyDown(my, {key: 'ArrowLeft'}));
  t.is(document.activeElement, all);
  t.deepEqual(onChange.args, [['all'], ['all']]);
  rerender(<RadioGroup {...props} value="all" onChange={onChange} />);
  t.is(all.getAttribute('aria-checked'), 'true');
  t.false(fireEvent.keyDown(all, {key: 'ArrowUp'}));
  t.is(document.activeElement, my);
  t.deepEqual(onChange.args, [['all'], ['all'], ['my']]);
  rerender(<RadioGroup {...props} onChange={onChange} />);
  t.is(my.getAttribute('aria-checked'), 'true');
});

test.serial('Tab enters the selected option and Space or Enter activates once', async t => {
  const onChange = spy();
  const user = userEvent.setup({document});
  const {getByRole} = render(
    <div>
      <button type="button">Before</button>
      <RadioGroup {...props} value="all" onChange={onChange} />
      <button type="button">After</button>
    </div>,
    {wrapper: wrappingComponent}
  );
  const my = getByRole('radio', {name: 'My assignments'});
  const all = getByRole('radio', {name: 'All assignments'});
  getByRole('button', {name: 'Before'}).focus();
  await user.tab();
  t.is(document.activeElement, all);
  await user.tab();
  t.is(document.activeElement, getByRole('button', {name: 'After'}));
  my.focus();
  await user.keyboard(' ');
  t.true(onChange.calledOnceWithExactly('my'));
  await user.keyboard('{Enter}');
  t.deepEqual(onChange.args, [['my'], ['my']]);
  await user.keyboard('x{Home}{End}');
  t.is(onChange.callCount, 2);
  all.focus();
  await user.keyboard(' {Enter}');
  t.is(onChange.callCount, 2);
});

test.serial('click and keyboard scope changes do not submit a surrounding form', async t => {
  const onChange = spy();
  const onSubmit = spy();
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit();
  }
  const user = userEvent.setup({document});
  const {getByRole} = render(
    <form onSubmit={handleSubmit}>
      <RadioGroup {...props} onChange={onChange} />
      <button type="submit">Save</button>
    </form>,
    {wrapper: wrappingComponent}
  );
  await user.click(getByRole('radio', {name: 'All assignments'}));
  await user.keyboard('{Enter} ');
  t.deepEqual(onChange.args, [['all'], ['all'], ['all']]);
  await user.keyboard('{ArrowLeft}');
  t.is(document.activeElement, getByRole('radio', {name: 'My assignments'}));
  t.is(onChange.callCount, 3);
  t.false(onSubmit.called);
  await user.click(getByRole('button', {name: 'Save'}));
  t.true(onSubmit.calledOnce);
});

test.serial('keyboard navigation stays within its own scope control', async t => {
  const firstChange = spy();
  const secondChange = spy();
  const user = userEvent.setup({document});
  const {getByRole} = render(
    <div>
      <RadioGroup {...props} aria-label="First list scope" onChange={firstChange} />
      <RadioGroup {...props} aria-label="Second list scope" value="all" onChange={secondChange} />
    </div>,
    {wrapper: wrappingComponent}
  );
  const first = within(getByRole('radiogroup', {name: 'First list scope'}));
  const second = within(getByRole('radiogroup', {name: 'Second list scope'}));
  first.getByRole('radio', {name: 'My assignments'}).focus();
  await user.keyboard('{ArrowRight}');
  t.is(document.activeElement, first.getByRole('radio', {name: 'All assignments'}));
  t.true(firstChange.calledOnceWithExactly('all'));
  t.false(secondChange.called);
  second.getByRole('radio', {name: 'All assignments'}).focus();
  await user.keyboard('{ArrowUp}');
  t.is(document.activeElement, second.getByRole('radio', {name: 'My assignments'}));
  t.true(secondChange.calledOnceWithExactly('my'));
  t.is(firstChange.callCount, 1);
  t.is(first.getByRole('radio', {checked: true}).textContent, 'My assignments');
  t.is(second.getByRole('radio', {checked: true}).textContent, 'All assignments');
});

test.serial('activation uses replaced options and callback', async t => {
  const previousChange = spy();
  const currentChange = spy();
  const user = userEvent.setup({document});
  const {getByRole, rerender} = render(<RadioGroup {...props} onChange={previousChange} />, {
    wrapper: wrappingComponent
  });
  const updatedProps = {
    options: [
      {label: 'Toutes les missions', value: 'équipe / all'},
      {label: 'Mes missions', value: '0'}
    ],
    value: 'équipe / all',
    'aria-label': 'Périmètre des missions',
    onChange: currentChange
  };
  rerender(<RadioGroup {...updatedProps} />);
  t.truthy(getByRole('radiogroup', {name: 'Périmètre des missions'}));
  const all = getByRole('radio', {name: 'Toutes les missions', checked: true});
  const my = getByRole('radio', {name: 'Mes missions', checked: false});
  all.focus();
  await user.keyboard('{ArrowLeft}');
  t.is(document.activeElement, my);
  t.true(currentChange.calledOnceWithExactly('0'));
  await user.keyboard('{Enter}');
  t.deepEqual(currentChange.args, [['0'], ['0']]);
  t.is(all.getAttribute('aria-checked'), 'true');
  rerender(<RadioGroup {...updatedProps} value="0" />);
  await user.click(all);
  t.deepEqual(currentChange.args, [['0'], ['0'], ['équipe / all']]);
  t.is(my.getAttribute('aria-checked'), 'true');
  t.false(previousChange.called);
});

test.serial('adding and removing options switches modes without mixing legacy radios', async t => {
  const onChange = spy();
  const user = userEvent.setup({document});
  const {container, getByRole, getByLabelText, queryByRole, rerender} = render(
    <RadioGroup {...Default.props} onChange={onChange} />,
    {wrapper: wrappingComponent}
  );
  t.true(getByLabelText('All').checked);
  rerender(<RadioGroup {...Default.props} {...props} onChange={onChange} />);
  t.truthy(getByRole('radiogroup', {name: 'Assignment scope'}));
  t.is(container.querySelectorAll('input').length, 0);
  t.truthy(getByRole('radio', {name: 'My assignments', checked: true}));
  await user.click(getByRole('radio', {name: 'All assignments'}));
  t.true(onChange.calledOnceWithExactly('all'));
  rerender(<RadioGroup {...Default.props} onChange={onChange} />);
  t.is(queryByRole('radiogroup'), null);
  t.is(container.querySelectorAll('input[type="radio"]').length, 3);
  t.true(getByLabelText('All').checked);
  fireEvent.click(getByLabelText('Microlearning'));
  t.deepEqual(onChange.args, [['all'], ['test1']]);
  rerender(<RadioGroup {...Default.props} {...props} value="all" onChange={onChange} />);
  t.truthy(getByRole('radio', {name: 'All assignments', checked: true}));
  t.is(container.querySelectorAll('input').length, 0);
  t.is(onChange.callCount, 2);
});

test.serial('legacy list props retain existing rendering and callbacks', t => {
  forEach(
    fixture => {
      const onChange = spy();
      const {container, unmount} = render(<RadioGroup {...fixture.props} onChange={onChange} />, {
        wrapper: wrappingComponent
      });
      t.is(container.querySelector('[role="radiogroup"]'), null);
      t.is(container.querySelector('button'), null);
      const radios = container.querySelectorAll('input[type="radio"]');
      t.is(radios.length, fixture === Empty ? 0 : 3);
      if (fixture !== Empty) {
        t.is(
          container.querySelector('input:checked').value,
          fixture === Default ? 'test2' : 'test3'
        );
        t.deepEqual(
          [...container.querySelectorAll('label')].map(label => label.textContent),
          ['Microlearning', 'All', 'Courses']
        );
        fireEvent.click(radios[0]);
        t.true(onChange.calledOnceWithExactly('test1'));
      } else {
        t.is(
          renderComponent(t, RadioGroup, fixture),
          '<div class="radio-group__setup radio-group__container" style="border-color:#00B0FF"></div>'
        );
      }
      unmount();
    },
    [Default, LastSelected, Empty]
  );
});
