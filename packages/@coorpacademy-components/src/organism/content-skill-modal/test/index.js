import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, fireEvent} from '@testing-library/react';
import {noop} from 'lodash/fp';
import ContentSkillModal from '..';
import baseModalStyle from '../../../molecule/base-modal/style.css';
import {renderWithContext} from '../../../util/render-with-context';
import BrandUpdate from '../../../template/back-office/brand-update';
import brandFixture from '../../../template/back-office/brand-update/test/fixtures/default';
import modalStyle from '../style.css';
import defaultFixture from './fixtures/default';
import loadingFixture from './fixtures/loading';
import emptyFixture from './fixtures/empty-search';
import assignmentFixture from './fixtures/assignment-modules';

browserEnv();
test.afterEach.always(cleanup);

test.serial('should call onCancel when cancel button is clicked', t => {
  t.plan(3);

  const props = {
    ...defaultFixture.props,
    modal: {
      isOpen: true,
      onCancel: () => t.pass(),
      onConfirm: noop,
      onClose: noop
    }
  };

  const {container} = renderWithContext(<ContentSkillModal {...props} />);
  const cancelButton = container.querySelector("[data-testid='button-link-cancel']");
  t.truthy(cancelButton);
  fireEvent.click(cancelButton);
  t.pass();
});

test.serial('should call onClose when close button is clicked', t => {
  t.plan(3);

  const props = {
    ...defaultFixture.props,
    modal: {
      isOpen: true,
      onCancel: noop,
      onConfirm: noop,
      onClose: () => t.pass()
    }
  };

  const {container} = renderWithContext(<ContentSkillModal {...props} />);
  const closeButton = container.querySelector("[data-testid='close-icon']");
  t.truthy(closeButton);
  fireEvent.click(closeButton);
  t.pass();
});

test.serial('should not render the modal if isOpen is false', t => {
  t.plan(2);

  const props = {
    ...defaultFixture.props,
    modal: {
      isOpen: false,
      onCancel: noop,
      onConfirm: noop,
      onClose: noop
    }
  };

  const {container} = renderWithContext(<ContentSkillModal {...props} />);
  const modal = container.querySelector("[data-testid='modal']");
  t.falsy(modal);
  t.pass();
});

[
  ['Skills texts and enabled confirm remain the defaults', defaultFixture],
  ['loading keeps the loader and default footer', loadingFixture],
  ['empty search retains its content', emptyFixture]
].forEach(([name, fixture]) => {
  test.serial(`legacy ${name}`, t => {
    const view = renderWithContext(<ContentSkillModal {...fixture.props} />);
    t.truthy(view.getByText('Add content'));
    t.truthy(view.getByText('Add courses, video, interactive and more to this skill'));
    t.is(view.getByTestId('button-link-cancel').textContent, 'Cancel');
    t.is(view.getByTestId('button-link-confirm').textContent, 'Add');
    t.false(view.getByTestId('button-link-confirm').disabled);
    t.is(view.container.querySelector('[data-name="list-item-sub-items"]'), null);
    t.is(view.queryByText(/^Select all /), null);
    t.is(view.container.querySelector(`.${baseModalStyle.footerDescriptionError}`), null);
    if (fixture === loadingFixture) {
      t.is(view.container.querySelector('[data-name="content-list"]'), null);
      t.truthy(view.container.querySelector('[data-name="loader"]'));
    } else if (fixture === emptyFixture) {
      t.truthy(view.getByText(fixture.props.contentList.content.emptyResult.title));
    }
  });
});

test.serial('custom modal title description and action labels replace defaults', t => {
  const props = {
    ...defaultFixture.props,
    modal: {
      ...defaultFixture.props.modal,
      title: 'Assign content',
      description: 'Choose modules for this assignment',
      cancelLabel: 'Back',
      confirmLabel: 'Assign'
    }
  };
  const view = renderWithContext(<ContentSkillModal {...props} />);
  t.truthy(view.getByText('Assign content'));
  t.truthy(view.getByText('Choose modules for this assignment'));
  t.is(view.getByTestId('button-link-cancel').textContent, 'Back');
  t.is(view.getByTestId('button-link-confirm').textContent, 'Assign');
  t.is(view.queryByText('Add content'), null);
  view.rerender(<ContentSkillModal {...props} modal={{...props.modal, description: ''}} />);
  t.is(view.queryByText('Choose modules for this assignment'), null);
  t.is(view.queryByText('Add courses, video, interactive and more to this skill'), null);
});

