import type { Meta, StoryObj } from '@storybook/react'

import SideBar from '.'

type Story = StoryObj<typeof SideBar>

const meta: Meta<typeof SideBar> = {
  component: SideBar
}

export default meta

export const Default: Story = {
  render: () => <SideBar />,
  args: {}
}
