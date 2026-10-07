import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, fireEvent} from '@testing-library/react';
import ProgressWrapper from '..';
import {renderWithContext} from '../../../util/render-with-context';
import badgeWithLinkedin from './fixtures/badge-with-linkedin';
import fixtureComplete from './fixtures/complete';

browserEnv();

const context = {translate: (key: string) => key};
const SELECTOR = '[data-name="publish-linkedin-button"]';
const LINKEDIN_URL =
  'https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fonboarding.coorpacademy.com%2Fcertifications%2Fcert_gNzNSfjCqQ';

test.afterEach(() => {
  cleanup();
});

// S1 line 1 — button renders when a share URL is provided & the certification is complete
test('renders the LinkedIn share button on a completed badge', t => {
  const {container} = renderWithContext(<ProgressWrapper {...badgeWithLinkedin.props} />, {
    context
  });
  t.truthy(
    container.querySelector(SELECTOR),
    'LinkedIn button should render when linkedinShareUrl is set & progression is 100'
  );
});

// S1 line 2 + §4 security — opens the URL in a new tab with safe rel attributes
test('LinkedIn button opens the share URL safely in a new tab', t => {
  const {container} = renderWithContext(<ProgressWrapper {...badgeWithLinkedin.props} />, {
    context
  });
  const button = container.querySelector(SELECTOR) as HTMLAnchorElement;
  t.truthy(button);
  t.is(button.getAttribute('target'), '_blank');
  t.is(button.getAttribute('rel'), 'noopener noreferrer');
  t.is(button.getAttribute('href'), LINKEDIN_URL);
});

// S1 line 3 — clicking fires the analytics callback without blocking navigation
test('clicking the LinkedIn button fires onLinkedinShareClick', t => {
  t.plan(2);
  let clicks = 0;
  const props = {
    ...badgeWithLinkedin.props,
    sections: badgeWithLinkedin.props.sections.map(section =>
      section.type === 'badge'
        ? {
            ...section,
            onLinkedinShareClick: () => {
              clicks += 1;
            }
          }
        : section
    )
  };
  const {container} = renderWithContext(<ProgressWrapper {...props} />, {context});
  const button = container.querySelector(SELECTOR) as Element;
  t.truthy(button);

  // Prevent jsdom from attempting a real (unimplemented) navigation on the anchor.
  const preventNavigation = (event: Event) => event.preventDefault();
  document.addEventListener('click', preventNavigation);
  fireEvent.click(button);
  document.removeEventListener('click', preventNavigation);

  t.is(clicks, 1);
});

// S3 line 1 + §5 — no URL means no button (backward compatible render)
test('renders no LinkedIn button when linkedinShareUrl is absent', t => {
  const {container} = renderWithContext(<ProgressWrapper {...fixtureComplete.props} />, {context});
  t.is(container.querySelector(SELECTOR), null);
});

// §5 edge case — an empty string is treated as absent
test('renders no LinkedIn button when linkedinShareUrl is an empty string', t => {
  const props = {
    ...badgeWithLinkedin.props,
    sections: badgeWithLinkedin.props.sections.map(section =>
      section.type === 'badge' ? {...section, linkedinShareUrl: ''} : section
    )
  };
  const {container} = renderWithContext(<ProgressWrapper {...props} />, {context});
  t.is(container.querySelector(SELECTOR), null);
});

// S2 line 1 — locked certification (progression < 100) hides the share button
test('renders no LinkedIn button while the certification is locked', t => {
  const props = {...badgeWithLinkedin.props, progression: 37};
  const {container} = renderWithContext(<ProgressWrapper {...props} />, {context});
  t.is(container.querySelector(SELECTOR), null);
});

// §5 edge case — button lives on the badge section only, never the diploma
test('renders the LinkedIn button on the badge section only, not the diploma', t => {
  const {container} = renderWithContext(<ProgressWrapper {...badgeWithLinkedin.props} />, {
    context
  });
  const badgeSection = container.querySelector('[data-name="badge"]') as Element;
  const diplomaSection = container.querySelector('[data-name="diploma"]') as Element;
  t.truthy(
    badgeSection.querySelector(SELECTOR),
    'badge section should contain the LinkedIn button'
  );
  t.is(
    diplomaSection.querySelector(SELECTOR),
    null,
    'diploma section should not contain the LinkedIn button'
  );
  t.is(container.querySelectorAll(SELECTOR).length, 1, 'exactly one LinkedIn button overall');
});
