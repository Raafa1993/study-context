import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 240px;
  background: #11101d;
  padding: 6px 14px;
  transition: all 0.5s ease;
`;

interface IMenuItem {
  active?: boolean;
}

export const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  color: #fff;
  font-size: 1.75rem;

  span {
    font-size: 1.375rem;
    color: #fff;
    font-weight: 500;
  }

  svg {
    margin-right: 5px;
  }
`;

export const Ul = styled.ul`
  margin-top: 20px;
`;

export const Li = styled.li<IMenuItem>`
  width: 100%;
  height: 50px;
  margin: 0 5px;
  list-style: none;
  line-height: 50px;
  position: relative;

  background: ${props => props.active ? "#fff" : 'transparent'};
  border-radius: 12px;

  a {
    display: flex;
    align-items: center;
    color: ${(props) => (props.active ? "red" : "#fff")};
    white-space: nowrap;
    text-decoration: none;
    border-radius: 12px;
    transition: background-color 0.4s ease;

    &:hover {
      color: #11101d;
      background: #fff;
      transition: background-color 0.4s ease;
    }
  }

  .tooltip {
    position: absolute;
    left: 290px;
    top: 0;
    transform: translate(-50%);
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
  }

  svg {
    min-width: 50px;
    line-height: 50px;
    text-align: center;
    transition: all 0.5s;
    transform: ${(props) => (props.active ? "scale(1.3)" : "scale(1)")};
    color: ${(props) => (props.active ? "red" : "")};
  }

  &:hover {
    svg {
      transition: all 0.5s;
      transform: scale(1.3);
      color: red;
    }
    .tooltip {
      top: 50%;
      transition: all 0.5s ease;
      opacity: 1;
    }
  }
`;

export const ProfileContent = styled.div`
  position: absolute;
  color: #fff;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const Profile = styled.div`
  position: relative;
  padding: 10px 6px;
  height: 60px;
  background: #1d1b31;

  svg {
    position: absolute;
    left: 88%;
    bottom: 5px;
    transform: translateX(-50%);
    min-width: 50px;
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
  font-size: 15px;
  font-weight: 400;
`;

export const Job = styled.div`
  font-size: 12px;
`;
