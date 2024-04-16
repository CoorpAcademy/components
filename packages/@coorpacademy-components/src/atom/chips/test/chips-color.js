import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import Chips from '..';
import {renderWithContext} from '../../../util/render-with-context';

browserEnv();
test('should chips background color be the primary color if color is defined on skin and chip is selected', t => {
  const context = {
    skin: {
      common: {
        primary: '#FF0000'
      }
    }
  };
  const props = {
    text: 'Agility',
    selected: true,
    onClick: () => {}
  };

  const {container} = renderWithContext(<Chips {...props} />, {context});

  const chip = container.querySelector(
    `[data-name="Agility"][style="background-color: rgb(255, 0, 0);"]`
  );

  t.truthy(chip);
});

test('should chips icon color be the primary color if color is defined on skin and chip is selected', t => {
  const context = {
    skin: {
      common: {
        primary: '#FF0000'
      }
    }
  };
  const props = {
    text: 'Agility',
    selected: true,
    onClick: () => {}
  };
  const {container} = renderWithContext(<Chips {...props} />, {context});

  const chipIcon = container.querySelector('.chips__selectedIconWrapper');

  t.truthy(chipIcon);
  t.is(chipIcon.style.color, 'rgb(255, 0, 0)');
});
