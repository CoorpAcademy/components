import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {configure, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import PopulationList from '..';
import ButtonLink from '../../../atom/button-link';
import InputText from '../../../atom/input-text';
import SelectMultiple from '../../../molecule/select-multiple';
import CMPopin from '../../../molecule/cm-popin';
import {listLabels, makeListModel, rows, confirmation} from '../../../test/helpers/population-list';

browserEnv();
configure({adapter: new Adapter()});

test.serial('busy and disabled views reject direct callbacks as well as browser actions', t => {
  const forbidden = () => t.fail('disabled action dispatched');
  const model = makeListModel({
    onSearch: forbidden,
    onSubmitSearch: forbidden,
    onCreate: forbidden,
    filter: {...makeListModel().filter, onChange: forbidden},
    rows: [{...rows[0], primaryAction: {label: 'Edit', onClick: forbidden}, onArchive: forbidden}],
    countsError: {message: 'Counts unavailable', retry: {label: 'Retry counts', onClick: forbidden}}
  });
  const view = mount(<PopulationList disabled labels={listLabels} model={model} />);
  t.teardown(() => view.unmount());
  const invoke = () => {
    view.find(InputText).prop('onChange')('ignored');
    view.find(SelectMultiple).prop('onChange')({value: 'analytics'});
    view.find('form').simulate('submit', {preventDefault: () => undefined});
    view.find(ButtonLink).forEach(button => button.prop('onClick')?.());
  };
  invoke();
  view.setProps({disabled: false, model: {...model, transitioning: true}});
  invoke();
  view.setProps({model: {...model, loading: true}});
  invoke();
  t.pass();
});

test.serial('App can disable the primary row action and individual retry independently', t => {
  const forbidden = () => t.fail('disabled callback dispatched');
  const view = mount(
    <PopulationList
      labels={listLabels}
      model={makeListModel({
        rows: [
          {
            ...rows[0],
            onArchive: undefined,
            primaryAction: {label: 'Edit', disabled: true, onClick: forbidden}
          }
        ],
        countsError: {
          message: 'Unavailable',
          retry: {label: 'Retry counts', disabled: true, onClick: forbidden}
        }
      })}
    />
  );
  t.teardown(() => view.unmount());
  view
    .find(ButtonLink)
    .filterWhere(button => ['Edit', 'Retry counts'].includes(button.prop('label')))
    .forEach(button => button.prop('onClick')());
  t.pass();
});

test.serial('pending archive refuses programmatic confirmation and cancellation', t => {
  const forbidden = () => t.fail('busy archive callback');
  const view = mount(
    <PopulationList
      labels={listLabels}
      model={makeListModel()}
      confirmation={{...confirmation, busy: true, onConfirm: forbidden, onCancel: forbidden}}
    />
  );
  t.teardown(() => view.unmount());
  view.update();
  const popin = view.find(CMPopin);
  t.is(popin.length, 1);
  popin.prop('firstButton').handleOnclick();
  popin.prop('secondButton').handleOnclick();
});
