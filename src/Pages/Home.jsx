import React, { useEffect, useState } from "react";
import * as S from "./Auth.styles";

const Home = () => {
  const token = window.localStorage.getItem("token");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/content/skills`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data || token) {
          setData(data);
        } else if (!data.content) {
          alert("No data found");
        }
      })
      .catch((err) => console.log(err));
  });

  // const data = [
  //   {
  //     title: "HTML",
  //     description:
  //       "HTML is the standard markup language for creating web pages and web applications. It is used to create the structure of a web page, but it is not a programming language.",
  //   },
  //   {
  //     title: "CSS",
  //     description:
  //       "CSS is a style sheet language used for describing the presentation of a document written in a markup language like HTML.",
  //   },
  //   {
  //     title: "JavaScript",
  //     description:
  //       "JavaScript is a lightweight, interpreted programming language.",
  //   },
  // ];

  return (
    <div>
      {!data && <h1 className="title">Loading...</h1>}
      <S.Skills>
        {data.map((item, i) => (
          <S.Box id={i}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </S.Box>
        ))}
      </S.Skills>
    </div>
  );
};

export default Home;
