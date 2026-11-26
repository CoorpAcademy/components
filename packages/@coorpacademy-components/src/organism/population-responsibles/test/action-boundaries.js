import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {configure, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import PopulationResponsibles from '..';
import ButtonLink from '../../../atom/button-link';
import {makeModel, responsibleLabels} from '../../../test/helpers/population-responsibles';

browserEnv();
configure({adapter: new Adapter()});

test.serial('disabled and in-flight reads reject direct callbacks as well as browser clicks', t => {
  const calls = [];
  const model = makeModel({
    refresh: {label: 'Refresh', onClick: () => calls.push('refresh')},
    loadMore: {label: 'Load more', onClick: () => calls.push('more')},
    error: {message: 'Unavailable', retry: {label: 'Try again', onClick: () => calls.push('retry')}}
  });
  const view = mount(<PopulationResponsibles disabled model={model} labels={responsibleLabels} />);
  t.teardown(() => view.unmount());
  const invoke = () => view.find(ButtonLink).forEach(button => button.prop('onClick')?.());
  invoke();
  view.setProps({disabled: false, model: {...model, loading: true}});
  invoke();
  view.setProps({model: {...model, loadingMore: true}});
  invoke();
  t.deepEqual(calls, []);
  view.setProps({model});
  invoke();
  t.deepEqual(calls, ['refresh', 'retry']);
  view.setProps({model: {...model, error: undefined}});
  invoke();
  t.deepEqual(calls, ['refresh', 'retry', 'refresh', 'more']);
});

test.serial('App can disable a single read action independently', t => {
  let refreshed = 0;
  const model = makeModel({
    refresh: {label: 'Refresh', onClick: () => refreshed++},
    loadMore: {label: 'Load more', disabled: true, onClick: () => t.fail('disabled more')}
  });
  const view = mount(<PopulationResponsibles model={model} labels={responsibleLabels} />);
  t.teardown(() => view.unmount());
  view.find(ButtonLink).forEach(button => button.prop('onClick')?.());
  t.is(refreshed, 1);
});
