import React, { useState } from 'react'
import { IoLogoWindows, } from 'react-icons/io'
import { FiLogOut, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import {
  Container,
  Logo,
  Ul,
  Li,
  ProfileContent,
  Profile,
  ProfileDetails,
  NameJob,
  Name,
  Job,
  ButtonBurguer
} from './styles';
import { useAuth } from '../../hooks/AuthContext';

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
  const { signOut } = useAuth()
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

        <ProfileContent>
          <Profile>
            <ProfileDetails>
              <img src="https://avatars.githubusercontent.com/u/37309024?v=4" alt="image profile" />
              <NameJob>
                <Name>Rafael Araujo</Name>
                <Job>Web Design</Job>
              </NameJob>
            </ProfileDetails>
            <button
              onClick={() => signOut()}
            >
              <FiLogOut />
            </button>
          </Profile>
        </ProfileContent>

        {/* <ButtonBurguer mobalActive={mobalActive}>
          <button
            onClick={() => setMobalActive(!mobalActive)}
          >
            <FiChevronRight />
          </button>
        </ButtonBurguer> */}

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
