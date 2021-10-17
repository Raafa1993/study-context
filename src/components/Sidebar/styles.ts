import styled, { css } from "styled-components";

interface sidebarProps {
  mobalActive?: boolean;
  active?: boolean;
}

export const Container = styled.div<sidebarProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: ${(props) => (props.mobalActive ? "78px" : "220px")};
  background: var(--primary);
  padding: 6px 14px;
  transition: all 0.5s ease;

  position: relative;
`;

export const ButtonBurguer = styled.div<sidebarProps>`
  position: absolute;
  top: 50%;
  right: ${(props) => (props.mobalActive ? "-55%" : "-20%")};
  transform: translate(-50%, -50%);
  transition: all 0.5s ease;

  button {
    display: grid;
    place-items: center;
    width: 30px;
    height: 60px;

    outline: none;
    border: none;

    border-radius: 0 12px 12px 0;
    background: var(--primary);

    font-size: 2rem;
    color: var(--white);
  }
`;

export const Logo = styled.div<sidebarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  color: #fff;
  font-size: 1.75rem;

  span {
    color: #fff;
    font-weight: 500;
    display: ${(props) => (!props.mobalActive ? "block" : "none")};
  }

  svg {
    margin-right: 5px;
  }
`;

export const Ul = styled.ul`
  height: 80%;
`;

export const Li = styled.li<sidebarProps>`
  width: 100%;
  height: 50px;
  list-style: none;
  line-height: 50px;
  border-radius: 12px;
  position: relative;

  ${(props) =>
    props.active &&
    css`
      background: linear-gradient(
        90deg,
        rgba(103, 116, 236, 1) 0%,
        rgba(137, 236, 242, 1) 100%
      );
    `}
  a {
    display: flex;
    align-items: center;
    color: ${(props) => (props.active ? "#fff" : "var(--colorText)")};
    white-space: nowrap;
    text-decoration: none;
    border-radius: 12px;
  }

  span {
    opacity: 0;
    pointer-events: none;
    ${(props) =>
    !props.mobalActive &&
    css`
        opacity: 1;
        pointer-events: auto;
      `}
  }

  .tooltip {
    position: absolute;
    left: 133px;
    top: 0;
    transform: translate(-50%, -50%);
    border-radius: 6px;
    height: 35px;
    width: 122px;
    line-height: 35px;
    text-align: center;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0s;
    opacity: 0;
    pointer-events: none;
    display: ${(props) => (props.mobalActive ? "block" : "none")};
  }

  svg {
    min-width: 50px;
    line-height: 50px;
    text-align: center;
    transition: all 0.5s;
    transform: ${(props) => (props.active ? "scale(1.3)" : "scale(1)")};
    color: ${(props) => (props.active ? "#fff" : "var(--colorText)")};
  }

  &:hover {
    svg {
      transition: all 0.5s;
      transform: scale(1.3);
    }
    .tooltip {
      top: 50%;
      transition: all 0.5s ease;
      opacity: 1;
    }
  }
`;

export const ProfileContent = styled.div`
  color: #fff;
  width: 100%;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  padding: 10px 6px;
  height: 60px;
  background: #1d1b31;

  svg {
    bottom: 5px;
    transform: translateX(-50%);
    line-height: 50px;
  }
`;

export const ProfileDetails = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 12px;
  }
`;

export const NameJob = styled.div`
  margin-left: 10px;
`;

export const Name = styled.div`
  font-size: 0.93rem;
  font-weight: 400;
`;

export const Job = styled.div`
  font-size: 0.75rem;
`;
