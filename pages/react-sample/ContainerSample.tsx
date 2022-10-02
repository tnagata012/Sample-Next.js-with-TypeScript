import React from 'react'

type ContainerProps = {
  title: string
  children: React.ReactNode
}

const Container = (props: ContainerProps) => {
  const { title, children } = props

  return (
    <div style={{ background: 'red' }}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  )
}

const Parent = () => {
  return (
    <Container title='Hello'>
      <p>This area will be boxed in the background color </p>
    </Container>
  )
}

export default Parent
