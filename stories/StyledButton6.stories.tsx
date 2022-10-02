import { ComponentMeta } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'
import { StyledButton, StyledButtonProps } from '../components/StyledButton'

export default {
  title: 'StyledButton (6) - use the Link',
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>

export const Primary = (props: StyledButtonProps) => {
  return (
    <StyledButton {...props} variant='primary' onClick={linkTo('StyledButton (6) - use the Link', 'Success')}>
      Primary
    </StyledButton>
  )
}

export const Success = (props: StyledButtonProps) => {
  return (
    <StyledButton {...props} variant='success' onClick={linkTo('StyledButton (6) - use the Link', 'Transparent')}>
      Primary
    </StyledButton>
  )
}

export const Transparent = (props: StyledButtonProps) => {
  return (
    <StyledButton {...props} variant='transparent' onClick={linkTo('StyledButton (6) - use the Link', 'Primary')}>
      Transparent
    </StyledButton>
  )
}
