import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {cleanup, render, fireEvent, within} from '@testing-library/react';
import PopulationEdition from '..';
import {wrappingComponent} from '../../../test/helpers/render-component';
import {labels, makeEditor} from '../../../test/helpers/population-edition';
import {
  chooseType,
  hrCreation,
  hrCreationLabels,
  hrLabels,
  makeHR,
  makeTypeField
} from '../../../test/helpers/population-hr-edition';
import {makeModel as makeResponsibles} from '../../../test/helpers/population-responsibles';
import ControlledEditor from './helpers/controlled';

browserEnv();
test.afterEach.always(cleanup);

test.serial('the parent controls unselected type, described radios and supplied sections', t => {
  const requests: boolean[] = [];
  const model = {...chooseType, typeField: makeTypeField()};
  model.typeField.choices[1].onChange = checked => requests.push(checked);
  const view = render(<PopulationEdition model={model} labels={hrLabels} />, {
    wrapper: wrappingComponent
  });
  t.false((view.getByRole('radio', {name: 'Analytics'}) as HTMLInputElement).checked);
  t.false((view.getByRole('radio', {name: 'HR'}) as HTMLInputElement).checked);
  t.truthy(view.getByText('HR populations determine which content their learners can access.'));
  t.is(view.queryByRole('heading', {name: 'Owners'}), null);
  t.is(view.queryByRole('heading', {name: 'Catalogue access'}), null);
  fireEvent.click(view.getByRole('radio', {name: 'HR'}));
  t.deepEqual(requests, [true]);
  t.false((view.getByRole('radio', {name: 'HR'}) as HTMLInputElement).checked);
  view.rerender(<PopulationEdition model={hrCreation} labels={hrCreationLabels} />);
  t.true((view.getByRole('radio', {name: 'HR'}) as HTMLInputElement).checked);
  t.truthy(view.getByRole('heading', {name: 'Catalogue access'}));
  t.truthy(view.getByText('Managers will appear here'));
  t.is(view.queryByRole('button', {name: 'Refresh'}), null);
  t.true(
    within(view.getByRole('radiogroup', {name: 'Content access'}))
      .getAllByRole('radio')
      .every(input => !(input as HTMLInputElement).checked)
  );
});

test.serial('HR sections reuse the catalogue and applied managers without ownership', t => {
  const model = makeHR();
  const view = render(<PopulationEdition model={model} labels={hrLabels} />, {
    wrapper: wrappingComponent
  });
  t.truthy(view.getByRole('heading', {name: 'Catalogue access'}));
  t.truthy(view.getByRole('heading', {name: 'Population managers'}));
  t.truthy(view.getByRole('heading', {name: 'Learner preview'}));
  t.truthy(view.getByText('2 managers'));
  t.truthy(within(view.getByRole('group', {name: 'Population managers'})).getByText(/You/));
  t.is(view.queryByRole('heading', {name: 'Owners'}), null);
  t.true(
    view
      .getAllByRole('radio', {name: /^(HR|Analytics)$/})
      .every(input => (input as HTMLInputElement).disabled)
  );
  view.rerender(<PopulationEdition model={makeEditor()} labels={labels} />);
  t.truthy(view.getByRole('heading', {name: labels.owners.title}));
  t.is(view.queryByRole('heading', {name: 'Catalogue access'}), null);
  t.is(view.queryByRole('heading', {name: 'Population managers'}), null);
});

test.serial('App can expose only Analytics through the same controlled radio field', t => {
  const typeField = makeTypeField('analytics');
  const model = makeEditor({
    typeField: {
      ...typeField,
      choices: typeField.choices.filter(choice => choice.id === 'analytics')
    }
  });
  const view = render(<PopulationEdition model={model} labels={labels} />, {
    wrapper: wrappingComponent
  });
  t.true((view.getByRole('radio', {name: 'Analytics'}) as HTMLInputElement).checked);
  t.is(view.queryByRole('radio', {name: 'HR'}), null);
  t.truthy(view.getByRole('heading', {name: 'Owners'}));
  t.is(view.queryByRole('heading', {name: 'Catalogue access'}), null);
});

