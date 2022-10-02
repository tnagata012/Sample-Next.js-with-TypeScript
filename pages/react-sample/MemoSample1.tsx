import React, { useState } from 'react'

type FizzProps = {
  isFizz: boolean
}

type BuzzProps = {
  isBuzz: boolean
}

const Fizz = (props: FizzProps) => {
  const { isFizz } = props
  console.log(`Fizz was re-rendering, isFizz=${isFizz}`)
  return <span>{isFizz ? 'Fizz' : ''}</span>
}

const Buzz = React.memo<BuzzProps>((props) => {
  const { isBuzz } = props
  console.log(`Buzz was re-rendering, izBuzz=${isBuzz}`)
  return <span>{isBuzz ? 'Buzz' : ''}</span>
})

// for ESlint
Buzz.displayName = 'Buzz'

const Parent = () => {
  const [count, setCount] = useState(1)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0

  console.log(`Parent was re-rendering, count=${count}`)
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <p>{`Current count: ${count}`}</p>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} />
      </p>
    </>
  )
}

export default Parent
