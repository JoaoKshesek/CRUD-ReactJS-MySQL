import React from "react";
import "./card.css";
import ModalForm from "../Modal/modalForm";

export default function Card(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ModalForm
        open={open}
        setOpen={setOpen}
        title={props.name}
        category={props.category}
        style={props.style}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id}
      />
      <div className="card-container" onClick={() => setOpen(true)}>
        <h1 className="card-title">{props.name}</h1>
        <p>Vinho: {props.name}</p>
        <p>Categoria: {props.category}</p>
        <p>Estilo: {props.style}</p>
      </div>
    </>
  );
}
