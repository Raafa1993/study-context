import { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  active: boolean;

}


export default function ButtonSettings({ children, title, active, ...rest }: ButtonProps) {
  return (
    <Container
      active={active}
      title={title}
      {...rest}
    >
      {children}
      <span className="tooltip">{title}</span>
    </Container>
  )
}
