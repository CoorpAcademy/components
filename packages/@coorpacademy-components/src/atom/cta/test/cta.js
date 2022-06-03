import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import {renderWithContext} from '../../../util/render-with-context';
import Cta from '..';
import ctaFixture from './fixtures/primary';
import logoutFixture from './fixtures/logout';

browserEnv();

const context = {
  skin: {
    common: {
      primary: '#FF7043'
    }
  }
};

test('should be considered as hovered when mouse enters', t => {
  const unhoveredCtaLinkStyle = {
    'background-color': 'rgb(255, 112, 67)',
    'border-bottom-color': '#ff7043',
    'border-color': '#ff7043',
    'border-left-color': '#ff7043',
    'border-right-color': '#ff7043',
    'border-top-color': '#ff7043'
  };

  const {container} = renderWithContext(<Cta {...ctaFixture.props} />, {context});
  const cta = container.querySelector('[data-name="cta"]');

  t.truthy(cta);
  t.deepEqual(cta.style._values, unhoveredCtaLinkStyle);

  fireEvent.mouseOver(cta);

  t.deepEqual(cta.style._values, {
    'background-color': 'rgb(230, 104, 66)',
    'border-bottom-color': 'rgb(230, 104, 66)',
    'border-color': 'rgb(230, 104, 66)',
    'border-left-color': 'rgb(230, 104, 66)',
    'border-right-color': 'rgb(230, 104, 66)',
    'border-top-color': 'rgb(230, 104, 66)'
  });

  fireEvent.mouseLeave(cta);

  t.deepEqual(cta.style._values, unhoveredCtaLinkStyle);
});

test("The hover action should not change the cta's (Link wrapper) style when the mouse enters the logout label", t => {
  const {container} = renderWithContext(<Cta {...logoutFixture.props} />, {context});
  const logout = container.querySelector('[data-name="cta-logout-label"]');
  let cta = container.querySelector('[data-name="cta"]');

  // no styles should be returned for logout either on hover/ unhovered
  t.deepEqual(cta.style._values, {});

  fireEvent.mouseOver(logout);

  cta = container.querySelector('[data-name="cta"]');
  t.deepEqual(cta.style._values, {});

  fireEvent.mouseLeave(logout);

  cta = container.querySelector('[data-name="cta"]');
  t.deepEqual(cta.style._values, {});
});

test('Onclick test', t => {
  t.plan(3);

  const onClick = () => {
    t.pass();
  };

  const {container, rerender} = renderWithContext(<Cta {...ctaFixture.props} onClick={onClick} />, {
    context
  });
  let cta = container.querySelector('[data-name="cta"]');
  t.truthy(cta);

  fireEvent.click(cta);

  const onClick2 = () => {
    t.fail();
  };

  rerender(<Cta {...ctaFixture.props} disabled onClick={onClick2} />);

  cta = container.querySelector('[data-name="cta"]');
  t.truthy(cta);

  fireEvent.click(cta);
});
