import { useState } from 'react'
import { IoLogoWindows, } from 'react-icons/io'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import {
  Container,
  Logo,
  Ul,
  Li,
  ButtonBurguer,
} from './styles';

interface IMenu {
  to: string;
  onClick?(): void;
  icon?: any;
  name: string;
}

interface ISiderbar {
  menus: IMenu[];
  path: string;
}

export default function Sidebar({ menus, path }: ISiderbar) {
  const [mobalActive, setMobalActive] = useState(false)
  return (
    <>
      <Container mobalActive={mobalActive}>
        <Logo mobalActive={mobalActive}>
          <IoLogoWindows />
          <span>MostWeb</span>
        </Logo>
        <Ul>
          {menus.map((row, key) => (
            <Li
              key={key}
              active={path === row.to ? true : false}
              mobalActive={mobalActive}
            >
              <Link
                to={row.to}
                onClick={
                  row.onClick ? row.onClick : () => { }
                }
              >
                <row.icon />
                <span>{row.name}</span>
              </Link>
              <span className="tooltip">{row.name}</span>
            </Li>
          ))}
        </Ul>

      </Container>

      <ButtonBurguer mobalActive={mobalActive}>
        <button
          onClick={() => setMobalActive(!mobalActive)}
        >
          <FiChevronRight />
        </button>
      </ButtonBurguer>
    </>
  )
}
