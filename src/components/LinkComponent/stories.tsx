import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import LinkComponent, { LinkProps } from '.'

export default {
  title: 'LinkComponent',
  component: LinkComponent,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta

export const Default: Story<LinkProps> = (args) => <LinkComponent {...args} />

Default.args = {
  children: 'Most Populars',
  color: 'darkGray',
}
