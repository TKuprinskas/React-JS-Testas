import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Auth.styles";

const AddContent = () => {
  const token = window.localStorage.getItem("token");
  const [userInputs, setUserInputs] = useState([]);
  const Navigate = useNavigate();

  return (
    <S.Section>
      <S.Container>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();

            fetch(`${process.env.REACT_APP_BASE_URL}/v1/content/skills`, {
              method: "POST",
              headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userInputs),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data) {
                  alert("Skills added succesfully!");
                  setUserInputs("");
                  Navigate("/", { replace: true });
                }
              })
              .catch((err) => alert(err.message))
              .finally(() => e.target.reset());
          }}
        >
          <S.Title>ADD SKILLS</S.Title>
          <S.Field>
            <S.Control>
              <label className="label">Title</label>
              <input
                className="input"
                type="text"
                placeholder="Title"
                onChange={(e) =>
                  setUserInputs({
                    ...userInputs,
                    title: e.target.value.trim(),
                  })
                }
                required
              />
            </S.Control>
          </S.Field>

          <S.Field>
            <S.Control>
              <label className="label">Description</label>
              <textarea
                className="textarea"
                onChange={(e) =>
                  setUserInputs({
                    ...userInputs,
                    description: e.target.value.trim(),
                  })
                }
                placeholder="Description"
                required
              ></textarea>
            </S.Control>
          </S.Field>

          <S.Field>
            <S.Control>
              <S.Button>ADD SKILLS</S.Button>
            </S.Control>
          </S.Field>
        </S.Form>
      </S.Container>
    </S.Section>
  );
};

export default AddContent;
