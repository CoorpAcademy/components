import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render} from '@testing-library/react';
import Template from '..';
import fixture from './fixtures/default';

browserEnv();

test('should instanciate Range without props', t => {
  const expected = render(<Template {...fixture.props} />);
  const actual = render(
    <Template {...{...fixture.props, template: `${fixture.props.template}{{wrongInput}}`}} />
  );
  t.deepEqual(actual.container.innerHTML, expected.container.innerHTML);
});
