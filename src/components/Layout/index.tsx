import React from 'react'
import {
  FiCoffee,
  FiBookOpen,
  FiCodesandbox,
  FiGitlab,
  FiLayers,
  FiCompass,
  FiSettings,
} from 'react-icons/fi'

import Sidebar from '../Sidebar';

import { Container, Main } from './styles';

export default function Layout(props: any) {
  console.log(props)

  return (
    <Container>
      <Sidebar
        path={props.location.pathname}
        menus={[
          {
            to: '/home',
            name: 'Home',
            icon: FiCoffee,
          },
          {
            to: '/admin',
            name: 'Admin',
            icon: FiBookOpen,
          },
          {
            to: '/admin',
            name: 'Admin',
            icon: FiCodesandbox,
          },
          {
            to: '/admin',
            name: 'Admin',
            icon: FiGitlab,
          },
          {
            to: '/admin',
            name: 'Admin',
            icon: FiLayers,
          },
          {
            to: '/admin',
            name: 'Admin',
            icon: FiCompass,
          },
          {
            to: '/admin',
            name: 'Admin',
            icon: FiSettings,
          },

        ]}
      />
      <Main>
        {props.children}
      </Main>
    </Container>
  )
}
