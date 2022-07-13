import test from 'ava';
import React from 'react';
import {render} from '@testing-library/react-native';
// import TemplateAppReviewDemoTs from '../index';
import TemplateAppReviewDemoTs from '../index.native';
import fixtureDefaultTs from './fixtures/default';

test('should test .native', t => {
  const {props} = fixtureDefaultTs;

  t.is(true, true);
  render(<TemplateAppReviewDemoTs {...props} />);
  // const p = render(<p {...props} />);
  // const p = render(React.createElement(TemplateAppReviewDemoTs, props));
  // const p = React.createElement(TemplateAppReviewDemoTs, props);
  // const p = <TemplateAppReviewDemoTs />;
  // console.log({p});
});
