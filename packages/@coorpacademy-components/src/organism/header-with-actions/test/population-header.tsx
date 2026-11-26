import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {cleanup, render, fireEvent} from '@testing-library/react';
import HeaderWithActions from '..';
import {wrappingComponent} from '../../../test/helpers/render-component';
import {header, makeEditor} from '../../../test/helpers/population-edition';

browserEnv();
test.afterEach.always(cleanup);

test.serial(
  'generic title tags sit beside the title with Tag colors and preserve label case',
  t => {
    const props = header({model: makeEditor()});
    const view = render(<HeaderWithActions {...props} />, {wrapper: wrappingComponent});
    const title = view.getByRole('heading', {name: 'Onboarding progress'});
    t.true(title.parentElement?.textContent?.includes('Analytics'));
    t.truthy(view.container.querySelector('[data-name="content-tag-Analytics"]'));
    view.rerender(
      <HeaderWithActions {...props} titleTags={[{label: 'eLearning', type: 'info'}]} />
    );
    t.truthy(view.getByText('eLearning'));
    view.rerender(<HeaderWithActions {...props} titleTags={[]} />);
    t.is(view.queryByText('Analytics'), null);
    view.rerender(<HeaderWithActions {...props} titleTags={undefined} />);
    t.truthy(view.getByRole('heading', {name: 'Onboarding progress'}));
  }
);

test.serial(
  'destructive header actions stay caller-controlled and work beside a primary action',
  t => {
    let requests = 0;
    const view = render(
      <HeaderWithActions
        {...header({
          model: makeEditor(),
          onArchive: () => {
            requests++;
          }
        })}
      />,
      {wrapper: wrappingComponent}
    );
    fireEvent.click(view.getByRole('button', {name: 'Archive'}));
    t.is(requests, 1);
    t.truthy(view.getByRole('button', {name: 'Save'}));
    view.rerender(
      <HeaderWithActions
        {...header({
          model: makeEditor({busy: true}),
          onArchive: () => {
            requests++;
          }
        })}
      />
    );
    fireEvent.click(view.getByRole('button', {name: 'Archive'}));
    t.is(requests, 1);
  }
);
