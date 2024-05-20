import type { Meta, StoryObj } from '@storybook/react'

import Avatar from '.'

type Story = StoryObj<typeof Avatar>

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  argTypes: {}
}

export default meta

export const Default: Story = {
  render: args => <Avatar {...args} />,
  args: {
    src: 'https://i.pravatar.cc/',
    alt: 'WIP - Avatar - username',
    size: 'large'
  }
}
