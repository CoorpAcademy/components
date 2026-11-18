import React from 'react';
import {ComponentStory} from '@storybook/react';
import {within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeaderWithActions from '..';
import fixture from './fixtures/assignment-tracking';

export default {
  title: 'Organism/HeaderWithActions information',
  component: HeaderWithActions
};

const Template: ComponentStory<typeof HeaderWithActions> = args => (
  <div style={{padding: 24, minHeight: 360}}>
    <HeaderWithActions {...args} />
  </div>
);

export const Closed = Template.bind({});
Closed.args = {...fixture.props, title: 'test n°2'};

export const Open = Template.bind({});
Open.args = Closed.args;
Open.play = async ({canvasElement}: {canvasElement: HTMLElement}) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup({document: canvasElement.ownerDocument});
  await user.hover(canvas.getByTestId('header-with-actions-information'));
  await canvas.findByTestId('tooltip');
};

export const LongMetadata = Template.bind({});
LongMetadata.args = {
  ...Closed.args,
  informationTooltip: {
    label: 'Assignment information',
    content:
      '13/11/2026 – 21/11/2026\nCreated by 565c0a5eade3830300f37bf7 on 13 Nov 2026\nLast edited by 565c0a5eade3830300f37bf7 5 days ago\nUp to date · 3 batches'
  }
};
LongMetadata.play = Open.play;
