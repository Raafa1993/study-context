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
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  margin-top: 60px;
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
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
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

// export const SectionNotification = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   border-radius: 16px;
//   padding: 12px;

//   background: var(--background);

//   position: relative;

//   button {
//     display: grid;
//     place-items: center;

//     width: 100%;
//     height: 48px;

//     border: none;
//     border-radius: 12px;
//     background: linear-gradient(
//       90deg,
//       rgba(103, 116, 236, 1) 0%,
//       rgba(137, 236, 242, 1) 100%
//     );
//     font-size: 16px;
//     font-weight: bold;
//     color: #fff;

//     margin-top: 16px;
//   }

// `;

// export const NotificationImage = styled.div`
//   display: grid;
//   place-items: center;

//   position: absolute;
//   top: -28px;

//   img {
//     width: 60px;
//     height: 60px;
//     object-fit: cover;
//     border-radius: 50%;
//   }
// `;

// export const Message = styled.div`
//   display: grid;
//   place-items: center;
//   width: 80%;

//   margin-top: 40px;

//   span {
//     font-size: 16px;
//     font-weight: bold;
//     color: var(--primary);
//     text-align: center;
//   }
// `;

export const ButtonBurguer = styled.div<sidebarProps>`
  padding-top: 440px;
  transition: all 0.5s ease;

  button {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 30px;
    height: 60px;

    outline: none;
    border: none;

    border-radius: 0 12px 12px 0;
    background: var(--primary);

    font-size: 2rem;
    color: var(--white);

    svg {
        transform: ${props => !props.mobalActive ? 'rotate(180deg)' : 'rotate(0)'};
        transition: 0.5s;
      }
  }
`;