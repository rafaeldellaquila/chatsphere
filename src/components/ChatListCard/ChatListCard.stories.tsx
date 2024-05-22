import type { Meta, StoryObj } from '@storybook/react'

import ChatListCard from '.'

type Story = StoryObj<typeof ChatListCard>

const meta: Meta<typeof ChatListCard> = {
  component: ChatListCard
}

export default meta

export const Default: Story = {
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'WIP - Avatar - username',
    username: 'username',
    message: 'message',
    time: '12:00',
    checked: false
  },
  render: args => <ChatListCard {...args} />
}
