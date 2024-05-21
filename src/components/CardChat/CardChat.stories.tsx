import type { Meta, StoryObj } from '@storybook/react'

import CardChat from '.'

type Story = StoryObj<typeof CardChat>

const meta: Meta<typeof CardChat> = {
  component: CardChat
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
  render: args => <CardChat {...args} />
}
