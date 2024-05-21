import type { Meta, StoryObj } from '@storybook/react'

import SearchInput from '.'

type Story = StoryObj<typeof SearchInput>

const meta: Meta<typeof SearchInput> = {
  component: SearchInput
}

export default meta

export const Default: Story = {
  args: {
    icon: 'hugeicons:search-01'
  },
  render: args => <SearchInput {...args} />
}
