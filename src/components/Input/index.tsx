import { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'
import { Container, Error } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  value: string;
  Icon?: React.ComponentType<IconBaseProps>
  error?: {
    error: boolean,
    message: string,
    name: string
  };
}


export default function Input({ name, label, value, Icon, error, ...rest }: InputProps) {
  return (
    <Container value={value}>
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        name={name}
        {...rest}
      />

      {Icon && <Icon size={20} />}

      {error?.error && (
        <Error>
          <span>{error.message}</span>
        </Error>
      )}
    </Container>
  )
}
