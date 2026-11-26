import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {cleanup, render, fireEvent} from '@testing-library/react';
import HeaderWithActions from '..';
import {wrappingComponent} from '../../../test/helpers/render-component';
import {header, makeEditor} from '../../../test/helpers/population-edition';
import buttonStyle from '../../../atom/button-link/style.css';

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
  'Archive uses the existing secondary style beside primary Save and stays caller-controlled',
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
    const archive = view.getByRole('button', {name: 'Archive'});
    t.true(archive.classList.contains(buttonStyle.secondary));
    t.true(view.getByRole('button', {name: 'Save'}).classList.contains(buttonStyle.primary));
    fireEvent.click(archive);
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
