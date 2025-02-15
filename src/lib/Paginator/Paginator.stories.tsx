import type { Meta, StoryObj } from '@storybook/react';

import Paginator from './Paginator';

const meta: Meta<typeof Paginator> = {
  component: Paginator,
  argTypes: {
    spread: {
      control: { type: 'number', min: 3, max: 15 },
    },
    current: {
      control: { type: 'number', min: 1 },
    },
    pages: {
      control: { type: 'number', min: 1 },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Paginator>;

export const Default: Story = {
  args: {
    spread: 11,
    current: 7,
    pages: 20,
    callback: () => {},
    className: '',
  },
};
