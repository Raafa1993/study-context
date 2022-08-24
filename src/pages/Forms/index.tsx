import { FormEvent  } from 'react'
import { useToast } from '../../hooks/toast';
import useForm from '../../hooks/useForm';
import { 
  Container,
} from './styles';

export default function Forms() {
  const { addToast } = useToast();
  const cep = useForm('cep');
  const email = useForm('email');
  const cpf = useForm('cpf');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if(cep.validate() && email.validate() && cpf.validate()) {
      const newData = {
        cep: cep.value,
        email: email.value,
        cpf: cpf.value,
      }
      // alert(JSON.stringify(newData))
      addToast({
        type: "success",
        title: "Cadastro realizado",
        description: "Formulario cadastrado com sucesso!",
      });
      
    } else {
      const dataError = {
        cep: cep.error,
        email: email.error,
        cpf: cpf.error,
      }
      addToast({
        type: "error",
        title: "Erro no cadastro",
        description: "Ocorreu um erro ao fazer cadastro, cheque seus dados",
      });
      // alert(Object.values(dataError).filter((obj) => obj !== null))
    }
  }

  return (
    <Container>
      <div id="page-create-point">
        <form onSubmit={handleSubmit}>
          <h1>Formulario de estudo</h1>
          <fieldset>
            <legend>
              <h2>Dados</h2>
            </legend>

            <div className="field">
              <label htmlFor="cep">CEP</label>
              <input
                type="text"
                name="cep"
                id="cep"
                className={`${cep.error ? 'errorInput' : ''}`}
                onChange={cep.onChange}
                onBlur={cep.onBlur}
                onKeyUp={cep.onKeyUp}
                value={cep.value}
              />
              {cep.error && <p>{cep.error}</p>}
            </div>

            <div className="field">
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                name="cpf"
                id="cpf"
                className={`${cpf.error ? 'errorInput' : ''}`}
                onChange={cpf.onChange}
                onBlur={cpf.onBlur}
                onKeyUp={cpf.onKeyUp}
                value={cpf.value}
              />
              {cpf.error && <p>{cpf.error}</p>}
            </div>

            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                name="email"
                id="email"
                className={`${email.error ? 'errorInput' : ''}`}
                onChange={email.onChange}
                onBlur={email.onBlur}
                onKeyUp={email.onKeyUp}
                value={email.value}
              />
              {email.error && <p>{email.error}</p>}
            </div>

            {/* <div className="field-group">
              <div className="field">
                <label htmlFor="address">Endereço</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div className="field">
                <label htmlFor="whatsapp">Whatsapp</label>
                <input
                  type="text"
                  name="whatsapp"
                  id="whatsapp"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div> */}
          </fieldset>

          <button type="submit">
            Cadastre
          </button>
        </form>
      </div>
    </Container>
  )
}
