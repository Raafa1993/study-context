import { useState, useRef, useCallback } from "react";
import { useHistory } from "react-router";
import Button from "../../components/Buttons/Button";
import Input from "../../components/Buttons/Input";
import { useAuth } from '../../hooks/AuthContext'
import {
  Container,
  Content,
  Info,
  ContentForm,
  PanelRight,
  BackGroundLogin,
  TitleForm,
} from "./styles";

interface SignInFormData {
  email: string;
  password: string;
}

interface Errors {
  error: boolean;
  message: string;
  name: string;
}

export default function Login() {
  const formRef = useRef(null);
  const history = useHistory()
  const { signIn } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({} as Errors);
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
  });

  function handleinputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = useCallback(async (event: any) => {
    try {
      event.preventDefault();
      setLoading(true)

      const { email, password } = formData;

      const data = {
        email,
        password,
      };

      console.log(formData)

      if (data.email !== "mostweb@most.com")
        throw {
          name: "Usuario ou senha incorretos.",
          message: "Usuario ou senha incorretos.",
        };

      // await signIn({
      //   email: data.email,
      //   password: data.password,
      // })

      setLoading(false)
      history.push('/forms')
      // setTimeout(() => {
      //   window.location.reload();
      // }, 1000);

    } catch (e: any) {
      setTimeout(() => {
        setError({
          error: true,
          message: e.message,
          name: e.name,
        });
        setLoading(false)
      }, 1000);
    }
  }, [signIn, history]
  )

  return (
    <Container>
      <Content>
        <Info>
          <ContentForm>
            <TitleForm>
              <h1>Most Web</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </TitleForm>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="field">
                <Input
                  value={formData.email}
                  type="email"
                  name="email"
                  label="email"
                  onChange={handleinputChange}
                  error={error}
                />
              </div>

              <div className="field">
                <Input
                  value={formData.password}
                  type="password"
                  name="password"
                  label="password"
                  onChange={handleinputChange}
                />
              </div>
              <Button
                loading={loading}
                type='submit'
              >
                Entrar
              </Button>
            </form>
          </ContentForm>
        </Info>
        <PanelRight>
          <BackGroundLogin></BackGroundLogin>
        </PanelRight>
      </Content>
    </Container>
  );
}
