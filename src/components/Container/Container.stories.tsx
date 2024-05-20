import type { Meta, StoryObj } from '@storybook/react'

import SContainer from './styles'

const meta: Meta<typeof SContainer> = {
  component: SContainer
}

export default meta
type Story = StoryObj<typeof SContainer>

export const Container: Story = {
  render: () => <SContainer>Container example</SContainer>
}
