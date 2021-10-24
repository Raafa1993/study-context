import styled from "styled-components";
import { FiBell, FiMessageCircle } from 'react-icons/fi';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  align-items: center;
  height: 80px;
`

export const SectionProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 100%;
`;

export const SectionNotifications = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-right: 30px;
`;

export const ButtonNotification = styled.button`
  display: grid;
  place-items: center;

  width: 28px;
  height: 28px;
  border: none;
  background: transparent;

  transition: filter 0.4s;

  &:hover {
    filter: brightness(0.9);
    transition: filter 0.4s;
  }
`;

export const NotificationIcon = styled(FiBell)`
  width: 22px;
  height: 22px;
  color: var(--primary);
`;

export const MessageIcon = styled(FiMessageCircle)`
  width: 22px;
  height: 22px;
  color: var(--primary);
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Image = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px;
    width: 40px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 16px;
    font-weight: bold;
    color: var(--primary);
  }
  span {
    font-size: 14px;
    color: var(--colorText);
  }
`;

