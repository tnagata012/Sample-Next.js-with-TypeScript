import React from 'react'

const TitleContext = React.createContext<string>('')

const Title = () => {
  return (
    <TitleContext.Consumer>
      {(title: string) => {
        return <h1>{title}</h1>
      }}
    </TitleContext.Consumer>
  )
}

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  )
}

const Page = () => {
  const title = 'Hello'

  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  )
}

export default Page
