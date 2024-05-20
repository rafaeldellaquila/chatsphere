import type { Meta, StoryObj } from '@storybook/react'

import Typography from '.'

type Story = StoryObj<typeof Typography>

const meta: Meta<typeof Typography> = {
  component: Typography
}

export default meta

export const Default: Story = {
  render: args => <Typography {...args} />,
  args: {
    size: 'small',
    variant: 'span'
  }
}
