import { FormEvent, useEffect, useState  } from 'react'
import { useToast } from '../../hooks/toast';
import useForm from '../../hooks/useForm';

import { BiSearch } from "react-icons/bi";

import { 
  Container,
  ContentDebounce,
  StyledWrapper,
  StyledTextbox,
  StyledResults,
  StyledIcon,
} from './styles';

export default function Forms() {
  const { addToast } = useToast();
  const cep = useForm('cep');
  const email = useForm('email');
  const cpf = useForm('cpf');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if(cep.validate() && email.validate() && cpf.validate()) {
      // const newData = {
      //   cep: cep.value,
      //   email: email.value,
      //   cpf: cpf.value,
      // }
      // alert(JSON.stringify(newData))
      addToast({
        type: "success",
        title: "Cadastro realizado",
        description: "Formulario cadastrado com sucesso!",
      });
      
    } else {
      // const dataError = {
      //   cep: cep.error,
      //   email: email.error,
      //   cpf: cpf.error,
      // }
      addToast({
        type: "error",
        title: "Erro no cadastro",
        description: "Ocorreu um erro ao fazer cadastro, cheque seus dados",
      });
      // alert(Object.values(dataError).filter((obj) => obj !== null))
    }
  }

  const heroes = [
    {
        "superhero":"Batman", 
        "publisher":"DC Comics", 
        "alter_ego":"Bruce Wayne",
        "first_appearance":"Detective Comics #27",
        "characters":"Bruce Wayne"
    },
    {
        "superhero":"Superman", 
        "publisher":"DC Comics", 
        "alter_ego":"Kal-El",
        "first_appearance":"Action Comics #1",
        "characters":"Kal-El"
    },
    {
        "superhero":"Flash", 
        "publisher":"DC Comics", 
        "alter_ego":"Jay Garrick",
        "first_appearance":"Flash Comics #1",
        "characters":"Jay Garrick, Barry Allen, Wally West, Bart Allen"
    },
    {
        "superhero":"Green Lantern", 
        "publisher":"DC Comics", 
        "alter_ego":"Alan Scott",
        "first_appearance":"All-American Comics #16",
        "characters":"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"
    },
    {
        "superhero":"Green Arrow", 
        "publisher":"DC Comics", 
        "alter_ego":"Oliver Queen",
        "first_appearance":"More Fun Comics #73",
        "characters":"Oliver Queen"
    },
    {
        "superhero":"Wonder Woman", 
        "publisher":"DC Comics", 
        "alter_ego":"Princess Diana",
        "first_appearance":"All Star Comics #8",
        "characters":"Princess Diana"
    },
    {
        "superhero":"Martian Manhunter", 
        "publisher":"DC Comics", 
        "alter_ego":"J'onn J'onzz",
        "first_appearance":"Detective Comics #225",
        "characters":"Martian Manhunter"
    },
    {
        "superhero":"Robin/Nightwing", 
        "publisher":"DC Comics", 
        "alter_ego":"Dick Grayson",
        "first_appearance":"Detective Comics #38",
        "characters":"Dick Grayson"
    },
    {
        "superhero":"Blue Beetle", 
        "publisher":"DC Comics", 
        "alter_ego":"Dan Garret",
        "first_appearance":"Mystery Men Comics #1",
        "characters":"Dan Garret, Ted Kord, Jaime Reyes"
    },
    {
        "superhero":"Black Canary", 
        "publisher":"DC Comics", 
        "alter_ego":"Dinah Drake",
        "first_appearance":"Flash Comics #86",
        "characters":"Dinah Drake, Dinah Lance"
    },
    {
        "superhero":"Spider Man", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Peter Parker",
        "first_appearance":"Amazing Fantasy #15",
        "characters":"Peter Parker"
    },
    {
        "superhero":"Captain America", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Steve Rogers",
        "first_appearance":"Captain America Comics #1",
        "characters":"Steve Rogers"
    },
    {
        "superhero":"Iron Man", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Tony Stark",
        "first_appearance":"Tales of Suspense #39",
        "characters":"Tony Stark"
    },
    {
        "superhero":"Thor", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Thor Odinson",
        "first_appearance":"Journey into Myster #83",
        "characters":"Thor Odinson"
    },
    {
        "superhero":"Hulk", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Bruce Banner",
        "first_appearance":"The Incredible Hulk #1",
        "characters":"Bruce Banner"
    },
    {
        "superhero":"Wolverine", 
        "publisher":"Marvel Comics", 
        "alter_ego":"James Howlett",
        "first_appearance":"The Incredible Hulk #180",
        "characters":"James Howlett"
    },
    {
        "superhero":"Daredevil", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Matthew Michael Murdock",
        "first_appearance":"Daredevil #1",
        "characters":"Matthew Michael Murdock"
    },
    {
        "superhero":"Hawkeye", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Clinton Francis Barton",
        "first_appearance":"Tales of Suspense #57",
        "characters":"Clinton Francis Barton"
    },
    {
        "superhero":"Cyclops", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Scott Summers",
        "first_appearance":"X-Men #1",
        "characters":"Scott Summers"
    },
    {
        "superhero":"Silver Surfer", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Norrin Radd",
        "first_appearance":"The Fantastic Four #48",
        "characters":"Norrin Radd"
    }
  ]

  function useDebounce(value: any, delay: any) {
    const [debouncedValue, setDebouncedValue] = useState(false);
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler)
      }
    }, [value, delay]);
    return debouncedValue;
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([] as any);
  const [isSearching, setSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if(debouncedSearchTerm) {
      setSearching(true);
      setResults(
        heroes.filter((obj: any) => obj.superhero.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setSearching(false);
    } else {
      setResults([]);
      setSearching(false);
    }
  }, [debouncedSearchTerm])

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

      <ContentDebounce>
        <StyledWrapper>
          <StyledTextbox 
            placeholder="Start Searching"
            onChange={(e: any) => setSearchTerm(e.target.value)}
          />
          <StyledIcon>
            <BiSearch color='rgba(255, 255, 255, 0.96)' />
          </StyledIcon>

          <StyledResults>
            {results?.map((item: any) => (
              <div>
                {item.superhero}
              </div>
            ))}
          </StyledResults>
        </StyledWrapper>
      </ContentDebounce>
    </Container>
  )
}
