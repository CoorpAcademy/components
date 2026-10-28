import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, fireEvent, render, within} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import Component from '..';
import fixture from './fixtures/draft';

browserEnv();
test.afterEach.always(cleanup);

const skillInformations = {
  ...fixture.props.skillInformations,
  form: {
    ...fixture.props.skillInformations.form,
    select: {
      ...fixture.props.skillInformations.form.select,
      field: {
        ...fixture.props.skillInformations.form.select.field,
        onChange: () => undefined
      }
    }
  }
};

[
  {parent: true, nested: false, editable: false},
  {parent: false, nested: true, editable: true},
  {parent: undefined, nested: true, editable: true}
].forEach(({parent, nested, editable}) => {
  test.serial(`Skills readOnly=${parent} overrides content readOnly=${nested}`, t => {
    const changes: boolean[] = [];
    const deletions: string[] = [];
    const content = {
      ...fixture.props.content,
      readOnly: nested,
      list: {
        ...fixture.props.content.list,
        items: fixture.props.content.list.items!.map(item => ({
          ...item,
          checkbox: {
            checked: item.checkbox.checked,
            onChange: (value: boolean) => changes.push(value)
          },
          deleteButton: {label: 'Delete', onClick: () => deletions.push(item.ref)}
        }))
      }
    };
    const view = render(
      <Component
        {...fixture.props}
        skillInformations={skillInformations}
        content={content}
        readOnly={parent}
      />,
      {wrapper: wrappingComponent}
    );
    const list = within(view.getByRole('list', {name: 'content list items'}));
    t.is(list.getAllByRole('listitem').length, 3);
    t.is(list.queryAllByRole('checkbox').length, editable ? 3 : 0);
    t.is(list.queryAllByRole('button', {name: 'Delete'}).length, editable ? 3 : 0);
    t.is(view.queryAllByRole('button', {name: 'Add content'}).length, editable ? 1 : 0);
    if (editable) {
      fireEvent.click(list.getAllByRole('checkbox')[0]);
      fireEvent.click(list.getAllByRole('button', {name: 'Delete'})[1]);
      t.deepEqual(changes, [true]);
      t.deepEqual(deletions, ['content_2']);
    }
  });
});
