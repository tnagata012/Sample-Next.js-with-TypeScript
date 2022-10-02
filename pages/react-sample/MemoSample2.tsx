import { memo, useState } from 'react'

type FizzProps = {
  isFizz: boolean
}

type BuzzProps = {
  isBuzz: boolean
  onClick: () => void
}

const Fizz = (props: FizzProps) => {
  const { isFizz } = props
  console.log(`Fizz was re-rendering, isFizz=${isFizz}`)
  return <span>{isFizz ? 'Fizz' : ''}</span>
}

const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz, onClick } = props
  console.log(`Buzz was re-rendering, izBuzz=${isBuzz}`)
  return <span onClick={onClick}>{isBuzz ? 'Buzz' : ''}</span>
})

// for ESlint
Buzz.displayName = 'Buzz'

const Parent = () => {
  const [count, setCount] = useState(1)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0

  const onBuzzClick = () => {
    console.log(`Buzz was clicked isBuzz=${isBuzz}`)
  }
  console.log(`Parent was re-rendering, count=${count}`)

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <p>{`Current count: ${count}`}</p>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
      </p>
    </>
  )
}

export default Parent
