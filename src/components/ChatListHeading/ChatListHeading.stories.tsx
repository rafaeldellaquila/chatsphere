import type { Meta, StoryObj } from '@storybook/react'

import ChatListHeading from '.'

type Story = StoryObj<typeof ChatListHeading>

const meta: Meta<typeof ChatListHeading> = {
  component: ChatListHeading
}

export default meta

export const Default: Story = {
  render: args => <ChatListHeading {...args} />,
  args: {}
}
