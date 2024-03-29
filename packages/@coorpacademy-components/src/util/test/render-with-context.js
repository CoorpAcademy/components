import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mockTranslate} from '@coorpacademy/translate';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import {renderWithContext} from '../render-with-context';
import Provider, {GetTranslateFromContext, GetSkinFromContext} from '../../atom/provider';

browserEnv();

const TestComponentWebContext = props => {
  const skin = GetSkinFromContext();
  const translate = GetTranslateFromContext();
  const {label, expectedPrimaryColor, _test} = props;

  const primary = getOr(null, 'common.primary', skin);
  _test.is(primary, expectedPrimaryColor);
  return <div data-name="test-component">{translate(label)}</div>;
};

const TestComponent = (props, context) => {
  const {skin, translate} = context;
  const {label, expectedPrimaryColor, _test} = props;

  const primary = getOr(null, 'common.primary', skin);
  _test.is(primary, expectedPrimaryColor);
  return <div data-name="test-component">{translate(label)}</div>;
};

TestComponent.propTypes = {
  label: PropTypes.string,
  expectedPrimaryColor: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  _test: PropTypes.object
};

TestComponent.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

TestComponentWebContext.propTypes = {
  ...TestComponent.propTypes
};

test('should use default context if the context is empty', t => {
  t.plan(4);
  const expectedPrimaryColor = '#00B0FF';

  const props = {
    label: 'test-label',
    expectedPrimaryColor,
    _test: t
  };

  const {container} = renderWithContext(<TestComponent {...props} />);

  const element = container.querySelector('[data-name="test-component"]');

  t.truthy(element);

  t.is(element.textContent, mockTranslate(props.label));

  t.pass();
});

test('should use given context', t => {
  t.plan(6);
  const skin = {
    common: {
      primary: '#0091EA'
    }
  };

  const translate = key => {
    t.pass();
    return key;
  };

  const expectedPrimaryColor = '#0091EA';

  const props = {
    label: 'test-label',
    expectedPrimaryColor,
    _test: t
  };

  const {container} = renderWithContext(<TestComponent {...props} />, {
    context: {
      skin,
      translate
    }
  });

  const element = container.querySelector('[data-name="test-component"]');

  t.truthy(element);

  t.not(element.textContent, mockTranslate(props.label));

  t.is(element.textContent, props.label);

  t.pass();
});

test('should use legacy Context and pass if useLegacyProvider is provided', t => {
  t.plan(4);
  const expectedPrimaryColor = '#00B0FF';

  const props = {
    label: 'test-label',
    expectedPrimaryColor,
    _test: t
  };

  const {container} = renderWithContext(<TestComponent {...props} />, {useLegacyProvider: true});

  const element = container.querySelector('[data-name="test-component"]');

  t.truthy(element);

  t.is(element.textContent, mockTranslate(props.label));

  t.pass();
});

test('should use legacy Context and pass if useLegacyProvider is not given but contextTypes are detected at root level', t => {
  t.plan(4);
  const expectedPrimaryColor = '#00B0FF';

  const props = {
    label: 'test-label',
    expectedPrimaryColor,
    _test: t
  };

  const {container} = renderWithContext(<TestComponent {...props} />);

  const element = container.querySelector('[data-name="test-component"]');

  t.truthy(element);

  t.is(element.textContent, mockTranslate(props.label));

  t.pass();
});

test('should use web Context and pass if are not detected at root level', t => {
  t.plan(4);
  const expectedPrimaryColor = '#0091EA';

  const props = {
    label: 'test-label',
    expectedPrimaryColor,
    _test: t
  };

  const skin = {
    common: {
      primary: '#0091EA'
    }
  };

  const {container} = renderWithContext(<TestComponentWebContext {...props} />, {
    context: {
      skin
    }
  });

  const element = container.querySelector('[data-name="test-component"]');

  t.truthy(element);

  t.is(element.textContent, mockTranslate(props.label));

  t.pass();
});
