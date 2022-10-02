import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Input } from '../components/unit-test-sample/Input'

export default {
  title: 'Unit Test: Input button',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const TemplateTest = Template.bind({})

TemplateTest.args = {
  label: 'test',
}
