import type { Meta, StoryObj } from '@storybook/react'

import LogoComponent from './index'

type Story = StoryObj<typeof LogoComponent>

const meta: Meta<typeof LogoComponent> = {
  component: LogoComponent,
  argTypes: {
    variant: {
      options: ['icon', 'logo'],
      control: { type: 'radio' }
    },
    color: {
      options: ['white', 'colored'],
      control: { type: 'radio' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    }
  }
}

export default meta

export const Logo: Story = {
  render: args => <LogoComponent {...args} />
}
