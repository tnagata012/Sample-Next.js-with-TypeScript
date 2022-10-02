import React, { useState, useCallback } from 'react'

type ButtonProps = {
  onClick: () => void
}

const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props

  console.log('DecrementButton was re-rendering')

  return <button onClick={onClick}>Decrement</button>
}

const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props

  console.log('IncrementButton was re-rendering')

  return <button onClick={onClick}>Increment</button>
})

// for ESlint
IncrementButton.displayName = 'IncrementButton'

const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props

  console.log('DoubleButton was re-rendering')

  return <button onClick={onClick}>Double</button>
})

// for ESlint
DoubleButton.displayName = 'DoubleButton'

const Parent = () => {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount((c) => c - 1)
  }
  const increment = () => {
    setCount((c) => c + 1)
  }
  const double = useCallback(() => {
    setCount((c) => c * 2)
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <DecrementButton onClick={decrement} />
      <IncrementButton onClick={increment} />
      <DoubleButton onClick={double} />
    </div>
  )
}

export default Parent
