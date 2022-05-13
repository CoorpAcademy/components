import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import forEach from 'lodash/fp/forEach';
import replace from 'lodash/fp/replace';
import {renderWithContext} from '../../../util/render-with-context';
import style from '../style.css'; // eslint-disable-line css-modules/no-unused-class
import Clue from '..';
import defaultFixture from './fixtures/default';

browserEnv();

const checkStyles = (stylesToCheck, container, t) => {
  forEach(([styleToCheck, shouldBePresent]) => {
    const styledClue = container.querySelector(styleToCheck);
    shouldBePresent ? t.truthy(styledClue) : t.falsy(styledClue);
  }, stylesToCheck);
};

const findElementAndCheckText = (container, selector, expectedText, t) => {
  const element = container.querySelector(selector);
  t.is(element.textContent, expectedText);
};

test('should See the clue', t => {
  const context = {
    skin: {},
    translate: key => {
      t.pass();
      return key;
    }
  };
  t.plan(26);

  const clueCardStyle = `.${replace(' ', '.', style.clueCard)}`;
  const flipStyle = `.${replace(' ', '.', style.flip)}`;

  const loadingStyle = `.${replace(' ', '.', style.loading)}`;
  const backContentStyle = `.${replace(' ', '.', style.backContent)}`;

  const clueTextStyle = `.${replace(' ', '.', style.clueText)}`;

  const onClick = e => {
    t.pass();
  };

  const {container, rerender} = renderWithContext(
    <Clue {...defaultFixture.props} onClick={onClick} />,
    {
      context
    }
  );

  const stylesToCheckPreClick = [
    [clueCardStyle, true],
    [flipStyle, false],
    [loadingStyle, false],
    [backContentStyle, true]
  ];

  checkStyles(stylesToCheckPreClick, container, t);

  const link = container.querySelector('a');

  fireEvent.click(link);

  const stylesToCheckPostClick = [
    [clueCardStyle, true],
    [flipStyle, false],
    [loadingStyle, true],
    [backContentStyle, true]
  ];

  checkStyles(stylesToCheckPostClick, container, t);

  rerender(<Clue {...defaultFixture.props} text="This is the clue ..." onClick={onClick} />);
  findElementAndCheckText(container, clueTextStyle, 'This is the clue ...', t);

  const stylesToCheckPostTextChange = [
    [clueCardStyle, true],
    [flipStyle, true],
    [loadingStyle, false],
    [backContentStyle, true]
  ];

  checkStyles(stylesToCheckPostTextChange, container, t);

  rerender(<Clue {...defaultFixture.props} text="" onClick={onClick} />);
  findElementAndCheckText(container, clueTextStyle, '', t);

  rerender(<Clue {...defaultFixture.props} text="This is the new clue ..." onClick={onClick} />);
  findElementAndCheckText(container, clueTextStyle, 'This is the new clue ...', t);
});

test('should clue color is the primary color if color is defined on skin', t => {
  const context = {
    skin: {
      common: {
        primary: '#FF0000'
      }
    },
    translate: key => {
      t.pass();
      return key;
    }
  };
  t.plan(6);

  const {container} = renderWithContext(<Clue {...defaultFixture.props} />, {
    context
  });

  // inline  '#FF0000' becomes  rgb(255, 0, 0)
  const cardReverse = container.querySelector(
    '[data-name="clue-back-side"][style="background-color: rgb(255, 0, 0);"]'
  );

  t.truthy(cardReverse);

  const seeClueCta = cardReverse.querySelector('a[data-name="cta"]');

  t.truthy(seeClueCta);

  fireEvent.click(seeClueCta);
});

test('should clue color is the fallback primary color if color not defined on skin', t => {
  const context = {
    skin: {
      common: {
        secondary: '#FF0000'
      }
    },
    translate: key => {
      t.pass();
      return key;
    }
  };
  t.plan(3);

  const {container} = renderWithContext(<Clue {...defaultFixture.props} />, {
    context
  });

  // inline  '#00B0FF' becomes  rgb(0, 176, 255)
  const cardReverse = container.querySelector(
    '[data-name="clue-back-side"][style="background-color: rgb(0, 176, 255);"]'
  );

  t.truthy(cardReverse);
});
