import { ChangeEvent, useState, useCallback } from "react";
import { maskCEP, maskCPF } from '../utils/masks';

const types: any = {
    cep: {
      regex: /^\d{5}-?\d{3}$/,
      message: 'Cep inválido',
      errorNull: "Preencha o campo cep"
    },
    email: {
      regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Email inválido',
      errorNull: "Preencha o campo email"
    },
    cpf: {
      regex: /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/,
      message: 'CPF inválido',
      errorNull: "Preencha o campo cpf"
    },
  };

export default function useForm(type: any) {
  const [value, setValue] = useState('');
  const [error, setError] = useState<any>('');

  function validate(value: any) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  const handleKeyUp = useCallback(e => {
    if (type === "cpf") {
        setValue(maskCPF(e))
    } else if (type === "cep") {
      setValue(maskCEP(e));
    } else if (type === "add") {
      setValue(maskCPF(e))
    } else if (type === "currency") {
        maskCEP(e);
    } else if (type === "fone") {
        maskCEP(e);
    } else {
      return;
    }
    return;
  },
  [type],
);

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
    onKeyUp: () => handleKeyUp(value),
  }
}
