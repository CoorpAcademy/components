import React from 'react';
import {within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BrandUpdate from '..';
import fixture from './fixtures/assignment-tracking';

export default {
  title: 'Template/BackOffice/BrandUpdate/Tracking availability',
  component: BrandUpdate
};

const explanations = [
  '4/4 accessible modules completed · 1 unavailable module\nUnavailable content does not count toward the assignment status.',
  '2/4 accessible modules completed · 1 unavailable module\nUnavailable content does not count toward the assignment status.',
  'No accessible content · 5 unavailable modules',
  undefined
];
const statuses = ['completed', 'inProgress', 'inProgress', 'completed'];
const labels = ['Completed', 'In progress', 'In progress', 'Completed'];
const progress = ['4 / 5 modules', '2 / 5 modules', '0 / 5 modules', '5 / 5 modules'];

export const Tracking = (args: any) => <BrandUpdate {...args} />;
Tracking.args = {
  ...fixture.props,
  content: {
    ...fixture.props.content,
    rows: fixture.props.content.rows.map((row, index) => ({
      ...row,
      fields: row.fields.map((field, fieldIndex) => {
        if (fieldIndex === 1)
          return {tags: [{status: statuses[index], label: labels[index], palette: 'tracking'}]};
        if (fieldIndex === 2)
          return explanations[index]
            ? {text: progress[index], warning: explanations[index]}
            : progress[index];
        return field;
      })
    }))
  }
};

export const CompletedTooltip = (args: any) => <BrandUpdate {...args} />;
CompletedTooltip.args = Tracking.args;
CompletedTooltip.play = async ({canvasElement}: {canvasElement: HTMLElement}) => {
  const user = userEvent.setup({document: canvasElement.ownerDocument});
  await user.hover(within(canvasElement).getAllByTestId('table-cell-warning')[0]);
  await within(canvasElement.ownerDocument.body).findByRole('tooltip');
};

export const InProgressTooltip = (args: any) => <BrandUpdate {...args} />;

export const KeyboardTooltip = (args: any) => <BrandUpdate {...args} />;
KeyboardTooltip.args = Tracking.args;
KeyboardTooltip.play = async ({canvasElement}: {canvasElement: HTMLElement}) => {
  within(canvasElement).getAllByTestId('table-cell-warning')[0].focus();
  await within(canvasElement.ownerDocument.body).findByRole('tooltip');
};

InProgressTooltip.args = Tracking.args;
InProgressTooltip.play = async ({canvasElement}: {canvasElement: HTMLElement}) => {
  const user = userEvent.setup({document: canvasElement.ownerDocument});
  await user.hover(within(canvasElement).getAllByTestId('table-cell-warning')[1]);
  await within(canvasElement.ownerDocument.body).findByRole('tooltip');
};

export const NoAccessibleContentTooltip = (args: any) => <BrandUpdate {...args} />;
NoAccessibleContentTooltip.args = Tracking.args;
NoAccessibleContentTooltip.play = async ({canvasElement}: {canvasElement: HTMLElement}) => {
  const user = userEvent.setup({document: canvasElement.ownerDocument});
  await user.hover(within(canvasElement).getAllByTestId('table-cell-warning')[2]);
  await within(canvasElement.ownerDocument.body).findByRole('tooltip');
};
