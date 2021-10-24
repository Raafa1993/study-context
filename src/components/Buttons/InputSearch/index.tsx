import { InputHTMLAttributes, useCallback, useRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

import { Container } from './styles'

export default function InputSearch({ children, ...rest }: any) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsField(!!inputRef.current?.value);

  }, []);

  return (
    <Container
      isField={isField}
      isFocused={isFocused}
      {...rest}
    >
      {<FiSearch size={20} color={'#393452'} />}

      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        placeholder="Search"
        {...rest}
      />

    </Container>
  )
}
