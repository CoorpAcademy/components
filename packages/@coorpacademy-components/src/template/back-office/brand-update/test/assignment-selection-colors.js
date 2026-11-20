import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Provider from '../../../../atom/provider';
import InputSwitch from '../../../../atom/input-switch';
import CheckboxWithTitle from '../../../../atom/checkbox-with-title';
import {context} from '../../../../test/helpers/render-component';
import BrandUpdate from '..';
import selected from './fixtures/assignment-edition-audience-access-selected';

browserEnv();
test.afterEach.always(cleanup);
const skin = {common: {primary: '#FF7043'}};

test.serial(
  'assignment content selection and notification switches stay Coorpmanager blue under an orange brand',
  t => {
    const contents = selected.props.content.contents;
    const props = {
      ...selected.props,
      content: {
        ...selected.props.content,
        contents: {
          ...contents,
          checkboxWithTitle: {...contents.checkboxWithTitle, checked: true},
          list: {
            ...contents.list,
            items: contents.list.items.map(item => ({
              ...item,
              checkbox: {...item.checkbox, checked: true}
            }))
          }
        }
      }
    };
    const view = render(
      <Provider {...context} skin={skin}>
        <BrandUpdate {...props} />
      </Provider>
    );
    const checks = [
      ...view.container.querySelectorAll('#assignment-contents input[type="checkbox"]:checked')
    ];
    t.is(checks.length, 7);
    checks.forEach(input => {
      t.is(input.nextElementSibling.style.backgroundColor, 'rgb(0, 97, 255)');
      t.is(input.nextElementSibling.style.borderColor, '#0061ff');
    });
    const switches = [
      ...view.container.querySelectorAll(
        '#assignment-notifications [data-name="input-switch-label"]'
      )
    ];
    t.true(switches.length > 0);
    switches.forEach(label => t.is(label.style.backgroundColor, 'rgb(0, 97, 255)'));
  }
);

test.serial('default switches and checkboxes keep the brand primary color', t => {
  const view = render(
    <Provider {...context} skin={skin}>
      <div>
        <CheckboxWithTitle checked title="Brand selection" onChange={() => undefined} />
        <InputSwitch value title="Brand switch" />
      </div>
    </Provider>
  );
  const checkbox = view.getAllByRole('checkbox')[0];
  t.is(checkbox.nextElementSibling.style.backgroundColor, 'rgb(255, 112, 67)');
  t.is(
    view.container.querySelector('[data-name="input-switch-label"]').style.backgroundColor,
    'rgb(255, 112, 67)'
  );
});
