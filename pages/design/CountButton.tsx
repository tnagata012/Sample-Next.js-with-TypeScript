import { useState, useCallback } from 'react'
import Button from './Button'

type CountButtonProps = {
  label: string
  maximum: number
}

const usePopup = () => {
  const cb = useCallback((text: string) => {
    prompt(text)
  }, [])

  return cb
}

export const CountButton = (props: CountButtonProps) => {
  const { label, maximum } = props
  const displayPopup = usePopup()

  const [count, setCount] = useState(0)
  const onClick = useCallback(() => {
    const newCount = count + 1
    setCount(newCount)

    if (newCount >= maximum) {
      displayPopup(`You've clicked ${newCount} times`)
    }
  }, [count, maximum])

  const disabled = count >= maximum
  const text = disabled ? "Can't click anymore" : `You've clicked ${count}times`

  return <Button disabled={disabled} onClick={onClick} label={label} text={text} />
}

export default CountButton
