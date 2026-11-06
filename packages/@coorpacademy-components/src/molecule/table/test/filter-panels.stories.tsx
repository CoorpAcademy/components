import React from 'react';
import {noop} from 'lodash/fp';
import {ComponentStory} from '@storybook/react';
import {within, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Table from '..';
import singleRowFixture from './fixtures/single-row-filter';
import defaultFixture from './fixtures/default';
import noOptionsFixture from './fixtures/no-options';
import cockpitFixture from './fixtures/cockpit-theme';

export default {
  title: 'Molecule/Table filters',
  component: Table
};

const story = (
  props: React.ComponentProps<typeof Table>,
  width = 460
): ComponentStory<typeof Table> => {
  const State: ComponentStory<typeof Table> = () => (
    <div style={{width, maxWidth: '100%', minHeight: 420}}>
      <Table {...props} />
    </div>
  );
  return State;
};

const openFilter =
  (name: string) =>
  async ({canvasElement}: {canvasElement: HTMLElement}) => {
    const user = userEvent.setup({document: canvasElement.ownerDocument});
    await user.click(within(canvasElement).getByRole('button', {name, exact: true}));
    await waitFor(() => {
      const panel = within(canvasElement.ownerDocument.body).getByRole('group', {
        name,
        exact: true
      });
      if (panel.hidden || panel.style.visibility !== 'visible')
        throw new Error('Filter is positioning');
    });
  };

export const ClosedOneRow = story(singleRowFixture.props);
export const OpenOneRow = story(singleRowFixture.props);
OpenOneRow.play = openFilter('Populations');

export const OpenUnfilteredArrow = story(defaultFixture.props, 860);
OpenUnfilteredArrow.play = openFilter('Provider');

export const OpenFilteredFunnel = story(defaultFixture.props, 860);
OpenFilteredFunnel.play = openFilter('Last name');

export const ClosedDefault = story(defaultFixture.props, 860);
export const ClosedNoOptions = story(noOptionsFixture.props, 860);
export const OpenNoOptions = story(noOptionsFixture.props, 860);
OpenNoOptions.play = openFilter('Last name');

export const OpenCockpit = story(
  {
    ...cockpitFixture.props,
    columns: [
      {
        title: 'Courses',
        options: [
          {title: 'All courses', selected: true, onChange: noop},
          {title: 'Draft courses', selected: false, onChange: noop},
          {title: 'Validated courses', selected: false, onChange: noop}
        ]
      },
      ...cockpitFixture.props.columns.slice(1)
    ]
  },
  860
);
OpenCockpit.play = openFilter('Courses');

export const OpenEmptyTable = story({...singleRowFixture.props, rows: []});
OpenEmptyTable.play = openFilter('Populations');
