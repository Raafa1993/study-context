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
            to: '/profiles',
            name: 'Profiles',
            icon: FiCodesandbox,
          },
          {
            to: '/sections',
            name: 'Sections',
            icon: FiGitlab,
          },
          {
            to: '/friends',
            name: 'Friends',
            icon: FiLayers,
          },
          {
            to: '/games',
            name: 'Games',
            icon: FiCompass,
          },
          {
            to: '/settings',
            name: 'Settings',
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
