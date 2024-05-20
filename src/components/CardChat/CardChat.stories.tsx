import type { Meta, StoryObj } from '@storybook/react'

import CardChat from '.'

type Story = StoryObj<typeof CardChat>

const meta: Meta<typeof CardChat> = {
  component: CardChat
}

export default meta

export const Default: Story = {
  render: () => <CardChat />,
  args: {}
}
