import { Icon } from '@iconify/react/dist/iconify.js'
import type { Meta, StoryObj } from '@storybook/react'

import Button from './index'

type Story = StoryObj<typeof Button>

const meta: Meta<typeof Button> = {
  component: Button
}

export default meta

export const Default: Story = {
  render: args => <Button {...args} />,
  args: {
    children: 'Button',
    size: 'small'
  }
}

export const WithIcon: Story = {
  render: args => <Button {...args} />,
  args: {
    children: 'Button',
    icon: <Icon icon='hugeicons:message-01' />
  }
}

export const JustIcon: Story = {
  render: args => <Button {...args} />,
  args: {
    icon: <Icon icon='hugeicons:message-01' />,
    size: 'small'
  }
}

export const AsLink: Story = {
  render: args => <Button {...args} />,
  args: {
    size: 'large',
    color: 'transparent',
    children: 'Buy now',
    as: 'a',
    href: 'link'
  }
}
