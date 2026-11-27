import test from 'ava';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {render, fireEvent, cleanup} from '@testing-library/react';
import Provider from '../../../atom/provider';
import Banner from '..';
import BrandDashboard from '../../../organism/brand-dashboard';
import fixture from './fixtures/survey';

test.afterEach(cleanup);
const wrap = element => <Provider translate={key => key}>{element}</Provider>;

test.serial(
  'survey banner renders its heading, description and native isolated new-tab link',
  t => {
    const html = renderToStaticMarkup(wrap(<Banner {...fixture.props} />));
    t.true(html.includes('<section'));
    t.true(html.includes('>Your feedback matters</h2>'));
    t.true(html.includes(fixture.props.message));
    t.true(html.includes('href="https://forms.cloud.microsoft/r/j3fZf1LbJh"'));
    t.true(html.includes('target="_blank"'));
    t.true(html.includes('rel="noopener noreferrer"'));
    t.false(html.includes('<button'));
  }
);

test.serial('every click invokes the callback and leaves the native form destination intact', t => {
  let count = 0;
  const cta = [{...fixture.props.cta[0], action: () => count++}];
  const view = render(wrap(<Banner {...fixture.props} cta={cta} />));
  const link = view.getByRole('link');
  link.addEventListener('click', event => event.preventDefault());
  fireEvent.click(link);
  fireEvent.click(link);
  t.is(count, 2);
  t.is(link.getAttribute('href'), fixture.props.cta[0].link.href);
});

test.serial(
  'brand dashboard places the campaign after the welcome and before the existing promotion',
  t => {
    const props = {
      header: {title: 'Welcome Eric'},
      campaignBanner: fixture.props,
      banner: {
        title: 'Product promotion',
        subTitle: 'Product details',
        buttonLabel: 'Discover',
        image: 'https://example.com/banner.png'
      },
      quickAccessCards: {title: 'Quick Access', cards: {list: []}}
    };
    const html = renderToStaticMarkup(wrap(<BrandDashboard {...props} />));
    t.true(html.indexOf('Welcome Eric') < html.indexOf('Your feedback matters'));
    t.true(html.indexOf('Your feedback matters') < html.indexOf('Product promotion'));
    t.true(html.includes('Quick Access'));
  }
);

test.serial('campaign deadline is the last included day in Paris for winter and summer', t => {
  const campaign = fixture.props.campaign;
  const view = render(wrap(<Banner {...fixture.props} />));
  t.truthy(view.getByText('Until December 18'));
  t.truthy(view.getByText('Survey open'));
  view.rerender(
    wrap(
      <Banner
        {...fixture.props}
        campaign={{
          ...campaign,
          endAt: '2027-05-01T00:00:00+02:00',
          language: 'fr',
          status: 'Enquête en cours',
          until: 'Jusqu’au'
        }}
      />
    )
  );
  t.truthy(view.getByText('Jusqu’au 30 avril'));
  t.truthy(view.getByText('AVR.'));
  t.is(view.queryByRole('button'), null);
});
