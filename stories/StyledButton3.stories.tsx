import { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { StyledButton, StyledButtonProps } from '../components/StyledButton'

export default {
  title: 'StyledButton (3) - Calling actions dynamically',
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>

const incrementAction = action('increment')

export const Primary = (props: StyledButtonProps) => {
  const [count, setCount] = useState(0)
  const onClick = (e: React.MouseEvent) => {
    incrementAction(e, count)
    setCount((c) => c + 1)
  }

  return (
    <StyledButton {...props} variant='primary' onClick={onClick}>
      Count: {count}
    </StyledButton>
  )
}
