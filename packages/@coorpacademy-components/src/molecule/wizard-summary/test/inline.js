import test from 'ava';
import React from 'react';
import browserEnv from 'browser-env';
import {cleanup, fireEvent} from '@testing-library/react';
import WizardSummary from '..';
import {renderWithContext} from '../../../util/render-with-context';

browserEnv();
test.afterEach.always(cleanup);

test.serial(
  'inline summary renders section text without a title, action or disclosure control',
  t => {
    const {getByText, queryByRole, container} = renderWithContext(
      <WizardSummary
        inline
        sections={[
          {
            title: 'Modules:',
            counterText: '+2 · −1',
            items: [{type: 'text', text: '+ Clear communication'}]
          }
        ]}
      />,
      {context: {translate: key => key}}
    );
    t.truthy(getByText('Modules:'));
    t.truthy(getByText('+2 · −1'));
    t.truthy(getByText('+ Clear communication'));
    t.is(queryByRole('checkbox'), null);
    t.is(queryByRole('button'), null);
    t.is(
      container.querySelector(
        'input, label, a, [data-name^="summary-title-"], [data-name^="summary-actions-"]'
      ),
      null
    );
  }
);

test.serial('empty inline summary omits supplied wizard title and action', t => {
  const {queryByText, queryByRole} = renderWithContext(
    <WizardSummary
      inline
      title="Wizard title"
      sections={[]}
      action={{icon: 'save', text: 'Save summary', onClick: () => {}}}
    />
  );
  t.is(queryByText('Wizard title'), null);
  t.is(queryByText('Save summary'), null);
  t.is(queryByRole('checkbox'), null);
  t.is(queryByRole('button'), null);
  t.is(queryByRole('list'), null);
});

test.serial('inline summary renders main elements, content metadata and text items', t => {
  const {getByText, queryByRole} = renderWithContext(
    <WizardSummary
      inline
      sections={[
        {
          items: [
            {type: 'mainElement', title: 'Language', value: 'English'},
            {
              type: 'content',
              title: 'Resilient teams',
              author: 'Coorpacademy',
              badgeList: [{category: 'course', label: 'Course'}]
            },
            {type: 'text', text: 'A learner impact note', unsaved: true}
          ]
        }
      ]}
    />
  );
  ['Language', 'English', 'Resilient teams', 'Coorpacademy', 'A learner impact note'].forEach(
    text => t.truthy(getByText(text))
  );
  t.is(getByText('Language').closest('ul').children.length, 3);
  t.is(queryByRole('checkbox'), null);
});

test.serial('non-inline summaries keep their action callback and disclosure toggle', t => {
  [undefined, false].forEach(inline => {
    let saved = 0;
    const {getByRole, getByText} = renderWithContext(
      <WizardSummary
        inline={inline}
        title="Wizard title"
        sections={[{items: [{type: 'text', text: 'Existing wizard section'}]}]}
        action={{
          icon: 'save',
          text: 'Save summary',
          'aria-label': 'Save summary',
          onClick: () => saved++
        }}
      />
    );
    const disclosure = getByRole('checkbox');
    t.false(disclosure.checked);
    fireEvent.click(disclosure);
    t.true(disclosure.checked);
    t.truthy(getByText('Existing wizard section'));
    fireEvent.click(disclosure);
    t.false(disclosure.checked);
    fireEvent.click(getByRole('button', {name: 'Save summary'}));
    t.is(saved, 1);
    cleanup();
  });
});
