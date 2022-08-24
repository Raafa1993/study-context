
import { useEffect, useState } from 'react';
import InputSearch from '../Buttons/InputSearch';
import {
  Container,
  SectionProfile,
  SectionNotifications,
  ButtonNotification,
  NotificationIcon,
  MessageIcon,
  Profile,
  Image,
  Info,
} from './styles';

export default function Header() {
  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    getUser()
  }, [])

  async function getUser() {
    const response = await fetch('https://api.github.com/users/Raafa1993');
    const body = await response.json();
    setAvatar(body.avatar_url)
  }
  
  return (
    <Container>
      <InputSearch />

      <SectionProfile>

        <SectionNotifications>

          <ButtonNotification>
            <NotificationIcon />
          </ButtonNotification>

          <ButtonNotification>
            <MessageIcon />
          </ButtonNotification>

        </SectionNotifications>

        <Profile>
          <Image>
            <img src={avatar} alt="profile" />
          </Image>
          <Info>
            <h2>Rafael Araujo</h2>
            <span>Top Manager</span>
          </Info>
        </Profile>

      </SectionProfile>
    </Container>
  )
}
