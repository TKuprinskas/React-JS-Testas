import React from "react";
import { MenuItems } from "./MenuItems";
import * as S from "./Navbar.styles";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const refreshPage = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  const Navigate = useNavigate();

  return (
    <S.navContainer>
      <S.NavbarItems>
        <S.navbar_logo>
          <S.logo>
            <Link to="/">
              {" "}
              <img
                src="https://www.google.lt/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                alt=""
              ></img>
            </Link>
          </S.logo>
        </S.navbar_logo>
        <S.nav_menu>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.url}
                  onClick={() => {
                    refreshPage();
                  }}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </S.nav_menu>
        <S.Button
          onClick={(e) => {
            localStorage.removeItem("token");
            Navigate("/login", { replace: true });
          }}
        >
          LOG OUT
        </S.Button>
      </S.NavbarItems>
    </S.navContainer>
  );
};

export default NavBar;
