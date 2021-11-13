import React from "react";
import * as S from "./Navbar.styles";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
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
          <li>
            <Link
              to="/login"
              onClick={() => {
                refreshPage();
              }}
            >
              LOGIN
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              onClick={() => {
                refreshPage();
              }}
            >
              REGISTER
            </Link>
          </li>
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

export default Navigation;