test.serial('error text appears in the error footer', t => {
  const props = {
    ...defaultFixture.props,
    modal: {...defaultFixture.props.modal, error: 'Unable to load content'}
  };
  const view = renderWithContext(<ContentSkillModal {...props} />);
  const error = view.getByText('Unable to load content');
  t.truthy(error.closest('[data-name="modal-footer"]'));
  t.true(error.classList.contains(baseModalStyle.footerDescriptionError));
});

test.serial('disabled confirm does not invoke onConfirm', t => {
  const confirmations = [];
  const props = {
    ...defaultFixture.props,
    modal: {
      ...defaultFixture.props.modal,
      disabled: true,
      onConfirm: () => confirmations.push('confirm')
    }
  };
  const view = renderWithContext(<ContentSkillModal {...props} />);
  t.true(view.getByTestId('button-link-confirm').disabled);
  fireEvent.click(view.getByTestId('button-link-confirm'));
  t.deepEqual(confirmations, []);
});

test.serial('enabled confirm invokes onConfirm once', t => {
  const confirmations = [];
  const view = renderWithContext(
    <ContentSkillModal
      {...defaultFixture.props}
      modal={{
        ...defaultFixture.props.modal,
        onConfirm: () => confirmations.push('confirm')
      }}
    />
  );
  fireEvent.click(view.getByTestId('button-link-confirm'));
  t.deepEqual(confirmations, ['confirm']);
});

test.serial('rerender updates labels error and disabled state', t => {
  const confirmations = [];
  const modal = {...defaultFixture.props.modal, onConfirm: () => confirmations.push('initial')};
  const view = renderWithContext(<ContentSkillModal {...defaultFixture.props} modal={modal} />);
  const updated = {
    ...modal,
    title: 'Choose content',
    description: 'Choose modules',
    cancelLabel: 'Return',
    confirmLabel: 'Save',
    error: 'Try again',
    disabled: true,
    onConfirm: () => confirmations.push('updated')
  };
  view.rerender(<ContentSkillModal {...defaultFixture.props} modal={updated} />);
  t.truthy(view.getByText('Choose content'));
  t.truthy(view.getByText('Choose modules'));
  t.is(view.getByTestId('button-link-cancel').textContent, 'Return');
  t.is(view.getByTestId('button-link-confirm').textContent, 'Save');
  t.true(view.getByText('Try again').classList.contains(baseModalStyle.footerDescriptionError));
  fireEvent.click(view.getByTestId('button-link-confirm'));
  t.deepEqual(confirmations, []);
  view.rerender(
    <ContentSkillModal
      {...defaultFixture.props}
      modal={{
        ...updated,
        error: undefined,
        disabled: false
      }}
    />
  );
  t.is(view.queryByText('Try again'), null);
  t.is(view.container.querySelector(`.${baseModalStyle.footerDescriptionError}`), null);
  t.false(view.getByTestId('button-link-confirm').disabled);
  fireEvent.click(view.getByTestId('button-link-confirm'));
  t.deepEqual(confirmations, ['updated']);
});

[
  ['cancelLabel', 'button-link-cancel', 'Return'],
  ['confirmLabel', 'button-link-confirm', 'Assign']
].forEach(([field, testId, label]) => {
  test.serial(`${field} updates independently on rerender`, t => {
    const base = defaultFixture.props;
    const view = renderWithContext(<ContentSkillModal {...base} />);
    view.rerender(<ContentSkillModal {...base} modal={{...base.modal, [field]: label}} />);
    t.is(view.getByTestId(testId).textContent, label);
    view.rerender(<ContentSkillModal {...base} />);
    t.is(view.getByTestId(testId).textContent, field === 'cancelLabel' ? 'Cancel' : 'Add');
  });
});

test.serial('error alone can change and clear without disabling confirm', t => {
  const base = defaultFixture.props;
  const view = renderWithContext(
    <ContentSkillModal {...base} modal={{...base.modal, error: 'First failure'}} />
  );
  view.rerender(<ContentSkillModal {...base} modal={{...base.modal, error: 'Retry failed'}} />);
  t.is(view.queryByText('First failure'), null);
  t.true(view.getByText('Retry failed').classList.contains(baseModalStyle.footerDescriptionError));
  t.false(view.getByTestId('button-link-confirm').disabled);
  view.rerender(<ContentSkillModal {...base} modal={{...base.modal, error: ''}} />);
  t.is(view.queryByText('Retry failed'), null);
  t.is(view.container.querySelector(`.${baseModalStyle.footerDescriptionError}`), null);
});

