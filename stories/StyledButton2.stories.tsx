import { ComponentMeta } from '@storybook/react'
import { StyledButton, StyledButtonProps } from '../components/StyledButton'

export default {
  title: 'StyledButton (2) - Use the action',
  component: StyledButton,
  argTypes: { onClick: { action: 'clicked!' } },
} as ComponentMeta<typeof StyledButton>

export const Primary = (props: StyledButtonProps) => {
  return (
    <StyledButton {...props} variant='primary'>
      Primary
    </StyledButton>
  )
}

export const Success = (props: StyledButtonProps) => {
  return (
    <StyledButton {...props} variant='success'>
      Primary
    </StyledButton>
  )
}

export const Transparent = (props: StyledButtonProps) => {
  return (
    <StyledButton {...props} variant='transparent'>
      Transparent
    </StyledButton>
  )
}
