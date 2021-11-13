import styled from "styled-components";

export const navContainer = styled.div`
  background-color: #eee;
  height: 80px;
`;

export const NavbarItems = styled.nav`
  display: flex;
  flex-direction: row;
  width: 85%;
  margin: 0 auto;
  justify-content: space-between;
`;

export const navbar_logo = styled.h1`
  align-items: center;
`;

export const logo = styled.div`
  img {
    width: 100px;
  }
`;

export const menu_icon = styled.div``;

export const nav_menu = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  align-items: center;
  width: 100%;
  li {
    margin-left: 50px;
    a {
      text-decoration: none;
      color: orangered;
      font-weight: bold;
    }
  }
`;

export const Button = styled.button`
  width: 150px;
  background-color: orangered;
  color: white;
  border: none;
  border-radius: 4px;
  height: 30px;
  align-items: center;
  margin-top: 25px;
  cursor: pointer;
`;
