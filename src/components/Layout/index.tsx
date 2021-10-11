import React from 'react'

import { Container } from './styles';

export default function Layout({ children, ...rest }: any) {
  return (
    <Container>
      {children}
    </Container>
  )
}
