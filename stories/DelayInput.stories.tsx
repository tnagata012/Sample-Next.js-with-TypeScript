import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DelayInput } from '../components/unit-test-sample/DelayInput'

export default {
  title: 'Unit Test: DelayInput button',
  component: DelayInput,
} as ComponentMeta<typeof DelayInput>

const Template: ComponentStory<typeof DelayInput> = (args) => <DelayInput {...args} />

export const TemplateTest = Template.bind({})

TemplateTest.args = {
  onChange: () => undefined,
}
