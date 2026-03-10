import type { Meta, StoryObj } from '@storybook/react';

import Button, { SIZE_MAP } from './Button';

import styles from './Button.stories.module.css';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    size: {
      options: Object.keys(SIZE_MAP),
      control: { type: 'inline-radio' },
    },
    title: {
      control: 'text',
      description: 'HTML title attribute (via ...rest)',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Types: Story = {
  render: (args) => {
    const { size, ...argsSansSize } = args;

    return (
      <>
        <Button type="primary" {...args}>
          Primary
        </Button>
        <Button type="secondary" {...args}>
          Secondary
        </Button>
        <Button type="tertiary" {...args}>
          Tertiary
        </Button>
        <Button type="link" {...argsSansSize}>
          as Link
        </Button>
      </>
    );
  },
  args: {
    className: styles['button'] + ' ',
  },
};

export const HTMLAttributes: Story = {
  render: (args) => (
    <Button type="primary" {...args}>
      Hover me for title tooltip
    </Button>
  ),
  args: {
    title: 'Hello from rest',
    'aria-label': 'Example button with HTML attributes',
  },
};
