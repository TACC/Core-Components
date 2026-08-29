import type { Meta, StoryObj } from '@storybook/react';
import SectionMessage from './SectionMessage';
import { TYPE_MAP, TYPES } from '../Message/Message';
import styles from './SectionMessage.stories.module.css';

// Filter out the deprecated 'warn' type
const VALID_TYPES = TYPES.filter(type => type !== 'warn');

const meta: Meta<typeof SectionMessage> = {
  component: SectionMessage,
  argTypes: {
    type: {
      options: VALID_TYPES,
      control: { type: 'select' },
      description: 'Message type or severity',
    },
    canDismiss: {
      control: 'boolean',
      description: 'Whether message can be dismissed',
    },
    isVisible: {
      control: 'boolean',
      description: 'Controls message visibility',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessibility label for the message',
    },
    dataTestid: {
      control: 'text',
      description: 'Test identifier',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Show a section/page-specific event-based message to the user',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SectionMessage>;

export const Types: Story = {
  render: (args) => {
    return (
      <div className={styles.container}>
        {VALID_TYPES.map((type) => (
          <SectionMessage
            {...args}
            key={type}
            type={type}
            ariaLabel={`${TYPE_MAP[type].iconText} message`}
          >
            This is a {type} message with icon "{TYPE_MAP[type].iconName}"
          </SectionMessage>
        ))}
      </div>
    );
  },
  args: {
    className: styles['message'],
    canDismiss: true,
    isVisible: true,
  },
};

export const WithCustomDismiss: Story = {
  render: (args) => (
    <SectionMessage
      {...args}
      type="warning"
      canDismiss
      onDismiss={() => {
        console.log('Message dismissed!');
      }}
      ariaLabel="Warning message with custom dismiss"
    >
      This message has a custom dismiss handler (check console)
    </SectionMessage>
  ),
};

export const NonDismissible: Story = {
  render: (args) => (
    <SectionMessage
      type="info"
      canDismiss={false}
      {...args}
      ariaLabel="Non-dismissible info message"
    >
      This message cannot be dismissed as canDismiss is false
    </SectionMessage>
  ),
};

export const WithLongContent: Story = {
  render: (args) => (
    <SectionMessage
      {...args}
      type="info"
      canDismiss
      ariaLabel="Info message with long content"
    >
      This is a message with longer content to demonstrate how the message component
      handles multiple lines of text. The close button should remain properly aligned
      and the icon should stay at the top of the content.
    </SectionMessage>
  ),
};