test.serial('confirm can be disabled and reenabled without other modal changes', t => {
  const calls = [];
  const base = defaultFixture.props;
  const modal = {...base.modal, onConfirm: () => calls.push('confirm')};
  const view = renderWithContext(<ContentSkillModal {...base} modal={modal} />);
  view.rerender(<ContentSkillModal {...base} modal={{...modal, disabled: true}} />);
  t.true(view.getByTestId('button-link-confirm').disabled);
  fireEvent.click(view.getByTestId('button-link-confirm'));
  t.deepEqual(calls, []);
  view.rerender(<ContentSkillModal {...base} modal={modal} />);
  t.false(view.getByTestId('button-link-confirm').disabled);
  fireEvent.click(view.getByTestId('button-link-confirm'));
  t.deepEqual(calls, ['confirm']);
});

[
  ['onConfirm', 'button-link-confirm'],
  ['onCancel', 'button-link-cancel'],
  ['onClose', 'close-icon']
].forEach(([field, testId]) => {
  test.serial(`${field} replacement alone uses the latest callback`, t => {
    const calls = [];
    const base = defaultFixture.props;
    const modal = {...base.modal, [field]: () => calls.push('initial')};
    const view = renderWithContext(<ContentSkillModal {...base} modal={modal} />);
    view.rerender(
      <ContentSkillModal {...base} modal={{...modal, [field]: () => calls.push('replacement')}} />
    );
    t.deepEqual(calls, []);
    fireEvent.click(view.getByTestId(testId));
    t.deepEqual(calls, ['replacement']);
  });
});

test.serial('empty description and labels are suppressed and undefined restores defaults', t => {
  const base = defaultFixture.props;
  const view = renderWithContext(
    <ContentSkillModal
      {...base}
      modal={{
        ...base.modal,
        title: 'Assign content',
        description: '',
        cancelLabel: '',
        confirmLabel: ''
      }}
    />
  );
  t.truthy(view.getByText('Assign content'));
  t.is(view.queryByText('Add content'), null);
  t.is(view.queryByText('Add courses, video, interactive and more to this skill'), null);
  t.is(view.queryByTestId('button-link-cancel'), null);
  t.is(view.queryByTestId('button-link-confirm'), null);
  view.rerender(
    <ContentSkillModal
      {...base}
      modal={{
        ...base.modal,
        title: undefined,
        description: undefined,
        cancelLabel: undefined,
        confirmLabel: undefined
      }}
    />
  );
  t.truthy(view.getByText('Add content'));
  t.truthy(view.getByText('Add courses, video, interactive and more to this skill'));
  t.is(view.getByTestId('button-link-cancel').textContent, 'Cancel');
  t.is(view.getByTestId('button-link-confirm').textContent, 'Add');
});

[
  ['loading', loadingFixture, undefined],
  ['error', defaultFixture, 'Unable to load content']
].forEach(([name, fixture, error]) => {
  test.serial(`${name} with explicitly disabled confirm blocks submission`, t => {
    const actions = [];
    const view = renderWithContext(
      <ContentSkillModal
        {...fixture.props}
        modal={{
          ...fixture.props.modal,
          disabled: true,
          error,
          onConfirm: () => actions.push('confirm'),
          onCancel: () => actions.push('cancel'),
          onClose: () => actions.push('close')
        }}
      />
    );
    t.true(view.getByTestId('button-link-confirm').disabled);
    fireEvent.click(view.getByTestId('button-link-confirm'));
    t.deepEqual(actions, []);
    fireEvent.click(view.getByTestId('button-link-cancel'));
    fireEvent.click(view.getByTestId('close-icon'));
    t.deepEqual(actions, ['cancel', 'close']);
  });
});

test.serial('select all displays the supplied label above results and invokes onClick once', t => {
  const calls = [];
  const base = defaultFixture.props;
  const props = {
    ...base,
    filters: {...base.filters, onClearAll: () => calls.push('filters')},
    contentList: {
      ...base.contentList,
      content: {
        ...base.contentList.content,
        items: [
          {
            ...base.contentList.content.items[0],
            checkbox: {checked: false, onChange: () => calls.push('selection')}
          }
        ]
      },
      search: {...base.contentList.search, onChange: () => calls.push('search')},
      selectAll: {label: 'Select all 25', onClick: () => calls.push('select all')}
    }
  };
  const view = renderWithContext(<ContentSkillModal {...props} />);
  const button = view.getByRole('button', {name: 'Select all 25'});
  const results = view.container.querySelector('[data-name="content-list"]');
  t.truthy(button.compareDocumentPosition(results) & window.Node.DOCUMENT_POSITION_FOLLOWING);
  t.is(results.querySelectorAll(':scope > li').length, 1);
  fireEvent.click(button);
  t.deepEqual(calls, ['select all']);
});

