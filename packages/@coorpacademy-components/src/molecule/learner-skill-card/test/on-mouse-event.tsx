import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {act, cleanup, fireEvent} from '@testing-library/react';
import {noop} from 'lodash/fp';
import {renderWithContext} from '../../../util/render-with-context';
import LearnerSkillCard from '..';
import {COLORS} from '../../../variables/colors';
import defaultProps from './fixtures/default';

browserEnv();

test.afterEach(() => {
  cleanup();
});

const context = {
  translate: (key: string) => {
    return key;
  }
};

const DEFAULT_BACKGROUND = `linear-gradient(180deg, rgb(229, 219, 255) 0%, ${COLORS.white} 100%)`;
const HOVERED_BACKGROUND = `linear-gradient(rgb(191, 168, 255) 0%, ${COLORS.white} 100%)`;

test('should change backgroundImage on mouse enter and on mouse leave', async t => {
  const mockGetComputedStyle = (element: HTMLElement) => ({
    backgroundImage:
      element.dataset.testid === 'learner-skill-card-icon-header-wrapper' ? DEFAULT_BACKGROUND : ''
  });

  Object.defineProperty(window, 'getComputedStyle', {
    value: mockGetComputedStyle
  });

  const {getByTestId} = renderWithContext(
    <LearnerSkillCard {...defaultProps.props} onExploreClick={noop} />,
    context
  );

  const wrapper = getByTestId('learner-skill-card-wrapper');
  const iconHeaderWrapper = getByTestId('learner-skill-card-icon-header-wrapper');

  t.truthy(wrapper);
  t.truthy(iconHeaderWrapper);

  const initialStyle = window.getComputedStyle(iconHeaderWrapper);
  t.deepEqual(initialStyle.backgroundImage, DEFAULT_BACKGROUND);

  await act(async () => {
    await fireEvent.mouseEnter(wrapper);
  });

  Object.defineProperty(window, 'getComputedStyle', {
    value: (element: HTMLElement) => ({
      backgroundImage:
        element.dataset.testid === 'learner-skill-card-icon-header-wrapper'
          ? HOVERED_BACKGROUND
          : ''
    })
  });

  const updatedStyle = window.getComputedStyle(iconHeaderWrapper);
  t.deepEqual(updatedStyle.backgroundImage, HOVERED_BACKGROUND);

  await act(async () => {
    await fireEvent.mouseLeave(wrapper);
  });

  Object.defineProperty(window, 'getComputedStyle', {
    value: (element: HTMLElement) => ({
      backgroundImage:
        element.dataset.testid === 'learner-skill-card-icon-header-wrapper'
          ? DEFAULT_BACKGROUND
          : ''
    })
  });
});
