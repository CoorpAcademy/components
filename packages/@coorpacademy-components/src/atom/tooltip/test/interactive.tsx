import test from 'ava';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import browserEnv from 'browser-env';
import {act, cleanup, fireEvent, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import delay from 'delay';
import Tooltip from '..';
import Tag from '../../tag';

// browser-env uses an older jsdom without the Selection API. These tests exercise focus, not text selection.
browserEnv();
document.getSelection = () => null;
// Older jsdom emits focus/blur but not the bubbling events React 17 delegates.
document.addEventListener(
  'focus',
  event => fireEvent.focusIn(event.target as Element, {relatedTarget: event.relatedTarget}),
  true
);
document.addEventListener(
  'blur',
  event => fireEvent.focusOut(event.target as Element, {relatedTarget: event.relatedTarget}),
  true
);
test.afterEach.always(cleanup);

const props = {
  interactive: true,
  'aria-label': 'Catalogue playlists',
  closeToolTipInformationTextAriaLabel: 'Press Escape to close',
  TooltipContent: <Tag label="Leadership" type="info" />,
  delayHide: 15
};

const Scope = (extra = {}) => (
  <div>
    <button type="button">Before</button>
    <div data-testid="clipped-card" style={{overflow: 'hidden'}}>
      <Tooltip {...props} {...extra} />
    </div>
    <button type="button">After</button>
  </div>
);

test.serial('hover opens rich content outside a clipped card and preserves its tag markup', t => {
  const view = render(Scope());
  const trigger = view.getByRole('button', {name: 'Catalogue playlists'});
  t.is(view.queryByRole('dialog'), null);
  fireEvent.mouseOver(trigger);
  const panel = view.getByRole('dialog', {name: 'Catalogue playlists'});
  t.is(panel.parentElement, document.body);
  t.false(view.getByTestId('clipped-card').contains(panel));
  t.truthy(panel.querySelector('[data-name="content-tag-Leadership"]'));
  t.is(trigger.getAttribute('aria-controls'), panel.id);
  t.is(trigger.getAttribute('aria-haspopup'), 'dialog');
  t.is(trigger.getAttribute('aria-expanded'), 'true');
});

test.serial(
  'pointer crosses from trigger to panel, remains through scrolling, then leaves',
  async t => {
    const view = render(Scope());
    const trigger = view.getByRole('button', {name: 'Catalogue playlists'});
    fireEvent.mouseOver(trigger);
    const panel = view.getByRole('dialog');
    fireEvent.mouseOut(trigger);
    fireEvent.mouseOver(panel);
    fireEvent.scroll(panel);
    await act(async () => {
      await delay(30);
    });
    t.is(view.getByRole('dialog'), panel);
    fireEvent.mouseOut(panel);
    await act(async () => {
      await delay(30);
    });
    t.is(view.queryByRole('dialog'), null);
  }
);

test.serial(
  'keyboard enters scrollable content, Shift+Tab returns and Tab continues after the card',
  async t => {
    const view = render(Scope());
    const user = userEvent.setup({document});
    await user.tab();
    await user.tab();
    const trigger = view.getByRole('button', {name: 'Catalogue playlists'});
    t.is(document.activeElement, trigger);
    const panel = view.getByRole('dialog');
    await user.tab();
    t.is(document.activeElement, panel);
    await user.tab({shift: true});
    t.is(document.activeElement, trigger);
    await user.tab();
    await user.tab();
    t.is(document.activeElement, view.getByRole('button', {name: 'After'}));
    t.is(view.queryByRole('dialog'), null);
  }
);

test.serial(
  'Escape from content restores focus without reopening, and focus can reopen later',
  async t => {
    const view = render(Scope());
    const user = userEvent.setup({document});
    await user.tab();
    await user.tab();
    await user.tab();
    await user.keyboard('{Escape}');
    const trigger = view.getByRole('button', {name: 'Catalogue playlists'});
    t.is(document.activeElement, trigger);
    t.is(trigger.getAttribute('aria-expanded'), 'false');
    t.is(view.queryByRole('dialog'), null);
    await user.tab({shift: true});
    await user.tab();
    t.truthy(view.getByRole('dialog'));
  }
);

test.serial('Escape on the trigger closes while Shift+Tab navigates normally', async t => {
  const view = render(Scope());
  const user = userEvent.setup({document});
  await user.tab();
  await user.tab();
  await user.keyboard('{Escape}');
  t.is(view.queryByRole('dialog'), null);
  await user.tab({shift: true});
  t.is(document.activeElement, view.getByRole('button', {name: 'Before'}));
});

test.serial('click opens; an outside click closes without stealing the outside focus', async t => {
  const view = render(Scope());
  const user = userEvent.setup({document});
  await user.click(view.getByRole('button', {name: 'Catalogue playlists'}));
  t.truthy(view.getByRole('dialog'));
  await user.click(view.getByRole('button', {name: 'After'}));
  t.is(view.queryByRole('dialog'), null);
  t.is(document.activeElement, view.getByRole('button', {name: 'After'}));
});

test.serial('a focused panel stays open when the pointer leaves it', async t => {
  const view = render(Scope());
  const user = userEvent.setup({document});
  await user.tab();
  await user.tab();
  await user.tab();
  const panel = view.getByRole('dialog');
  fireEvent.mouseOver(panel);
  fireEvent.mouseOut(panel);
  await act(async () => {
    await delay(30);
  });
  t.is(view.getByRole('dialog'), panel);
});

test.serial(
  'custom anchors and content components receive their own accessible markup',
  async t => {
    const Anchor = (attributes: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
      <button {...attributes} type="button">
        Conditions
      </button>
    );
    const Content = () => <p>Department is Finance</p>;
    const view = render(Scope({AnchorElement: Anchor, TooltipContent: Content, iconSize: 'big'}));
    const user = userEvent.setup({document});
    await user.click(view.getByRole('button', {name: 'Catalogue playlists'}));
    t.true(view.getByRole('dialog').textContent?.includes('Department is Finance'));
  }
);

test.serial(
  'links inside rich content remain usable and do not trap keyboard navigation',
  async t => {
    const view = render(
      Scope({
        TooltipContent: (
          <div>
            <a href="#first">First</a>
            <a href="#last">Last</a>
          </div>
        )
      })
    );
    const user = userEvent.setup({document});
    await user.tab();
    await user.tab();
    await user.tab();
    await user.tab();
    t.is(document.activeElement, view.getByRole('link', {name: 'First'}));
    await user.tab({shift: true});
    t.is(document.activeElement, view.getByRole('button', {name: 'Catalogue playlists'}));
    await user.tab();
    await user.tab();
    await user.tab();
    t.is(document.activeElement, view.getByRole('link', {name: 'Last'}));
    await user.tab();
    t.is(document.activeElement, view.getByRole('button', {name: 'After'}));
  }
);

test.serial(
  'resize and ancestor scroll reposition without dismissing; inside clicks do not close',
  t => {
    const view = render(Scope());
    const trigger = view.getByRole('button', {name: 'Catalogue playlists'});
    fireEvent.mouseOver(trigger);
    const panel = view.getByRole('dialog');
    (trigger.parentElement as HTMLElement).getBoundingClientRect = () => ({
      left: 400,
      right: 420,
      top: 200,
      bottom: 220,
      width: 20,
      height: 20,
      x: 400,
      y: 200,
      toJSON: () => ({})
    });
    const previous = panel.style.top;
    fireEvent.resize(window);
    t.not(panel.style.top, previous);
    fireEvent.scroll(view.getByTestId('clipped-card'));
    fireEvent.pointerDown(panel);
    t.is(view.getByRole('dialog'), panel);
  }
);

test.serial('a pending hover close is cleared when unmounted', async t => {
  const view = render(Scope());
  const trigger = view.getByRole('button', {name: 'Catalogue playlists'});
  fireEvent.mouseOver(trigger);
  fireEvent.mouseOut(trigger);
  view.unmount();
  await act(async () => {
    await delay(30);
  });
  fireEvent.resize(window);
  fireEvent.pointerDown(document.body);
  fireEvent.keyDown(document, {key: 'Escape'});
  t.is(document.querySelector('[role="dialog"]'), null);
});

test.serial('two independently mounted triggers have distinct popup IDs', t => {
  const view = render(
    <div>
      <Tooltip {...props} />
      <Tooltip {...props} aria-label="Owners" />
    </div>
  );
  fireEvent.mouseOver(view.getByRole('button', {name: 'Catalogue playlists'}));
  fireEvent.mouseOver(view.getByRole('button', {name: 'Owners'}));
  const panels = view.getAllByRole('dialog');
  t.is(panels.length, 2);
  t.not(panels[0].id, panels[1].id);
});

test.serial('legacy local tooltip keeps its default keyboard toggle and has no portal', t => {
  const view = render(Scope({interactive: false, TooltipContent: 'Legacy help'}));
  const trigger = view.getByRole('button', {name: 'Catalogue playlists'});
  fireEvent.keyDown(trigger, {key: 'Enter'});
  t.truthy(view.container.querySelector('[role="group"]'));
  t.is(view.queryByRole('dialog'), null);
  fireEvent.keyDown(trigger, {key: 'Tab'});
  t.is(view.container.querySelector('[role="group"]'), null);
});

test.serial('closed rich tooltips render on the server without layout effects or a portal', t => {
  const html = renderToStaticMarkup(<Tooltip {...props} />);
  t.true(html.includes('aria-expanded="false"'));
  t.false(html.includes('role="dialog"'));
});

test.serial('content resize is observed and the observer disconnects on close', t => {
  const previous = globalThis.ResizeObserver;
  const state: {notify?: ResizeObserverCallback; observed: Element[]; disconnected: boolean} = {
    observed: [],
    disconnected: false
  };
  class Observer implements ResizeObserver {
    constructor(notify: ResizeObserverCallback) {
      state.notify = notify;
    }

    observe = (element: Element) => {
      state.observed.push(element);
    };

    unobserve = () => {
      /* No individual unobserve is needed; disconnect cleans up all elements. */
    };

    disconnect = () => {
      state.disconnected = true;
    };
  }
  globalThis.ResizeObserver = Observer;
  try {
    const view = render(Scope());
    fireEvent.mouseOver(view.getByRole('button', {name: 'Catalogue playlists'}));
    const panel = view.getByRole('dialog');
    t.is(state.observed.length, 3);
    Object.defineProperty(panel, 'scrollHeight', {configurable: true, value: 1000});
    act(() => state.notify?.([], {} as ResizeObserver));
    t.truthy(panel.style.maxHeight);
    view.unmount();
    t.true(state.disconnected);
  } finally {
    globalThis.ResizeObserver = previous;
  }
});

test.serial('Tab skips disabled and hidden controls when leaving portalled content', async t => {
  const view = render(
    <div>
      <Tooltip {...props} />
      <button type="button" disabled>
        Disabled
      </button>
      <div hidden>
        <button type="button">Hidden</button>
      </div>
      <div style={{display: 'none'}}>
        <button type="button">Hidden by parent</button>
      </div>
      <button type="button" tabIndex={-1}>
        Not in tab order
      </button>
      <button type="button">Next visible control</button>
    </div>
  );
  const user = userEvent.setup({document});
  await user.tab();
  await user.tab();
  await user.tab();
  t.is(document.activeElement, view.getByRole('button', {name: 'Next visible control'}));
});

test.serial('an externally anchored tooltip retains the existing externally controlled mode', t => {
  const view = render(
    <Tooltip
      {...props}
      anchorId="external-details"
      toolTipIsVisible={false}
      TooltipContent="Legacy external help"
    />
  );
  t.is(view.queryByRole('dialog'), null);
  t.is(view.queryByRole('button'), null);
});

test.serial(
  'using the trigger or a popup action does not activate the surrounding card',
  async t => {
    let cardActivations = 0;
    let actionActivations = 0;
    const view = render(
      <div onClick={() => cardActivations++} onKeyDown={() => cardActivations++}>
        <Tooltip
          {...props}
          TooltipContent={
            <button type="button" onClick={() => actionActivations++}>
              Popup action
            </button>
          }
        />
      </div>
    );
    const user = userEvent.setup({document});
    await user.click(view.getByRole('button', {name: 'Catalogue playlists'}));
    await user.keyboard('{Enter}');
    await user.tab();
    await user.tab();
    await user.keyboard('{Enter}');
    t.is(actionActivations, 1);
    t.is(cardActivations, 0);
  }
);