test.serial('disabled select all cannot invoke onClick', t => {
  const calls = [];
  const view = renderWithContext(
    <ContentSkillModal
      {...defaultFixture.props}
      contentList={{
        ...defaultFixture.props.contentList,
        selectAll: {label: 'Select all 25', disabled: true, onClick: () => calls.push('select all')}
      }}
    />
  );
  const button = view.getByRole('button', {name: 'Select all 25'});
  t.true(button.disabled);
  fireEvent.click(button);
  t.deepEqual(calls, []);
});

test.serial('omitting selectAll preserves existing list header action', t => {
  const calls = [];
  const contentList = {
    ...defaultFixture.props.contentList,
    buttonLink: {label: 'Existing action', onClick: () => calls.push('existing')}
  };
  const view = renderWithContext(
    <ContentSkillModal {...defaultFixture.props} contentList={contentList} />
  );
  fireEvent.click(view.getByRole('button', {name: 'Existing action'}));
  t.deepEqual(calls, ['existing']);
  view.rerender(
    <ContentSkillModal
      {...defaultFixture.props}
      contentList={{
        ...contentList,
        selectAll: {label: 'Select all 25', onClick: () => calls.push('select all')}
      }}
    />
  );
  t.is(view.queryByRole('button', {name: 'Existing action'}), null);
  fireEvent.click(view.getByRole('button', {name: 'Select all 25'}));
  t.deepEqual(calls, ['existing', 'select all']);
  view.rerender(<ContentSkillModal {...defaultFixture.props} contentList={contentList} />);
  t.truthy(view.getByRole('button', {name: 'Existing action'}));
});

test.serial('select all retains supplied availability while loading or in error', t => {
  const calls = [];
  const view = renderWithContext(
    <ContentSkillModal
      {...loadingFixture.props}
      modal={{
        ...loadingFixture.props.modal,
        error: 'Unable to load',
        disabled: true
      }}
      contentList={{
        ...loadingFixture.props.contentList,
        selectAll: {
          label: 'Select all 25',
          disabled: false,
          onClick: () => calls.push('select all')
        }
      }}
    />
  );
  const button = view.getByRole('button', {name: 'Select all 25'});
  t.false(button.disabled);
  fireEvent.click(button);
  t.deepEqual(calls, ['select all']);
});

test.serial('select all updates callback label and disabled state and can be removed', t => {
  const calls = [];
  const base = defaultFixture.props;
  const contentList = {...base.contentList, buttonLink: undefined};
  const initial = {label: 'Select all 25', onClick: () => calls.push('initial')};
  const view = renderWithContext(
    <ContentSkillModal {...base} contentList={{...contentList, selectAll: initial}} />
  );
  const replacement = {...initial, onClick: () => calls.push('replacement')};
  view.rerender(
    <ContentSkillModal {...base} contentList={{...contentList, selectAll: replacement}} />
  );
  fireEvent.click(view.getByRole('button', {name: 'Select all 25'}));
  t.deepEqual(calls, ['replacement']);
  view.rerender(
    <ContentSkillModal
      {...base}
      contentList={{...contentList, selectAll: {...replacement, disabled: true}}}
    />
  );
  const disabled = view.getByRole('button', {name: 'Select all 25'});
  t.true(disabled.disabled);
  fireEvent.click(disabled);
  t.deepEqual(calls, ['replacement']);
  view.rerender(
    <ContentSkillModal
      {...base}
      contentList={{...contentList, selectAll: {...replacement, label: 'Select all 12'}}}
    />
  );
  t.is(view.queryByRole('button', {name: 'Select all 25'}), null);
  const enabled = view.getByRole('button', {name: 'Select all 12'});
  t.false(enabled.disabled);
  fireEvent.click(enabled);
  t.deepEqual(calls, ['replacement', 'replacement']);
  view.rerender(<ContentSkillModal {...base} contentList={contentList} />);
  t.is(view.queryByRole('button', {name: 'Select all 12'}), null);
  t.deepEqual(calls, ['replacement', 'replacement']);
});

