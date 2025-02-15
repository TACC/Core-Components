import type { Meta, StoryObj } from '@storybook/react';

import Paginator from './Paginator';
import styles from './Paginator.stories.module.css';

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

export const Examples: Story = {
  render: () => {
    return (
      <>
        <Paginator
          pages={1}
          current={1}
          callback={() => {}}
          className={styles.paginator}
        />
        <Paginator
          pages={2}
          current={1}
          callback={() => {}}
          className={styles.paginator}
        />
        <Paginator
          pages={5}
          current={3}
          callback={() => {}}
          className={styles.paginator}
        />
        <Paginator
          pages={20}
          current={7}
          callback={() => {}}
          className={styles.paginator}
        />
      </>
    );
  },
};

export const Interactive: Story = {
  args: {
    pages: 20,
    current: 7,
    spread: 11,
    callback: () => {},
    className: styles.paginator,
  },
};
