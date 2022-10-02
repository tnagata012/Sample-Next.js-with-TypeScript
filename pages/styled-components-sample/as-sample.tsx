import { NextPage } from 'next'
import styled from 'styled-components'

const Text = styled.p`
  color: #f0ff0f;
  font-size: 2em;
`

const Page: NextPage = () => {
  return (
    <div>
      <Text>World</Text>
      <Text as='a' href='/'>
        Go to index
      </Text>
    </div>
  )
}

export default Page
