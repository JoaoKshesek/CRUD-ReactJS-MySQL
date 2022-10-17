import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import Card from "./components/cards/cards";

export default function App() {
  const [values, setValues] = useState();

  const [listCard, setListCard] = useState([]);

  const handleRegisterGame = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      color: values.color,
      style: values.style,
    }).then(() => {
      Axios.post("http://localhost:3001/search", {
        name: values.name,
        color: values.color,
        style: values.style,
      }).then((response) => {
        setListCard([
          ...listCard,
          {
            id: values.id,
            name: values.name,
            color: values.color,
            style: values.style,
          },
        ]);
      });
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListCard(response.data);
    });
  }, []);

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">Catálogo de Vinho</h1>

        <input
          type="text"
          name="name"
          placeholder="Nome do vinho"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Cor do vinho"
          name="color"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Estilo do vinho"
          name="style"
          className="register-input"
          onChange={handleaddValues}
        />

        <button onClick={handleRegisterGame} className="register-button">
          Cadastrar
        </button>
      </div>

      {listCard.map((val) => (
        <Card
          listCard={listCard}
          setListCard={setListCard}
          key={val.id}
          id={val.id}
          name={val.name}
          color={val.color}
          style={val.style}
        />
      ))}
    </div>
  );
}
