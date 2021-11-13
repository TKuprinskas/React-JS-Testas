import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Auth.styles";
import Navigation from "../../src/components/Layout/Header/Navigation";

const Login = () => {
  const [userInputs, setUserInputs] = useState([]);
  const Navigate = useNavigate();

  return (
    <S.Section>
      <Navigation />
      <S.Container>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();

            fetch(`${process.env.REACT_APP_BASE_URL}/v1/auth/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userInputs),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.token) {
                  window.localStorage.setItem("token", data.token);
                  Navigate("/", { replace: true });
                  return alert(data.msg);
                }
                return alert(data.err);
              })
              .catch((err) => alert(err.message))
              .finally(() => e.target.reset());
          }}
        >
          <S.Title>Login</S.Title>
          <S.Field>
            <S.Control>
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  setUserInputs({
                    ...userInputs,
                    email: e.target.value.trim().toLowerCase(),
                  })
                }
                required
              />
            </S.Control>
          </S.Field>

          <S.Field>
            <S.Control>
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setUserInputs({
                    ...userInputs,
                    password: e.target.value,
                  })
                }
                required
              />
            </S.Control>
          </S.Field>

          <S.Field>
            <S.Control>
              <S.Button>LOGIN</S.Button>
            </S.Control>
          </S.Field>
        </S.Form>
      </S.Container>
    </S.Section>
  );
};

export default Login;