test.serial('zero results retain the empty state and disabled select all zero', t => {
  const calls = [];
  const base = emptyFixture.props;
  const view = renderWithContext(
    <ContentSkillModal
      {...base}
      contentList={{
        ...base.contentList,
        selectAll: {label: 'Select all 0', disabled: true, onClick: () => calls.push('select all')}
      }}
    />
  );
  t.truthy(view.getByText(base.contentList.content.emptyResult.title));
  t.is(view.container.querySelector('[data-name="list-item-sub-items"]'), null);
  const button = view.getByRole('button', {name: 'Select all 0'});
  t.true(button.disabled);
  fireEvent.click(button);
  t.deepEqual(calls, []);
});

test.serial('loading and result replacement preserve the supplied select all action', t => {
  const calls = [];
  const base = assignmentFixture.props;
  const contentList = {
    ...base.contentList,
    selectAll: {label: 'Select all 25', onClick: () => calls.push('select all')}
  };
  const view = renderWithContext(<ContentSkillModal {...base} contentList={contentList} />);
  t.true(view.getByLabelText('Getting started').checked);
  view.rerender(<ContentSkillModal {...base} contentList={{...contentList, isFetching: true}} />);
  t.truthy(view.container.querySelector('[data-name="loader"]'));
  t.is(view.queryByLabelText('Getting started'), null);
  fireEvent.click(view.getByRole('button', {name: 'Select all 25'}));
  view.rerender(
    <ContentSkillModal
      {...base}
      contentList={{
        ...contentList,
        isFetching: false,
        content: {
          ...contentList.content,
          items: contentList.content.items.map(course => ({
            ...course,
            subItems: course.subItems.map(item => ({
              ...item,
              checkbox: {...item.checkbox, checked: false}
            }))
          }))
        }
      }}
    />
  );
  t.is(view.container.querySelector('[data-name="loader"]'), null);
  t.false(view.getByLabelText('Getting started').checked);
  t.false(view.getByRole('button', {name: 'Select all 25'}).disabled);
  t.deepEqual(calls, ['select all']);
});

test.serial('module rows flow through modal and ListItems', t => {
  const calls = [];
  const base = assignmentFixture.props;
  const course = base.contentList.content.items[0];
  const props = {
    ...base,
    contentList: {
      ...base.contentList,
      content: {
        ...base.contentList.content,
        items: [
          {
            ...course,
            onClick: () => calls.push('course'),
            checkbox: {checked: false, onChange: () => calls.push('parent')},
            subItems: course.subItems.map((item, index) => ({
              ...item,
              checkbox: {...item.checkbox, onChange: checked => calls.push([index, checked])}
            }))
          }
        ]
      }
    }
  };
  const view = renderWithContext(<ContentSkillModal {...props} />);
  const list = view.container.querySelector('[data-name="list-item-sub-items"]');
  t.truthy(list.closest(`.${modalStyle.containerList}`));
  t.is(list.querySelectorAll('input[type="checkbox"]').length, 3);
  fireEvent.click(view.getByLabelText('Working together'));
  t.deepEqual(calls, [[1, true]]);
});

test.serial(
  'BrandUpdate content popin forwards assignment texts selection and disabled state',
  t => {
    const calls = [];
    const base = assignmentFixture.props;
    const popin = {
      type: 'content',
      ...base,
      modal: {
        ...base.modal,
        disabled: true,
        onConfirm: () => calls.push('confirm'),
        onCancel: () => calls.push('cancel'),
        onClose: () => calls.push('close')
      },
      contentList: {
        ...base.contentList,
        selectAll: {label: 'Select all 25', onClick: () => calls.push('select all')}
      },
      filters: {...base.filters, onClearAll: () => calls.push('filters')}
    };
    const view = renderWithContext(<BrandUpdate {...brandFixture.props} popin={popin} />);
    t.truthy(view.getByText('Assign content'));
    t.truthy(view.getByText('Select the modules to include in this assignment'));
    t.is(view.getByTestId('button-link-confirm').textContent, 'Assign');
    t.is(view.getByTestId('button-link-cancel').textContent, 'Cancel assignment');
    t.true(view.getByTestId('button-link-confirm').disabled);
    t.true(view.getByLabelText('Getting started').checked);
    t.false(view.getByLabelText('Working together').checked);
    t.truthy(view.container.querySelector(`.${modalStyle.filtersContainer}`));
    fireEvent.click(view.getByRole('button', {name: 'Select all 25'}));
    fireEvent.click(view.getByTestId('button-link-confirm'));
    fireEvent.click(view.getByTestId('button-link-cancel'));
    fireEvent.click(view.getByTestId('close-icon'));
    fireEvent.click(view.getByRole('button', {name: 'filters all clear button'}));
    t.deepEqual(calls, ['select all', 'cancel', 'close', 'filters']);
  }
);
