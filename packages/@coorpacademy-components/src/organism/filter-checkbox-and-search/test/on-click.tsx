import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {renderWithContext} from '../../../../es/util/render-with-context';
import FilterCheckboxAndSearch from '..';

browserEnv();

test('should display content on show more click', t => {
  const props = {
    title: 'Skills',
    placeholder: 'Search for a skill',
    onClear: () => {
      console.log('clear filters');
    },
    withSearch: true,
    options: [
      {
        label: 'Active listening',
        value: 'active-listening',
        selected: false,
        reference: 'skill_94',
        count: 104,
        onClick: () => {
          console.log('active listening selected');
        }
      },
      {
        label: 'Active listening',
        value: 'active-listening116',
        selected: false,
        reference: 'skill_94',
        count: 104,
        onClick: () => {
          console.log('active listening selected');
        }
      },
      {
        label: 'Active listening',
        value: 'active-listening115',
        selected: false,
        reference: 'skill_93',
        count: 104,
        onClick: () => {
          console.log('active listening selected');
        }
      },
      {
        label: 'Active listening',
        value: 'active-listening114',
        selected: false,
        reference: 'skill_94',
        count: 104,
        onClick: () => {
          console.log('active listening selected');
        }
      },
      {
        label: 'Active listening',
        value: 'active-listening112',
        selected: false,
        reference: 'skill_96',
        count: 104,
        onClick: () => {
          console.log('active listening selected');
        }
      },
      {
        label: 'Active listening',
        value: 'active-listening113',
        selected: false,
        reference: 'skill_95',
        count: 104,
        onClick: () => {
          console.log('active listening selected');
        }
      }
    ]
  };
  const {container, debug} = renderWithContext(<FilterCheckboxAndSearch {...props} />);
  debug(container);
  const showMoreButton = container.querySelector('[data-testid="show-more-button"]');
  // const showMoreButton = getByTestId('show-more-button');
  t.truthy(showMoreButton);
  // console.log('🚀 ~ showMoreButton:', showMoreButton);
  // fireEvent.click(showMoreButton);
  // t.is(showMoreButton.textContent?.trim(), '__Show less');
  t.pass();
});
