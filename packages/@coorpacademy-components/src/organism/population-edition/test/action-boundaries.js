import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {configure, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import PopulationEdition from '..';
import InputText from '../../../atom/input-text';
import ButtonLink from '../../../atom/button-link';
import {labels, makeEditor, preview} from '../../../test/helpers/population-edition';

browserEnv();
configure({adapter: new Adapter()});

test.serial('disabled, archived and busy editors refuse direct name and retry callbacks', t => {
  const forbidden = () => t.fail('disabled callback dispatched');
  const retry = {label: 'Retry', onClick: forbidden};
  const base = makeEditor({
    name: {value: 'Preserved draft', onChange: forbidden},
    preview: {...preview, retry},
    feedback: {type: 'error', message: 'Not saved', retry}
  });
  const view = mount(<PopulationEdition disabled labels={labels} model={base} />);
  t.teardown(() => view.unmount());
  const invoke = () => {
    view
      .find(InputText)
      .filterWhere(input => input.prop('aria-label') === labels.name)
      .forEach(input => input.prop('onChange')('ignored'));
    view
      .find(ButtonLink)
      .filterWhere(button => button.prop('label') === 'Retry')
      .forEach(button => button.prop('onClick')());
  };
  invoke();
  view.setProps({disabled: false, model: {...base, busy: true}});
  invoke();
  view.setProps({model: {...base, archived: true}});
  invoke();
  view.setProps({
    model: {...base, loaded: false, busy: true, loadError: {message: 'Not loaded', retry}}
  });
  invoke();
  t.pass();
});

test.serial('individual retry disable and loading state also guard direct invocation', t => {
  const forbidden = () => t.fail('disabled retry dispatched');
  const base = makeEditor({
    preview: {...preview, retry: {label: 'Retry', disabled: true, onClick: forbidden}}
  });
  const view = mount(<PopulationEdition labels={labels} model={base} />);
  t.teardown(() => view.unmount());
  const invoke = () =>
    view
      .find(ButtonLink)
      .filterWhere(button => button.prop('label') === 'Retry')
      .prop('onClick')();
  invoke();
  view.setProps({
    model: {
      ...base,
      preview: {...base.preview, loading: true, retry: {label: 'Retry', onClick: forbidden}}
    }
  });
  invoke();
  t.pass();
});
