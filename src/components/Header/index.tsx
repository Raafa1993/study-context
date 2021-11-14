
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
            <img src="https://lh3.googleusercontent.com/ogw/ADea4I7zw5HE722fQW5PYNh1B1EWhCu-spnDyhuCbSaDVhY=s83-c-mo" alt="profile" />
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
