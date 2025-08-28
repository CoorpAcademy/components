import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {act, cleanup, fireEvent} from '@testing-library/react';
import {noop} from 'lodash/fp';
import {renderWithContext} from '../../../util/render-with-context';
import LearnerSkillCard, {updateBackgroundImage} from '..';
import {COLORS} from '../../../variables/colors';
import defaultProps from './fixtures/default';

browserEnv();

const context = {
  translate: key => {
    return key;
  }
};

const mockComputedStyle = backgroundImage => {
  Object.defineProperty(window, 'getComputedStyle', {
    value: element => ({
      backgroundImage:
        element.dataset.testid === 'learner-skill-card-icon-header-wrapper' ? backgroundImage : ''
    })
  });
};

const DEFAULT_BACKGROUND = `linear-gradient(180deg,${COLORS.yellow_100} 0%, ${COLORS.white} 100%)`;
const HOVERED_BACKGROUND = `linear-gradient(180deg ${COLORS.yellow_700}0%, ${COLORS.white} 100%)`;

test('should handle null headerBackgroundRef in updateBackgroundImage', t => {
  const mockRef = {current: null};
  t.notThrows(() => updateBackgroundImage(mockRef, 'mockBackgroundImage'));
});

test('should set background to hovered background on mouseEnter', t => {
  cleanup();
  mockComputedStyle(DEFAULT_BACKGROUND);
  const {getByTestId} = renderWithContext(
    <LearnerSkillCard {...defaultProps.props} onClick={noop} />,
    context
  );

  const wrapper = getByTestId('learner-skill-card-wrapper-0');
  const iconHeaderWrapper = getByTestId('learner-skill-card-icon-header-wrapper');

  t.truthy(wrapper);
  t.truthy(iconHeaderWrapper);

  act(() => {
    fireEvent.mouseEnter(wrapper);
  });
  mockComputedStyle(HOVERED_BACKGROUND);

  const updatedStyle = window.getComputedStyle(iconHeaderWrapper);
  t.is(updatedStyle.backgroundImage, HOVERED_BACKGROUND);
});

test('should set background to defaultBackground on mouseLeave', t => {
  cleanup();
  mockComputedStyle(HOVERED_BACKGROUND);
  const {getByTestId} = renderWithContext(
    <LearnerSkillCard {...defaultProps.props} onClick={noop} />,
    context
  );

  const wrapper = getByTestId('learner-skill-card-wrapper-0');
  const iconHeaderWrapper = getByTestId('learner-skill-card-icon-header-wrapper');

  t.truthy(wrapper);
  t.truthy(iconHeaderWrapper);

  act(() => {
    fireEvent.mouseLeave(wrapper);
  });
  mockComputedStyle(DEFAULT_BACKGROUND);

  const updatedStyle = window.getComputedStyle(iconHeaderWrapper);
  t.is(updatedStyle.backgroundImage, DEFAULT_BACKGROUND);
});
