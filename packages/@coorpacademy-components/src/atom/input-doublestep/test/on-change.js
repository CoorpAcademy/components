import test from 'ava';
import browserEnv from 'browser-env';
import forEach from 'lodash/fp/forEach';
import replace from 'lodash/fp/replace';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import style from '../style.css';
import InputDoubleStep from '..';
import inputConfirmFixture from './fixtures/input-confirm';

browserEnv();

const checkStyles = (stylesToCheck, container, t) => {
  forEach(([styleToCheck, shouldBePresent]) => {
    const styledElement = container.querySelector(styleToCheck);
    shouldBePresent ? t.truthy(styledElement) : t.falsy(styledElement);
  }, stylesToCheck);
};

test('should call the onChange function on change with inputConfirm fixture', t => {
  const deleteStyle = `.${replace(' ', '.', style.delete)}`;
  const inputStyle = `.${replace(' ', '.', style.input)}`;
  const sectionStyle = `.${replace(' ', '.', style.sectionConfirm)}`;
  const cancelStyle = `.${replace(' ', '.', style.cancel)}`;
  const toggleStyle = `.${replace(' ', '.', style.toggle)}`;

  t.plan(21);
  const onClick = () => {
    t.pass();
  };
  const {container} = render(<InputDoubleStep {...inputConfirmFixture.props} onClick={onClick} />);

  const stylesToCheckPreClick = [
    [deleteStyle, false],
    [inputStyle, false],
    [cancelStyle, false],
    [sectionStyle, false],
    [toggleStyle, true]
  ];

  checkStyles(stylesToCheckPreClick, container, t);

  container.querySelector(toggleStyle);

  fireEvent.click(container.querySelector(toggleStyle));

  const stylesToCheckPostClick = [
    [sectionStyle, true],
    [inputStyle, true],
    [deleteStyle, true],
    [cancelStyle, true],
    [toggleStyle, false]
  ];

  checkStyles(stylesToCheckPostClick, container, t);

  fireEvent.click(container.querySelector(cancelStyle));

  checkStyles(stylesToCheckPreClick, container, t);

  fireEvent.click(container.querySelector(toggleStyle));

  checkStyles(stylesToCheckPostClick, container, t);

  fireEvent.click(container.querySelector(deleteStyle), {
    defaultPrevented: true
  });
});
