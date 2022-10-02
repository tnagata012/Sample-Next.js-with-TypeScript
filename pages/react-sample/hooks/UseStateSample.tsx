import { useRouter } from 'next/router'
import { useState } from 'react'

const Counter = () => {
  const router = useRouter()
  const [count, setCount] = useState(Number(router?.query?.initialValue) ?? 0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  )
}

export default Counter
