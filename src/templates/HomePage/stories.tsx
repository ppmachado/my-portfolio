import { Story, Meta } from '@storybook/react'
import HomePage from '.'

export default {
  title: 'Templates/HomePage',
  component: HomePage
} as Meta

export const Default: Story = () => <HomePage />
