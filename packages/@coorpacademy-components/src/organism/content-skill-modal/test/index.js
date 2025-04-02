import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import {noop} from 'lodash/fp';
import ContentSkillModal from '..';
import {renderWithContext} from '../../../util/render-with-context';
import defaultFixture from './fixtures/default';

browserEnv();

test('should call onCancel when cancel button is clicked', t => {
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
  const cancelButton = container.querySelector("[data-testid='button-link-__cancel']");
  t.truthy(cancelButton);
  fireEvent.click(cancelButton);
  t.pass();
});

test('should call onClose when close button is clicked', t => {
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

test('should not render the modal if isOpen is false', t => {
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
