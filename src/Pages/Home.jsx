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
  },[]);



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
