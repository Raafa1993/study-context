import React from 'react'
import { BiDollar } from "react-icons/bi"

import { Container } from './styles';

interface Props {
  title: string;
  subtitle: string;
}

export default function CardDefaul({
  title,
  subtitle,
}: Props) {
  return (
    <Container>
      <div className="infoCard">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>

      <div className="icon">
        <BiDollar size={'2rem'} color="#fff" />
      </div>
    </Container>
  )
}
