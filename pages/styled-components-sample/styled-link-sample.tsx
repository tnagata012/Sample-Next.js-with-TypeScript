import { NextPage } from 'next'
import Link, { LinkProps } from 'next/link'
import React from 'react'
import styled from 'styled-components'

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
  className?: string
  children: React.ReactNode
}

const BaseLink = (props: BaseLinkProps) => {
  const { className, children, ...rest } = props
  return (
    <p>
      <Link {...rest}>
        <a className={className}>{children}</a>
      </Link>
    </p>
  )
}

const StyledLink = styled(BaseLink)`
  color: #f090ff;
  font-size: 1.5em;
`

const Page: NextPage = () => {
  return (
    <div>
      <StyledLink href='/'>Go to Index</StyledLink>
      <StyledLink href='./badge'>Badge</StyledLink>
      <StyledLink href='./props-sample'>Props</StyledLink>
      <StyledLink href='./mixin-sample'>Mixin</StyledLink>
      <StyledLink href='./inheritance-sample'>Inheritance</StyledLink>
      <StyledLink href='./as-sample'>as</StyledLink>
      <StyledLink href='./theme-sample'>Theme</StyledLink>
    </div>
  )
}

export default Page