test.serial(
  'archived HR remains readable and locks access while hiding managers and preview',
  t => {
    const view = render(<PopulationEdition model={makeHR({archived: true})} labels={hrLabels} />, {
      wrapper: wrappingComponent
    });
    t.truthy(view.getByRole('heading', {name: 'Catalogue access'}));
    t.is(view.queryByRole('heading', {name: 'Population managers'}), null);
    t.is(view.queryByRole('heading', {name: 'Learner preview'}), null);
    t.true(view.getAllByRole('radio').every(input => (input as HTMLInputElement).disabled));
    t.true((view.getByRole('textbox', {name: 'Name'}) as HTMLInputElement).disabled);
  }
);

test.serial('a manager refresh failure retains the applied users supplied by App', t => {
  const view = render(
    <PopulationEdition
      model={makeHR({responsibles: makeResponsibles({error: {message: 'Refresh failed'}})})}
      labels={hrLabels}
    />,
    {wrapper: wrappingComponent}
  );
  t.truthy(view.getByText('Refresh failed'));
  t.truthy(view.getByText('2 managers'));
  t.truthy(view.getByText(/Morgan Taylor/));
});

test.serial('missing optional section labels do not invent copy or crash the legacy editor', t => {
  const view = render(<PopulationEdition model={makeHR()} labels={labels} />, {
    wrapper: wrappingComponent
  });
  t.is(view.queryByRole('heading', {name: 'Catalogue access'}), null);
  t.is(view.queryByRole('heading', {name: 'Population managers'}), null);
  t.truthy(view.getByRole('heading', {name: 'Membership conditions'}));
});

test.serial('catalogue and managers support repeated focus requests with the same offset', t => {
  const original = HTMLElement.prototype.scrollIntoView;
  const sections: string[] = [];
  HTMLElement.prototype.scrollIntoView = function () {
    sections.push(this.getAttribute('data-name') || '');
  };
  t.teardown(() => {
    HTMLElement.prototype.scrollIntoView = original;
  });
  const view = render(
    <PopulationEdition
      model={makeHR({focusSection: 'catalogue', focusRequestKey: 1})}
      labels={hrLabels}
      headerOffset={144}
    />,
    {wrapper: wrappingComponent}
  );
  view.rerender(
    <PopulationEdition
      model={makeHR({focusSection: 'catalogue', focusRequestKey: 2})}
      labels={hrLabels}
      headerOffset={144}
    />
  );
  view.rerender(
    <PopulationEdition
      model={makeHR({focusSection: 'responsibles', focusRequestKey: 3})}
      labels={hrLabels}
      headerOffset={144}
    />
  );
  t.deepEqual(sections, [
    'population-section-catalogue',
    'population-section-catalogue',
    'population-section-responsibles'
  ]);
  t.is((document.activeElement as HTMLElement).style.scrollMarginTop, '144px');
});

test.serial(
  'the synthetic parent preserves type-specific drafts and common fields before saving',
  t => {
    const view = render(<ControlledEditor creating bothTypes isolated />, {
      wrapper: wrappingComponent
    });
    t.false((view.getByRole('radio', {name: 'HR'}) as HTMLInputElement).checked);
    fireEvent.input(view.getByRole('textbox', {name: 'Name'}), {target: {value: 'Shared draft'}});
    fireEvent.click(view.getByRole('radio', {name: 'Analytics'}));
    fireEvent.click(view.getByRole('button', {name: /Add me/}));
    fireEvent.click(view.getByRole('radio', {name: 'HR'}));
    fireEvent.click(view.getByRole('radio', {name: 'Custom playlists only'}));
    fireEvent.click(view.getByRole('radio', {name: 'Analytics'}));
    t.truthy(view.getByText(/Alex Martin/));
    t.is(view.queryByRole('heading', {name: 'Catalogue access'}), null);
    fireEvent.click(view.getByRole('radio', {name: 'HR'}));
    t.true((view.getByRole('radio', {name: 'Custom playlists only'}) as HTMLInputElement).checked);
    t.is((view.getByRole('textbox', {name: 'Name'}) as HTMLInputElement).value, 'Shared draft');
    t.true((view.getByRole('button', {name: 'Save'}) as HTMLButtonElement).disabled);
  }
);
